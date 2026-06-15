import { getAdminClient } from '@/utils/supabase/admin';
import { NextRequest, NextResponse } from 'next/server';

const setupEmail = process.env.INITIAL_ADMIN_EMAIL ?? 'admin@example.com';
const setupPassword = process.env.INITIAL_ADMIN_PASSWORD;
const setupToken = process.env.INITIAL_ADMIN_SETUP_TOKEN;

function validateSetupToken(request: NextRequest) {
  if (!setupToken) {
    return NextResponse.json(
      { error: 'INITIAL_ADMIN_SETUP_TOKEN no esta configurado', created: false },
      { status: 503 }
    );
  }

  if (request.headers.get('x-setup-token') !== setupToken) {
    return NextResponse.json(
      { error: 'Token de configuracion invalido', created: false },
      { status: 403 }
    );
  }

  return null;
}

export async function GET() {
  try {
    const adminClient = getAdminClient();
    const { data: existingUsers, error: listError } = await adminClient.auth.admin.listUsers();
    
    if (listError) {
      throw listError;
    }

    const userExists = existingUsers?.users?.some((u) => u.email === setupEmail);

    if (userExists) {
      return NextResponse.json({ exists: true, message: 'Admin user already exists' });
    }

    return NextResponse.json({
      exists: false,
      setupTokenRequired: true,
      message: 'Ready to create admin user',
    });
  } catch (error) {
    console.error('Setup check error:', error);
    return NextResponse.json(
      { error: 'No se pudo verificar el estado de configuracion' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const tokenError = validateSetupToken(request);
    if (tokenError) {
      return tokenError;
    }

    if (!setupPassword) {
      return NextResponse.json(
        { error: 'INITIAL_ADMIN_PASSWORD no esta configurada', created: false },
        { status: 500 }
      );
    }

    const adminClient = getAdminClient();

    // Verificar si el usuario ya existe
    const { data: existingUsers, error: listError } = await adminClient.auth.admin.listUsers();
    
    if (listError) {
      throw listError;
    }

    const userExists = existingUsers?.users?.some((u) => u.email === setupEmail);

    if (userExists) {
      return NextResponse.json(
        { message: 'Admin user already exists', exists: true },
        { status: 200 }
      );
    }

    // Crear usuario en Authentication
    const { data: authData, error: authError } = await adminClient.auth.admin.createUser({
      email: setupEmail,
      password: setupPassword,
      email_confirm: true,
    });

    if (authError) {
      throw authError;
    }

    if (!authData.user) {
      throw new Error('No user returned from auth creation');
    }

    // Insertar en user_profiles
    const { error: profileError } = await adminClient
      .from('user_profiles')
      .insert({
        id: authData.user.id,
        email: setupEmail,
        full_name: 'Administrador',
        role_id: 1,
        is_active: true,
      });

    if (profileError) {
      // Si falla, eliminar el usuario de auth
      try {
        await adminClient.auth.admin.deleteUser(authData.user.id);
      } catch (e) {
        console.error('Error cleaning up user:', e);
      }
      throw profileError;
    }

    return NextResponse.json(
      { message: 'Admin user created successfully', userId: authData.user.id, created: true },
      { status: 201 }
    );
  } catch (error) {
    console.error('Setup error:', error);
    return NextResponse.json(
      { error: 'No se pudo completar la configuracion inicial', created: false },
      { status: 500 }
    );
  }
}
