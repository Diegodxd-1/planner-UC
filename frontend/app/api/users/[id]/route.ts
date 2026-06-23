import { NextRequest, NextResponse } from 'next/server';
import { requireAdminAccess } from '@/lib/auth/server-auth';
import { getAdminClient } from '@/utils/supabase/admin';
import { parseJsonObject } from '../../_shared/admin-mutations';

const allowedRoles = ['profesor', 'alumno'] as const;

function optionalString(value: unknown) {
  return typeof value === 'string' && value.trim() ? value.trim() : null;
}

function requiredString(value: unknown) {
  return typeof value === 'string' ? value.trim() : '';
}

function isUuid(value: string) {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
    value
  );
}

function isStrongPassword(password: string) {
  return (
    password.length >= 10 &&
    /[a-z]/.test(password) &&
    /[A-Z]/.test(password) &&
    /\d/.test(password)
  );
}

function normalizeUpdatePayload(payload: Record<string, unknown>) {
  const fullName = requiredString(payload.full_name);
  const role = requiredString(payload.role) as (typeof allowedRoles)[number];
  const isActive = payload.is_active !== false;
  const password = requiredString(payload.password);
  const contractType = optionalString(payload.contract_type);
  const category = optionalString(payload.category);

  if (!fullName) {
    return { error: 'El nombre completo es obligatorio' };
  }

  if (!allowedRoles.includes(role)) {
    return { error: 'El rol seleccionado no es valido' };
  }

  if (password && !isStrongPassword(password)) {
    return {
      error: 'La nueva contrasena debe tener al menos 10 caracteres, una mayuscula, una minuscula y un numero',
    };
  }

  return {
    data: {
      full_name: fullName,
      role,
      is_active: isActive,
      password,
      contract_type: contractType,
      category,
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
  const adminClient = getAdminClient();

  const { id } = await context.params;
  if (!isUuid(id)) {
    return NextResponse.json({ error: 'ID de usuario invalido' }, { status: 400 });
  }

  const payload = await parseJsonObject(request);
  if ('error' in payload) {
    return NextResponse.json({ error: payload.error }, { status: 400 });
  }

  const normalized = normalizeUpdatePayload(payload.data);

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
    return NextResponse.json(
      { error: 'No se pudo actualizar el usuario en autenticacion' },
      { status: 500 }
    );
  }

  const { data: updatedProfile, error: profileError } = await adminClient
    .from('user_profiles')
    .update({
      full_name: normalized.data.full_name,
      role_id: roleRecord.id,
      is_active: normalized.data.is_active,
      contract_type: normalized.data.contract_type,
      category: normalized.data.category,
    })
    .eq('id', id)
    .select(
      `
      id,
      email,
      full_name,
      role_id,
      is_active,
      contract_type,
      category,
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
  const adminClient = getAdminClient();

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
