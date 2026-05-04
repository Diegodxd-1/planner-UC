/**
 * Tipos para autenticación y usuarios
 */

export type UserRole = 'administrador' | 'profesor' | 'alumno';

export interface Role {
  id: number;
  name: UserRole;
  description: string;
  created_at: string;
}

export interface UserProfile {
  id: string; // UUID del usuario de Supabase
  email: string;
  full_name: string | null;
  role_id: number;
  phone: string | null;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface UserWithRole extends UserProfile {
  role: Role;
}

export interface AuthUser {
  id: string;
  email: string;
  user_metadata?: {
    full_name?: string;
    avatar_url?: string;
  };
  app_metadata?: {
    provider?: string;
  };
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface SignUpData extends LoginCredentials {
  full_name: string;
}

export interface AuthResponse {
  user: AuthUser | null;
  session: any; // Session type from Supabase
  error: any;
}

export interface AuthContextType {
  user: UserWithRole | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  signup: (email: string, password: string, fullName: string) => Promise<void>;
  userRole: UserRole | null;
}
