'use client';

import { useState } from 'react';
import { AppShell } from '@/components/layout/app-shell';

type GreenView = 'antes' | 'despues';

type OptCardProps = {
  num: string;
  title: string;
  desc: string;
};

const baselineOpportunities: OptCardProps[] = [
  {
    num: '1',
    title: 'Consultas a DB sobrecargadas',
    desc: 'Oportunidad: El comando SELECT * arrastra columnas de más (exceso de red). Limitar a campos específicos.',
  },
  {
    num: '2',
    title: 'Saturación por carga masiva',
    desc: 'Oportunidad: Cargar miles de aulas de golpe. Limitar las solicitudes mediante algoritmos de paginación.',
  },
  {
    num: '3',
    title: 'Imágenes no optimizadas',
    desc: 'Oportunidad: El tag <img> nativo descarga MBs innecesarios. Implementar compresión moderna WebP.',
  },
  {
    num: '4',
    title: 'Renderizado de módulos ocultos',
    desc: 'Oportunidad: Los alumnos descargan código del Dashboard que no ven. Implementar Lazy Loading diferido.',
  },
  {
    num: '5',
    title: 'Dependencias pesadas',
    desc: 'Oportunidad: Bloques de código antiguo. Auditar y compilar usando un empaquetador eficiente.',
  },
  {
    num: '6',
    title: 'Exceso de Peticiones',
    desc: 'Oportunidad: El exceso de requests ahoga al navegador móvil. Agrupar peticiones y paginar.',
  },
  {
    num: '7',
    title: 'Descargas repetitivas (Falta Caché)',
    desc: 'Oportunidad: Imágenes fijas que se recargan 100 veces. Configurar Edge Caching o caché de framework.',
  },
  {
    num: '8',
    title: 'Bloques JSON muy pesados',
    desc: 'Oportunidad: El Solver de horarios devuelve JSONs gigantes. Se debe implementar compresión GZip en la API.',
  },
];

const optimizedActions: OptCardProps[] = [
  {
    num: '1',
    title: 'Optimización de consultas DB',
    desc: "Cómo: Reemplazando select('*') por select('id, name...') en Supabase (/app/api/rooms/route.ts) para reducir transferencia de red.",
  },
  {
    num: '2',
    title: 'Paginación de Datos',
    desc: 'Cómo: Usando .range(start, end) en la API y estados en React (/users/page.tsx) para limitar envíos de a 5 registros.',
  },
  {
    num: '3',
    title: 'Compresión de Imágenes',
    desc: 'Cómo: Implementando <Image /> de next/image en el Dashboard, forzando conversión automática a formato WebP sostenible.',
  },
  {
    num: '4',
    title: 'Lazy Loading Diferido',
    desc: 'Cómo: Aislando <TeacherStats /> con next/dynamic. Solo el Administrador descarga ese código JS, los alumnos no gastan recursos.',
  },
  {
    num: '5',
    title: 'Limpieza de Dependencias',
    desc: 'Cómo: Manteniendo package.json limpio de librerías extra y utilizando el bundler ultra eficiente Turbopack de Next.js.',
  },
  {
    num: '6',
    title: 'Reducción HTTP',
    desc: 'Cómo: Paginando elementos se evita descargar miles de datos bloqueantes en la cascada del navegador.',
  },
  {
    num: '7',
    title: 'Caché de Recursos',
    desc: 'Cómo: Las imágenes y assets generados ahora usan el caché predeterminado del motor Next.js, evitando re-descargas.',
  },
  {
    num: '8',
    title: 'FastAPI GZip (Backend)',
    desc: 'Cómo: Añadiendo GZipMiddleware(minimum_size=1000) en backend/app/main.py para empaquetar JSONs de horarios del Solver.',
  },
];

