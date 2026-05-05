import { UserRole } from '@/types/auth';

export interface ManagedUser {
  id: string;
  email: string;
  full_name: string | null;
  role_id: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  role: {
    id: number;
    name: UserRole;
    description: string | null;
  } | null;
}

export interface ManagedUserForm {
  full_name: string;
  email: string;
  password: string;
  role: Extract<UserRole, 'profesor' | 'alumno'>;
  is_active: boolean;
}
