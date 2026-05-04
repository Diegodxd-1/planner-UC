import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { adminClient } from '@/utils/supabase/admin';
import { createClient as createServerClient } from '@/utils/supabase/server';

export async function requireAdminAccess() {
  const cookieStore = await cookies();
  const supabase = createServerClient(cookieStore);

  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    return {
      error: NextResponse.json({ error: 'No autenticado' }, { status: 401 }),
    };
  }

  const { data: profile, error: profileError } = await adminClient
    .from('user_profiles')
    .select('role:roles(name)')
    .eq('id', user.id)
    .single();

  if (profileError) {
    return {
      error: NextResponse.json(
        { error: 'No se pudo validar el rol del usuario' },
        { status: 500 }
      ),
    };
  }

  const role = Array.isArray(profile?.role) ? profile.role[0] : profile?.role;
  if (role?.name !== 'administrador') {
    return {
      error: NextResponse.json({ error: 'Acceso denegado' }, { status: 403 }),
    };
  }

  return { user };
}
