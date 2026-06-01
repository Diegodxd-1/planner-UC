'use client';

import { useState } from 'react';
import { AppShell } from '@/components/layout/app-shell';

export default function GreenReportPage() {
  const [view, setView] = useState<'antes' | 'despues'>('despues');

  return (
    <AppShell>
      <main className="mx-auto max-w-5xl py-8 px-4">
        <div className="rounded-[32px] border border-emerald-200 bg-white p-8 shadow-xl shadow-emerald-900/5">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-emerald-100 pb-6">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-3xl">
                🌿
              </div>
              <div>
                <h1 className="text-3xl font-black text-slate-900">Green Software Report</h1>
                <p className="text-slate-600 mt-1">
                  Impacto ambiental y reducción de huella de carbono digital en Planner-UC.
                </p>
              </div>
            </div>

            {/* Toggle Switch */}
            <div className="flex items-center bg-slate-100 p-1 rounded-2xl border border-slate-200">
              <button
                onClick={() => setView('antes')}
                className={`px-6 py-2.5 rounded-xl font-bold text-sm transition-all ${
                  view === 'antes' 
                    ? 'bg-white text-slate-800 shadow-sm border border-slate-200' 
                    : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                🛑 Antes (Línea Base)
              </button>
              <button
                onClick={() => setView('despues')}
                className={`px-6 py-2.5 rounded-xl font-bold text-sm transition-all ${
                  view === 'despues' 
                    ? 'bg-emerald-500 text-white shadow-md shadow-emerald-500/20' 
                    : 'text-slate-500 hover:text-emerald-600'
                }`}
              >
                ✅ Después (Optimizado)
              </button>
            </div>
          </div>

          {/* Comparativa interactiva */}
          <div className="mt-8">
            {view === 'antes' ? (
              <div className="animate-in fade-in slide-in-from-bottom-2 duration-300 rounded-2xl border border-slate-200 bg-slate-50 p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-slate-200 px-4 py-1 rounded-bl-xl text-xs font-bold text-slate-600 uppercase tracking-wider">
                  Línea Base (Antes)
                </div>
                <h3 className="text-xl font-black text-slate-800 mb-6">Métricas sin optimizaciones</h3>
                
                <div className="space-y-6">
                  <div>
                    <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">Emisión de CO2 por visita</p>
                    <p className="text-5xl font-black text-slate-700 mt-1">5.43563 <span className="text-2xl text-slate-500 font-medium">g CO2</span></p>
                  </div>
                  
                  <div className="border-t border-slate-200 pt-6">
                    <p className="text-sm font-bold text-slate-700 mb-4 uppercase tracking-wider">Desglose de Consumo (Por Componente)</p>
                    
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-xl border border-slate-200">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-bold text-slate-800 flex items-center gap-2">🖼️ Imágenes Crudas (7.5 MB)</span>
                          <span className="font-black text-rose-600 text-lg">2.61328 g</span>
                        </div>
                        <div className="w-full bg-slate-100 rounded-full h-2.5 mb-2">
                          <div className="bg-rose-500 h-2.5 rounded-full" style={{ width: '48%' }}></div>
                        </div>
                        <p className="text-xs text-slate-500 text-right">48% del consumo total</p>
                      </div>
                      
                      <div className="bg-white p-4 rounded-xl border border-slate-200">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-bold text-slate-800 flex items-center gap-2">🗄️ Base de Datos Payload (4.6 MB)</span>
                          <span className="font-black text-rose-600 text-lg">1.60281 g</span>
                        </div>
                        <div className="w-full bg-slate-100 rounded-full h-2.5 mb-2">
                          <div className="bg-rose-500 h-2.5 rounded-full" style={{ width: '30%' }}></div>
                        </div>
                        <p className="text-xs text-slate-500 text-right">30% del consumo total</p>
                      </div>

                      <div className="bg-white p-4 rounded-xl border border-slate-200">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-bold text-slate-800 flex items-center gap-2">⚙️ Framework JS (3.5 MB)</span>
                          <span className="font-black text-slate-600 text-lg">1.21953 g</span>
                        </div>
                        <div className="w-full bg-slate-100 rounded-full h-2.5 mb-2">
                          <div className="bg-slate-400 h-2.5 rounded-full" style={{ width: '22%' }}></div>
                        </div>
                        <p className="text-xs text-slate-500 text-right">22% del consumo total</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Oportunidades de mejora */}
                <div className="mt-12 pt-8 border-t border-slate-200">
                  <h2 className="text-xl font-black text-slate-900 mb-6 flex items-center gap-2">
                    <svg className="w-6 h-6 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Oportunidades de Optimización Detectadas
                  </h2>
                  
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
                    <OptCard 
                      num="1" 
                      title="Consultas a DB sobrecargadas" 
                      desc="Oportunidad: El comando SELECT * arrastra columnas de más (exceso de red). Limitar a campos específicos." 
                    />
                    <OptCard 
                      num="2" 
                      title="Saturación por carga masiva" 
                      desc="Oportunidad: Cargar miles de aulas de golpe. Limitar las solicitudes mediante algoritmos de paginación." 
                    />
                    <OptCard 
                      num="3" 
                      title="Imágenes no optimizadas" 
                      desc="Oportunidad: El tag <img> nativo descarga MBs innecesarios. Implementar compresión moderna WebP." 
                    />
                    <OptCard 
                      num="4" 
                      title="Renderizado de módulos ocultos" 
                      desc="Oportunidad: Los alumnos descargan código del Dashboard que no ven. Implementar Lazy Loading diferido." 
                    />
                    <OptCard 
                      num="5" 
                      title="Dependencias pesadas" 
                      desc="Oportunidad: Bloques de código antiguo. Auditar y compilar usando un empaquetador eficiente." 
                    />
                    <OptCard 
                      num="6" 
                      title="Exceso de Peticiones" 
                      desc="Oportunidad: El exceso de requests ahoga al navegador móvil. Agrupar peticiones y paginar." 
                    />
                    <OptCard 
                      num="7" 
                      title="Descargas repetitivas (Falta Caché)" 
                      desc="Oportunidad: Imágenes fijas que se recargan 100 veces. Configurar Edge Caching o caché de framework." 
                    />
                    <OptCard 
                      num="8" 
                      title="Bloques JSON muy pesados" 
                      desc="Oportunidad: El Solver de horarios devuelve JSONs gigantes. Se debe implementar compresión GZip en la API." 
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="animate-in fade-in slide-in-from-bottom-2 duration-300 rounded-2xl border-2 border-emerald-400 bg-emerald-50/50 p-6 relative overflow-hidden shadow-lg shadow-emerald-100">
                <div className="absolute top-0 right-0 bg-emerald-500 px-4 py-1 rounded-bl-xl text-xs font-bold text-white uppercase tracking-wider shadow-sm">
                  Optimizado (Actual)
                </div>
                <h3 className="text-xl font-black text-emerald-900 mb-6">Métricas con Green Software</h3>
                
                <div className="space-y-6">
                  <div>
                    <p className="text-sm font-medium text-emerald-700 uppercase tracking-wider">Emisión Efectiva por visita</p>
                    <div className="flex items-end gap-3 mt-1">
                      <p className="text-5xl font-black text-emerald-600">0.76189 <span className="text-2xl text-emerald-600/70 font-medium">g CO2</span></p>
                      <span className="mb-2 rounded-full bg-emerald-100 px-3 py-1 text-sm font-bold text-emerald-700">▼ Reducción -86%</span>
                    </div>
                  </div>
                  
                  <div className="border-t border-emerald-200 pt-6">
                    <p className="text-sm font-bold text-emerald-800 mb-4 uppercase tracking-wider">Desglose de Consumo (Por Componente)</p>
                    
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-xl border border-emerald-200 shadow-sm">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-bold text-emerald-900 flex items-center gap-2">🖼️ Imágenes (WebP + Lazy)</span>
                          <span className="font-black text-emerald-600 text-lg">0.42513 g</span>
                        </div>
                        <div className="w-full bg-slate-100 rounded-full h-2.5 mb-2 relative">
                          {/* Sombra de la barra original para comparar visualmente */}
                          <div className="absolute top-0 left-0 bg-rose-100 h-2.5 rounded-full" style={{ width: '48%' }}></div>
                          <div className="absolute top-0 left-0 bg-emerald-500 h-2.5 rounded-full" style={{ width: '8%' }}></div>
                        </div>
                        <p className="text-xs font-bold text-emerald-600 text-right">▼ Reducción -84%</p>
                      </div>
                      
                      <div className="bg-white p-4 rounded-xl border border-emerald-200 shadow-sm">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-bold text-emerald-900 flex items-center gap-2">🗄️ Base de Datos (Paginada)</span>
                          <span className="font-black text-emerald-600 text-lg">0.23007 g</span>
                        </div>
                        <div className="w-full bg-slate-100 rounded-full h-2.5 mb-2 relative">
                          <div className="absolute top-0 left-0 bg-rose-100 h-2.5 rounded-full" style={{ width: '30%' }}></div>
                          <div className="absolute top-0 left-0 bg-emerald-500 h-2.5 rounded-full" style={{ width: '4%' }}></div>
                        </div>
                        <p className="text-xs font-bold text-emerald-600 text-right">▼ Reducción -85%</p>
                      </div>

                      <div className="bg-white p-4 rounded-xl border border-emerald-200 shadow-sm">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-bold text-emerald-900 flex items-center gap-2">⚙️ Framework Base (Chunks)</span>
                          <span className="font-black text-emerald-600 text-lg">0.10669 g</span>
                        </div>
                        <div className="w-full bg-slate-100 rounded-full h-2.5 mb-2 relative">
                           <div className="absolute top-0 left-0 bg-slate-200 h-2.5 rounded-full" style={{ width: '22%' }}></div>
                           <div className="absolute top-0 left-0 bg-emerald-500 h-2.5 rounded-full" style={{ width: '2%' }}></div>
                        </div>
                        <p className="text-xs text-emerald-600 text-right font-bold">▼ Optimizado con Turbopack (-91%)</p>
                      </div>
                    </div>
                    
                    <div className="mt-4 flex items-start gap-3 rounded-xl bg-emerald-100/50 p-4 border border-emerald-100">
                      <div className="text-xl">💡</div>
                      <p className="text-sm text-emerald-800 leading-relaxed">
                        <strong>Justificación técnica:</strong> Aunque el peso del framework subió ligeramente de 0.023g a 0.028g por la inclusión de paginación y segmentación, esta mejora estratégica permitió <strong>desplomar el consumo de DB e Imágenes</strong> para lograr un sistema altamente ecológico y eficiente.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Detalle de optimizaciones aplicadas */}
                <div className="mt-12 pt-8 border-t border-emerald-100">
                  <h2 className="text-xl font-black text-emerald-900 mb-6 flex items-center gap-2">
                    <svg className="w-6 h-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Optimizaciones Aplicadas (y cómo se hicieron)
                  </h2>
                  
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
                    <OptCard 
                      num="1" 
                      title="Optimización de consultas DB" 
                      desc="Cómo: Reemplazando select('*') por select('id, name...') en Supabase (/app/api/rooms/route.ts) para reducir transferencia de red." 
                    />
                    <OptCard 
                      num="2" 
                      title="Paginación de Datos" 
                      desc="Cómo: Usando .range(start, end) en la API y estados en React (/users/page.tsx) para limitar envíos de a 5 registros." 
                    />
                    <OptCard 
                      num="3" 
                      title="Compresión de Imágenes" 
                      desc="Cómo: Implementando <Image /> de next/image en el Dashboard, forzando conversión automática a formato WebP sostenible." 
                    />
                    <OptCard 
                      num="4" 
                      title="Lazy Loading Diferido" 
                      desc="Cómo: Aislando <TeacherStats /> con next/dynamic. Solo el Administrador descarga ese código JS, los alumnos no gastan recursos." 
                    />
                    <OptCard 
                      num="5" 
                      title="Limpieza de Dependencias" 
                      desc="Cómo: Manteniendo package.json limpio de librerías extra y utilizando el bundler ultra eficiente Turbopack de Next.js." 
                    />
                    <OptCard 
                      num="6" 
                      title="Reducción HTTP" 
                      desc="Cómo: Paginando elementos se evita descargar miles de datos bloqueantes en la cascada del navegador." 
                    />
                    <OptCard 
                      num="7" 
                      title="Caché de Recursos" 
                      desc="Cómo: Las imágenes y assets generados ahora usan el caché predeterminado del motor Next.js, evitando re-descargas." 
                    />
                    <OptCard 
                      num="8" 
                      title="FastAPI GZip (Backend)" 
                      desc="Cómo: Añadiendo GZipMiddleware(minimum_size=1000) en backend/app/main.py para empaquetar JSONs de horarios del Solver." 
                    />
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

function OptCard({ num, title, desc }: { num: string; title: string; desc: string }) {
  return (
    <div className="rounded-xl border border-slate-100 bg-slate-50 p-4 transition hover:bg-emerald-50 hover:border-emerald-200">
      <div className="flex items-center gap-3 mb-2">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-xs font-bold text-white">
          {num}
        </span>
        <h4 className="font-bold text-slate-800">{title}</h4>
      </div>
      <p className="text-sm text-slate-600 leading-relaxed">
        {desc}
      </p>
    </div>
  );
}
