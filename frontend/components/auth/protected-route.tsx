'use client';

import { useAuth } from '@/lib/auth/auth-context';
import { useRouter } from 'next/navigation';
import { ReactNode, useEffect } from 'react';

interface ProtectedRouteProps {
  children: ReactNode;
  requiredRole?: 'administrador' | 'profesor' | 'alumno' | ('administrador' | 'profesor' | 'alumno')[];
}

export function ProtectedRoute({ children, requiredRole }: ProtectedRouteProps) {
  const { isAuthenticated, userRole, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/login');
    }
  }, [isLoading, isAuthenticated, router]);

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-slate-300 border-t-sky-600"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  if (requiredRole) {
    const roles = Array.isArray(requiredRole) ? requiredRole : [requiredRole];
    if (!userRole || !roles.includes(userRole)) {
      return (
        <div className="flex min-h-screen items-center justify-center">
          <div className="rounded-lg border border-red-200 bg-red-50 p-6 text-center">
            <h1 className="text-lg font-bold text-red-900">Acceso denegado</h1>
            <p className="mt-2 text-sm text-red-700">
              No tienes permisos para acceder a esta página.
            </p>
          </div>
        </div>
      );
    }
  }

  return <>{children}</>;
}
