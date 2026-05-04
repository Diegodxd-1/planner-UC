import { NextRequest, NextResponse } from 'next/server';
import { requireAdminAccess } from '@/lib/auth/server-auth';
import { adminClient } from '@/utils/supabase/admin';

const allowedRoles = ['profesor', 'alumno'] as const;

function isUuid(value: string) {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
    value
  );
}

function normalizeUpdatePayload(payload: Record<string, unknown>) {
  const fullName = String(payload.full_name ?? '').trim();
  const role = String(payload.role ?? '') as (typeof allowedRoles)[number];
  const isActive = payload.is_active !== false;
  const password = String(payload.password ?? '').trim();

  if (!fullName) {
    return { error: 'El nombre completo es obligatorio' };
  }

  if (!allowedRoles.includes(role)) {
    return { error: 'El rol seleccionado no es valido' };
  }

  if (password && password.length < 8) {
    return { error: 'La nueva contraseña debe tener al menos 8 caracteres' };
  }

  return {
    data: {
      full_name: fullName,
      role,
      is_active: isActive,
      password,
    },
  };
}

export async function PUT(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const auth = await requireAdminAccess();
  if ('error' in auth) {
    return auth.error;
  }

  const { id } = await context.params;
  if (!isUuid(id)) {
    return NextResponse.json({ error: 'ID de usuario invalido' }, { status: 400 });
  }

  const payload = await request.json();
  const normalized = normalizeUpdatePayload(payload);

  if ('error' in normalized) {
    return NextResponse.json({ error: normalized.error }, { status: 400 });
  }

  const { data: roleRecord, error: roleError } = await adminClient
    .from('roles')
    .select('id, name')
    .eq('name', normalized.data.role)
    .single();

  if (roleError || !roleRecord) {
    return NextResponse.json({ error: 'No se encontro el rol solicitado' }, { status: 400 });
  }

  const updateAuthPayload: {
    password?: string;
    user_metadata: { full_name: string };
  } = {
    user_metadata: {
      full_name: normalized.data.full_name,
    },
  };

  if (normalized.data.password) {
    updateAuthPayload.password = normalized.data.password;
  }

  const { error: authError } = await adminClient.auth.admin.updateUserById(id, updateAuthPayload);
  if (authError) {
    return NextResponse.json({ error: authError.message }, { status: 500 });
  }

  const { data: updatedProfile, error: profileError } = await adminClient
    .from('user_profiles')
    .update({
      full_name: normalized.data.full_name,
      role_id: roleRecord.id,
      is_active: normalized.data.is_active,
    })
    .eq('id', id)
    .select(
      `
      id,
      email,
      full_name,
      role_id,
      is_active,
      created_at,
      updated_at,
      role:roles(id, name, description)
    `
    )
    .single();

  if (profileError) {
    return NextResponse.json({ error: profileError.message }, { status: 500 });
  }

  return NextResponse.json({ user: updatedProfile });
}

export async function DELETE(
  _request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const auth = await requireAdminAccess();
  if ('error' in auth) {
    return auth.error;
  }

  const { id } = await context.params;
  if (!isUuid(id)) {
    return NextResponse.json({ error: 'ID de usuario invalido' }, { status: 400 });
  }

  if (auth.user.id === id) {
    return NextResponse.json(
      { error: 'No puedes eliminar tu propia cuenta de administrador' },
      { status: 403 }
    );
  }

  const { error } = await adminClient.auth.admin.deleteUser(id);
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
