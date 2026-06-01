# 📄 Auditoría de Sostenibilidad de Software (Línea Base)
**Proyecto:** Planner-UC (Stack MERN / Next.js)  
**Auditor:** Analizador Estático de Compilación  
**Fecha de Ejecución:** 2026-06-01 22:43:23 UTC  
**Versión Auditada:** 1.0.0-unoptimized  

---

## 1. Resumen Ejecutivo
El presente informe técnico documenta la auditoría de emisiones de carbono del estado inicial (línea base) del aplicativo web. La medición revela deficiencias críticas en la arquitectura de red, carencia de estrategias de *caching* y transmisión excesiva de datos (*payloads* no paginados), lo que deviene en una huella de carbono inaceptable para estándares modernos.

**Calificación de Eficiencia:** 🔴 **Grado F (Crítico - Requiere Intervención)**

---

## 2. Oportunidades de Optimización Detectadas (Para Exposición)
A partir de la auditoría, se listan los 8 puntos críticos que ahogan la red y requieren ser optimizados para cumplir la rúbrica de Green Software:

1. **Consultas a DB sobrecargadas:** El comando `SELECT *` arrastra columnas de más (exceso de red).
2. **Saturación por carga masiva:** Cargar miles de aulas de golpe sin algoritmos de paginación.
3. **Imágenes no optimizadas:** El tag `<img>` nativo descarga MBs innecesarios sin compresión WebP.
4. **Renderizado de módulos ocultos:** Los alumnos descargan código pesado del Dashboard que ni siquiera ven.
5. **Dependencias pesadas:** Bloques de código JS antiguo sin un empaquetador eficiente de nueva generación.
6. **Exceso de Peticiones HTTP:** Las múltiples requests síncronas bloquean la red móvil.
7. **Descargas repetitivas (Falta Caché):** Elementos fijos que obligan a ser descargados una y otra vez.
8. **Bloques JSON pesados en Backend:** La API de Python (FastAPI) envía enormes respuestas matemáticas sin comprimir.

---

## 3. Metodología de Cálculo (SWD Model)
Los cálculos se fundamentan en el modelo *Sustainable Web Design (SWD)* avalado por *The Green Web Foundation*:
* **Intensidad Energética:** 0.81 kWh por GB transferido.
* **Intensidad de Carbono (Global):** 442 g CO2e por kWh.
* **Fórmula:** `E = Transferencia (GB) × 0.81 × 442`

---

## 4. Desglose de Telemetría (Cargas de Red)
| Componente Arquitectónico | Transferencia Dinámica | Demanda Energética | Emisión de Carbono |
|:---|:---|:---|:---|
| ⚙️ **Framework (JS/CSS Chunks)** | 3.34 MB | 0.00264 kWh | **1.16701 g CO2e** |
| 🖼️ **Multimedia (Imágenes Crudas)** | 7.15 MB | 0.00566 kWh | **2.50074 g CO2e** |
| 🗄️ **Payloads (API / SELECT *)** | 4.39 MB | 0.00347 kWh | **1.53379 g CO2e** |
| **TOTAL (Por Visita Estándar)** | **14.88 MB** | **0.01177 kWh** | **5.20154 g CO2e** |

---

## 5. Proyección de Impacto Ambiental (10,000 visitas/mes)
* ☁️ **Huella de Carbono Anual:** `624.18 kg CO2e`
* 📱 **Equivalencia Ambiental:** Emisiones de cargar **75934 teléfonos inteligentes** al 100%.