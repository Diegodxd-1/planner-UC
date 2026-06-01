import { UserRole } from '@/types/auth';

export type ContractType = 'TC' | 'TP' | 'Por Horas';
export type TeacherCategory = 'Principal' | 'Asociado' | 'Auxiliar' | 'Contratado' | 'Jefe de Práctica';

export interface ManagedUser {
  id: string;
  email: string;
  full_name: string | null;
  role_id: number;
  is_active: boolean;
  contract_type: ContractType | null;
  category: TeacherCategory | null;
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
  contract_type?: ContractType;
  category?: TeacherCategory;
  is_active: boolean;
}
