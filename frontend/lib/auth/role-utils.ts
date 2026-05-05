/**
 * Funciones utilitarias para proteger rutas
 */

import { UserRole } from '@/types/auth';

/**
 * Verificar si el usuario tiene el rol requerido
 */
export function hasRole(userRole: UserRole | null, requiredRole: UserRole | UserRole[]): boolean {
  if (!userRole) {
    return false;
  }

  if (Array.isArray(requiredRole)) {
    return requiredRole.includes(userRole);
  }

  return userRole === requiredRole;
}

/**
 * Verificar si el usuario es administrador
 */
export function isAdmin(userRole: UserRole | null): boolean {
  return userRole === 'administrador';
}

/**
 * Verificar si el usuario es profesor
 */
export function isTeacher(userRole: UserRole | null): boolean {
  return userRole === 'profesor';
}

/**
 * Verificar si el usuario es alumno
 */
export function isStudent(userRole: UserRole | null): boolean {
  return userRole === 'alumno';
}
