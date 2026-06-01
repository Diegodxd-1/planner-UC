'use client';

import { ProtectedRoute } from '@/components/auth/protected-route';
import { AppShell } from '@/components/layout/app-shell';
import { useAuth } from '@/lib/auth/auth-context';
import { useEffect, useState } from 'react';
import { ManagedUser } from '@/types/user-management';

export default function DashboardPage() {
  const { user, userRole } = useAuth();
  const [teacherStats, setTeacherStats] = useState<{ total: number; tc: number; tp: number; percentTC: number } | null>(null);

  useEffect(() => {
    if (userRole === 'administrador') {
      fetch('/api/users')
        .then((res) => res.json())
        .then((data) => {
          if (data.users) {
            const teachers = data.users.filter((u: ManagedUser) => u.role?.name === 'profesor' && u.is_active);
            const total = teachers.length;
            const tc = teachers.filter((u: ManagedUser) => u.contract_type === 'TC').length;
            const tp = total - tc;
            const percentTC = total > 0 ? (tc / total) * 100 : 0;
            setTeacherStats({ total, tc, tp, percentTC });
          }
        })
        .catch(console.error);
    }
  }, [userRole]);

  return (
    <ProtectedRoute>
      <AppShell>
        <main className="mx-auto max-w-5xl py-4">
          <div className="rounded-[32px] border border-slate-200 bg-white/90 p-8 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur">
            <h2 className="text-2xl font-black text-slate-950">
              Bienvenido, {user?.full_name}!
            </h2>
            <p className="mt-4 text-slate-600">
              Rol actual:{' '}
              <span className="font-semibold text-slate-900">
                {userRole === 'administrador'
                  ? 'Administrador'
                  : userRole === 'profesor'
                    ? 'Profesor'
                    : 'Alumno'}
              </span>
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-6">
                <h3 className="font-semibold text-slate-900">Email</h3>
                <p className="mt-2 text-sm text-slate-600">{user?.email}</p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-6">
                <h3 className="font-semibold text-slate-900">Estado</h3>
                <p className="mt-2 text-sm">
                  <span className="inline-flex rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-900">
                    {user?.is_active ? 'Activo' : 'Inactivo'}
                  </span>
                </p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-6">
                <h3 className="font-semibold text-slate-900">Miembro desde</h3>
                <p className="mt-2 text-sm text-slate-600">
                  {user?.created_at
                    ? new Date(user.created_at).toLocaleDateString('es-CL')
                    : '--'}
                </p>
              </div>
            </div>

            {userRole === 'administrador' && (
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <div className="rounded-lg border-l-4 border-sky-500 bg-sky-50 p-6">
                  <h3 className="font-semibold text-slate-900">Funciones de administrador</h3>
                  <p className="mt-2 text-sm text-slate-600">
                    Tienes acceso completo al sistema. Puedes gestionar usuarios, roles y configuraciones.
                  </p>
                </div>
                
                {teacherStats !== null && (
                  <div className={`rounded-lg border-l-4 p-6 ${teacherStats.percentTC >= 25 ? 'border-emerald-500 bg-emerald-50' : 'border-rose-500 bg-rose-50'}`}>
                    <h3 className="font-semibold text-slate-900">Indicador Ratio Docentes (TC)</h3>
                    <div className="mt-4 flex items-baseline gap-2">
                      <span className={`text-4xl font-black tracking-tight ${teacherStats.percentTC >= 25 ? 'text-emerald-700' : 'text-rose-700'}`}>
                        {teacherStats.percentTC.toFixed(1)}%
                      </span>
                      <span className="text-sm font-medium text-slate-600">Tiempo Completo</span>
                    </div>
                    <p className="mt-3 text-sm text-slate-600">
                      Mínimo legal exigido: <strong>25%</strong> (Ley 30220).<br/>
                      Total docentes activos: {teacherStats.total} ({teacherStats.tc} TC / {teacherStats.tp} Otros).
                    </p>
                  </div>
                )}
              </div>
            )}

            {userRole === 'profesor' && (
              <div className="mt-8 rounded-lg border-l-4 border-amber-500 bg-amber-50 p-6">
                <h3 className="font-semibold text-slate-900">Funciones de profesor</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Puedes gestionar tus cursos, calificaciones y ver el horario de tus clases.
                </p>
              </div>
            )}

            {userRole === 'alumno' && (
              <div className="mt-8 rounded-lg border-l-4 border-green-500 bg-green-50 p-6">
                <h3 className="font-semibold text-slate-900">Funciones de alumno</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Puedes ver tu horario, calificaciones y enviar solicitudes académicas.
                </p>
              </div>
            )}
          </div>
        </main>
      </AppShell>
    </ProtectedRoute>
  );
}
