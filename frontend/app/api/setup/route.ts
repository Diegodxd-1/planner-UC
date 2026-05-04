import { adminClient } from '@/utils/supabase/admin';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const { data: existingUsers, error: listError } = await adminClient.auth.admin.listUsers();
    
    if (listError) {
      throw listError;
    }

    const email = 'admin@example.com';
    const userExists = existingUsers?.users?.some((u) => u.email === email);

    if (userExists) {
      return NextResponse.json({ exists: true, message: 'Admin user already exists' });
    }

    return NextResponse.json({ exists: false, message: 'Ready to create admin user' });
  } catch (error) {
    console.error('Setup check error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Check failed' },
      { status: 500 }
    );
  }
}

export async function POST() {
  try {
    const email = 'admin@example.com';
    const password = 'password123';

    // Verificar si el usuario ya existe
    const { data: existingUsers, error: listError } = await adminClient.auth.admin.listUsers();
    
    if (listError) {
      throw listError;
    }

    const userExists = existingUsers?.users?.some((u) => u.email === email);

    if (userExists) {
      return NextResponse.json(
        { message: 'Admin user already exists', exists: true },
        { status: 200 }
      );
    }

    // Crear usuario en Authentication
    const { data: authData, error: authError } = await adminClient.auth.admin.createUser({
      email,
      password,
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
        email,
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
      { error: error instanceof Error ? error.message : 'Setup failed', created: false },
      { status: 500 }
    );
  }
}
