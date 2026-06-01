'use client';

import { useEffect, useState } from 'react';
import { ManagedUser } from '@/types/user-management';

export default function TeacherStats() {
  const [teacherStats, setTeacherStats] = useState<{ total: number; tc: number; tp: number; percentTC: number } | null>(null);

  useEffect(() => {
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
  }, []);

  if (!teacherStats) return null;

  return (
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
  );
}
