/**
 * Servicios de autenticación con Supabase
 */

import { AuthChangeEvent, Session } from '@supabase/supabase-js';
import { createClient } from '@/utils/supabase/client';
import { AuthUser, UserWithRole, UserRole } from '@/types/auth';

function getSupabaseClient() {
  return createClient();
}

/**
 * Login con email y contraseña
 */
export async function loginWithEmail(email: string, password: string) {
  try {
    const supabase = getSupabaseClient();
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      throw error;
    }

    // Obtener el perfil del usuario
    const userProfile = await getUserProfile(data.user.id);

    return {
      user: data.user,
      profile: userProfile,
      session: data.session,
    };
  } catch (error) {
    console.error('Error en login:', error);
    throw error;
  }
}

/**
 * Registrar nuevo usuario
 */
export async function signupWithEmail(
  email: string,
  password: string,
  fullName: string
) {
  try {
    const supabase = getSupabaseClient();
    // Crear usuario en auth
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
        },
      },
    });

    if (error) {
      throw error;
    }

    // Crear perfil del usuario (rol default: alumno)
    if (data.user) {
      const { error: profileError } = await supabase
        .from('user_profiles')
        .insert({
          id: data.user.id,
          email,
          full_name: fullName,
          role_id: 3, // Default: alumno
          is_active: true,
        });

      if (profileError) {
        throw profileError;
      }
    }

    return {
      user: data.user,
      session: data.session,
    };
  } catch (error) {
    console.error('Error en signup:', error);
    throw error;
  }
}

/**
 * Logout
 */
export async function logout() {
  try {
    const supabase = getSupabaseClient();
    const { error } = await supabase.auth.signOut();
    if (error) {
      throw error;
    }
  } catch (error) {
    console.error('Error en logout:', error);
    throw error;
  }
}

/**
 * Obtener usuario actual
 */
export async function getCurrentUser() {
  try {
    const supabase = getSupabaseClient();
    const { data: sessionData } = await supabase.auth.getSession();
    
    if (!sessionData.session) {
      return null;
    }

    const { data, error } = await supabase.auth.getUser();
    if (error) {
      return null;
    }
    return data.user;
  } catch {
    return null;
  }
}

/**
 * Obtener perfil del usuario con rol
 */
export async function getUserProfile(
  userId: string
): Promise<UserWithRole | null> {
  try {
    const supabase = getSupabaseClient();
    const { data, error } = await supabase
      .from('user_profiles')
      .select(
        `
        *,
        role:roles(id, name, description)
      `
      )
      .eq('id', userId)
      .maybeSingle();

    if (error) {
      throw error;
    }

    return data as UserWithRole | null;
  } catch {
    return null;
  }
}

/**
 * Obtener rol del usuario
 */
export async function getUserRole(userId: string): Promise<UserRole | null> {
  try {
    const supabase = getSupabaseClient();
    const { data, error } = await supabase
      .from('user_profiles')
      .select('role:roles(name)')
      .eq('id', userId)
      .single();

    if (error) {
      throw error;
    }

    const role = Array.isArray(data?.role) ? data.role[0] : data?.role;
    return role?.name ?? null;
  } catch (error) {
    console.error('Error obteniendo rol:', error);
    return null;
  }
}

/**
 * Cambiar contraseña
 */
export async function changePassword(newPassword: string) {
  try {
    const supabase = getSupabaseClient();
    const { error } = await supabase.auth.updateUser({
      password: newPassword,
    });

    if (error) {
      throw error;
    }
  } catch (error) {
    console.error('Error cambiando contraseña:', error);
    throw error;
  }
}

/**
 * Escuchar cambios de autenticación
 */
export function onAuthStateChanged(callback: (user: AuthUser | null) => void) {
  const supabase = getSupabaseClient();
  const {
    data: { subscription },
  } = supabase.auth.onAuthStateChange((_event: AuthChangeEvent, session: Session | null) => {
    callback(session?.user ?? null);
  });

  return subscription;
}
