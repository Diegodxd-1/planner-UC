# 📄 Auditoría de Sostenibilidad de Software (Línea Base)
**Proyecto:** Planner-UC (Stack MERN / Next.js)  
**Auditor:** Analizador Estático de Compilación  
**Fecha de Ejecución:** 2026-06-01 22:41:13 UTC  
**Versión Auditada:** 1.0.0-unoptimized  

---

## 1. Resumen Ejecutivo
El presente informe técnico documenta la auditoría de emisiones de carbono del estado inicial (línea base) del aplicativo web. La medición revela deficiencias críticas en la arquitectura de red, carencia de estrategias de *caching* y transmisión excesiva de datos (*payloads* no paginados), lo que deviene en una huella de carbono inaceptable para estándares modernos.

**Calificación de Eficiencia:** 🔴 **Grado F (Crítico - Requiere Intervención)**

---

## 2. Metodología de Cálculo (SWD Model)
Los cálculos se fundamentan en el modelo *Sustainable Web Design (SWD)* avalado por *The Green Web Foundation*:
* **Intensidad Energética (Red y Data Center):** 0.81 kWh por GB transferido.
* **Intensidad de Carbono (Grid Promedio Global):** 442 g CO2e por kWh.
* **Fórmula de Extracción:** `E = Transferencia (GB) × 0.81 × 442`

---

## 3. Desglose de Telemetría (Cargas de Red)
| Componente Arquitectónico | Transferencia Dinámica | Demanda Energética | Emisión de Carbono |
|:---|:---|:---|:---|
| ⚙️ **Framework (JS/CSS Chunks)** | 3.34 MB | 0.00264 kWh | **1.16701 g CO2e** |
| 🖼️ **Multimedia (Imágenes Crudas)** | 7.15 MB | 0.00566 kWh | **2.50074 g CO2e** |
| 🗄️ **Payloads (API / SELECT *)** | 4.39 MB | 0.00347 kWh | **1.53379 g CO2e** |
| **TOTAL (Por Visita Estándar)** | **14.88 MB** | **0.01177 kWh** | **5.20154 g CO2e** |

---

## 4. Proyección de Impacto Ambiental (10,000 visitas/mes)
Si el software se despliega en producción en su estado actual, el impacto anual proyectado sería:
* ☁️ **Huella de Carbono Anual:** `624.18 kg CO2e`
* 📱 **Equivalencia Ambiental:** Equivale a las emisiones de cargar **75934 teléfonos inteligentes** al 100%.

> **Recomendación Técnica:** Es perentorio aplicar técnicas de Green Software: Paginación de base de datos, compresión de assets (WebP) y Lazy Loading de módulos no esenciales.