export default function GreenReportPage() {
  const [view, setView] = useState<GreenView>('despues');
  const isBaselineView = view === 'antes';

  return (
    <AppShell>
      <main className="mx-auto max-w-5xl px-4 py-8">
        <div className="rounded-[32px] border border-emerald-200 bg-white p-8 shadow-xl shadow-emerald-900/5">
          <div className="flex flex-col justify-between gap-4 border-b border-emerald-100 pb-6 md:flex-row md:items-center">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-3xl">
                🌿
              </div>
              <div>
                <h1 className="text-3xl font-black text-slate-900">Green Software Report</h1>
                <p className="mt-1 text-slate-600">
                  Impacto ambiental y reducción de huella de carbono digital en Planner-UC.
                </p>
              </div>
            </div>

            <div className="flex items-center rounded-2xl border border-slate-200 bg-slate-100 p-1">
              <button
                type="button"
                onClick={() => setView('antes')}
                className={`rounded-xl px-6 py-2.5 text-sm font-bold transition-all ${
                  isBaselineView
                    ? 'border border-slate-200 bg-white text-slate-800 shadow-sm'
                    : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                🛑 Antes (Línea Base)
              </button>
              <button
                type="button"
                onClick={() => setView('despues')}
                className={`rounded-xl px-6 py-2.5 text-sm font-bold transition-all ${
                  !isBaselineView
                    ? 'bg-emerald-500 text-white shadow-md shadow-emerald-500/20'
                    : 'text-slate-500 hover:text-emerald-600'
                }`}
              >
                ✅ Después (Optimizado)
              </button>
            </div>
          </div>

          <div className="mt-8">
            {isBaselineView ? (
              <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <div className="absolute right-0 top-0 rounded-bl-xl bg-slate-200 px-4 py-1 text-xs font-bold uppercase tracking-wider text-slate-600">
                  Línea Base (Antes)
                </div>
                <h3 className="mb-6 text-xl font-black text-slate-800">
                  Métricas sin optimizaciones
                </h3>

                <div className="space-y-6">
                  <div>
                    <p className="text-sm font-medium uppercase tracking-wider text-slate-500">
                      Emisión de CO2 por visita
                    </p>
                    <p className="mt-1 text-5xl font-black text-slate-700">
                      5.43563{' '}
                      <span className="text-2xl font-medium text-slate-500">g CO2</span>
                    </p>
                  </div>

                  <div className="border-t border-slate-200 pt-6">
                    <p className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-700">
                      Desglose de Consumo (Por Componente)
                    </p>

                    <div className="space-y-4">
                      <MetricCard
                        label="🖼️ Imágenes Crudas (7.5 MB)"
                        value="2.61328 g"
                        width="48%"
                        valueClassName="text-rose-600"
                        barClassName="bg-rose-500"
                        footer="48% del consumo total"
                      />
                      <MetricCard
                        label="🗄️ Base de Datos Payload (4.6 MB)"
                        value="1.60281 g"
                        width="30%"
                        valueClassName="text-rose-600"
                        barClassName="bg-rose-500"
                        footer="30% del consumo total"
                      />
                      <MetricCard
                        label="⚙️ Framework JS (3.5 MB)"
                        value="1.21953 g"
                        width="22%"
                        valueClassName="text-slate-600"
                        barClassName="bg-slate-400"
                        footer="22% del consumo total"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-12 border-t border-slate-200 pt-8">
                  <h2 className="mb-6 flex items-center gap-2 text-xl font-black text-slate-900">
                    <svg
                      className="h-6 w-6 text-slate-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                    Oportunidades de Optimización Detectadas
                  </h2>

                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
                    {baselineOpportunities.map((item) => (
                      <OptCard key={item.num} {...item} />
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="relative overflow-hidden rounded-2xl border-2 border-emerald-400 bg-emerald-50/50 p-6 shadow-lg shadow-emerald-100">
                <div className="absolute right-0 top-0 rounded-bl-xl bg-emerald-500 px-4 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-sm">
                  Optimizado (Actual)
                </div>
                <h3 className="mb-6 text-xl font-black text-emerald-900">
                  Métricas con Green Software
                </h3>

                <div className="space-y-6">
                  <div>
                    <p className="text-sm font-medium uppercase tracking-wider text-emerald-700">
                      Emisión Efectiva por visita
                    </p>
                    <div className="mt-1 flex items-end gap-3">
                      <p className="text-5xl font-black text-emerald-600">
                        0.76189{' '}
                        <span className="text-2xl font-medium text-emerald-600/70">g CO2</span>
                      </p>
                      <span className="mb-2 rounded-full bg-emerald-100 px-3 py-1 text-sm font-bold text-emerald-700">
                        ▼ Reducción -86%
                      </span>
                    </div>
                  </div>

                  <div className="border-t border-emerald-200 pt-6">
                    <p className="mb-4 text-sm font-bold uppercase tracking-wider text-emerald-800">
                      Desglose de Consumo (Por Componente)
                    </p>

                    <div className="space-y-4">
                      <ComparisonMetricCard
                        label="🖼️ Imágenes (WebP + Lazy)"
                        value="0.42513 g"
                        backgroundWidth="48%"
                        currentWidth="8%"
                        reductionLabel="▼ Reducción -84%"
                      />
                      <ComparisonMetricCard
                        label="🗄️ Base de Datos (Paginada)"
                        value="0.23007 g"
                        backgroundWidth="30%"
                        currentWidth="4%"
                        reductionLabel="▼ Reducción -85%"
                      />
                      <ComparisonMetricCard
                        label="⚙️ Framework Base (Chunks)"
                        value="0.10669 g"
                        backgroundWidth="22%"
                        currentWidth="2%"
                        reductionLabel="▼ Optimizado con Turbopack (-91%)"
                      />
                    </div>

                    <div className="mt-4 flex items-start gap-3 rounded-xl border border-emerald-100 bg-emerald-100/50 p-4">
                      <div className="text-xl">💡</div>
                      <p className="text-sm leading-relaxed text-emerald-800">
                        <strong>Justificación técnica:</strong> Aunque el peso del
                        framework subió ligeramente de 0.023g a 0.028g por la inclusión
                        de paginación y segmentación, esta mejora estratégica permitió{' '}
                        <strong>desplomar el consumo de DB e Imágenes</strong> para lograr
                        un sistema altamente ecológico y eficiente.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 border-t border-emerald-100 pt-8">
                  <h2 className="mb-6 flex items-center gap-2 text-xl font-black text-emerald-900">
                    <svg
                      className="h-6 w-6 text-emerald-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Optimizaciones Aplicadas (y cómo se hicieron)
                  </h2>

                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
                    {optimizedActions.map((item) => (
                      <OptCard key={item.num} {...item} />
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </AppShell>
  );
}

function MetricCard({
  label,
  value,
  width,
  footer,
  valueClassName,
  barClassName,
}: {
  label: string;
  value: string;
  width: string;
  footer: string;
  valueClassName: string;
  barClassName: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4">
      <div className="mb-2 flex items-center justify-between">
        <span className="flex items-center gap-2 font-bold text-slate-800">{label}</span>
        <span className={`text-lg font-black ${valueClassName}`}>{value}</span>
      </div>
      <div className="mb-2 h-2.5 w-full rounded-full bg-slate-100">
        <div className={`h-2.5 rounded-full ${barClassName}`} style={{ width }} />
      </div>
      <p className="text-right text-xs text-slate-500">{footer}</p>
    </div>
  );
}

function ComparisonMetricCard({
  label,
  value,
  backgroundWidth,
  currentWidth,
  reductionLabel,
}: {
  label: string;
  value: string;
  backgroundWidth: string;
  currentWidth: string;
  reductionLabel: string;
}) {
  return (
    <div className="rounded-xl border border-emerald-200 bg-white p-4 shadow-sm">
      <div className="mb-2 flex items-center justify-between">
        <span className="flex items-center gap-2 font-bold text-emerald-900">{label}</span>
        <span className="text-lg font-black text-emerald-600">{value}</span>
      </div>
      <div className="relative mb-2 h-2.5 w-full rounded-full bg-slate-100">
        <div
          className="absolute left-0 top-0 h-2.5 rounded-full bg-rose-100"
          style={{ width: backgroundWidth }}
        />
        <div
          className="absolute left-0 top-0 h-2.5 rounded-full bg-emerald-500"
          style={{ width: currentWidth }}
        />
      </div>
      <p className="text-right text-xs font-bold text-emerald-600">{reductionLabel}</p>
    </div>
  );
}

function OptCard({ num, title, desc }: OptCardProps) {
  return (
    <div className="rounded-xl border border-slate-100 bg-slate-50 p-4 transition hover:border-emerald-200 hover:bg-emerald-50">
      <div className="mb-2 flex items-center gap-3">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-xs font-bold text-white">
          {num}
        </span>
        <h4 className="font-bold text-slate-800">{title}</h4>
      </div>
      <p className="text-sm leading-relaxed text-slate-600">{desc}</p>
    </div>
  );
}
