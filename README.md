<div align="center">

# 🗓️ Sistema de Generación Óptima de Horarios Académicos (SGO-HA)
### **Sprint 0: Inicio del Proyecto**
*Un desafío de ingeniería complejo resuelto con metodologías ágiles y tecnologías modernas.*

[![MERN Stack](https://img.shields.io/badge/Stack-MERN-8860D0?style=for-the-badge)](https://www.mongodb.com/mern-stack)
[![Scrum](https://img.shields.io/badge/Methodology-Scrum-5680E9?style=for-the-badge)](https://www.scrum.org/)
[![GitHub](https://img.shields.io/badge/Repository-Operational-5AB9EA?style=for-the-badge)](https://github.com/Diegodxd-1/planner-UC)

---

</div>

## 📌 Introducción
Este proyecto surge de la necesidad de automatizar la planificación académica universitaria en entornos de **currículo flexible**. Abordamos un **Problema Complejo de Ingeniería** que involucra la optimización de recursos limitados bajo múltiples capas de restricciones.

---

## 🔎 1. Análisis del Problema Complejo
*Evidencia de pensamiento crítico y estructuración técnica.*

Abordamos un problema de naturaleza combinatoria conocido como **Constraint Satisfaction Problem (CSP)**. La complejidad radica en la interdependencia de variables dinámicas:

### **❓ Ambigüedades Identificadas**
Para una resolución efectiva, hemos detectado y gestionado las siguientes incertidumbres iniciales:
1.  **Incertidumbre en Bloques:** Falta de definición exacta del número de bloques horarios por jornada.
2.  **Priorización de Conflictos:** Ambigüedad en la jerarquía de restricciones ante escenarios sin solución perfecta.
3.  **Carga Docente:** Falta de claridad sobre topes de secciones consecutivas por docente.
4.  **Flexibilidad Estudiantil:** Grado de libertad de los estudiantes vs. planes de estudio predefinidos.

### **🚫 Restricciones Reales**
5.  **Exclusividad:** Un docente/aula no puede estar en dos lugares simultáneamente.
6.  **Capacitación:** El aula debe soportar el aforo proyectado de la sección.
7.  **Prerrequisitos:** El flujo de cursos debe respetar la malla curricular.
8.  **Disponibilidad:** Respeto estricto a las ventanas horarias de docentes externos.

> [!TIP]
> Puedes profundizar en el análisis técnico en el [**Documento del Problema**](docs/inicio/Documento%20inicial%20del%20problema%20(primer%20borrador).md).

---

## 🎯 2. Visión y Alcance (PMV)
Nuestra visión es transformar la gestión académica mediante un **Producto Mínimo Viable (PMV)** que demuestre la viabilidad de la generación automática.

### **✨ Valor de Negocio**
> "Desarrollar una aplicación web moderna que permita gestionar y generar horarios universitarios de manera eficiente, facilitando la planificación académica y evitando conflictos, mediante una interfaz intuitiva y accesible."

### **📦 Alcance del PMV (Medible)**
Para este proyecto Continental, el alcance se define estrictamente como:
*   **Inclusión:** Motor de generación algorítmica, validación de conflictos en tiempo real, persistencia de datos base (docentes, aulas, cursos), y visualización de mallas horarias.
*   **Exclusión:** No incluye integración con sistemas ERP universitarios (Banner/PeopleSoft), capacitación presencial ni soporte técnico post-entrega.
*   **Meta:** Generar un horario 100% libre de conflictos para un escenario de prueba de 50 docentes y 100 cursos.

---

## ⚙️ 3. Requerimientos del Sistema (RF/RNF)
Hemos definido una base sólida de **24 requerimientos** (16 Funcionales y 8 No Funcionales) para garantizar la calidad del software.

| Tipo | Cantidad | Ejemplos Clave |
| :--- | :--- | :--- |
| **Funcionales (RF)** | 16 | Detección de solapamientos, Gestión de disponibilidad, Motor de generación automática. |
| **No Funcionales (RNF)** | 8 | Generación en < 60s, Disponibilidad del 95%, Seguridad via Hash de credenciales. |

[**Ver Lista Completa de Requerimientos**](docs/inicio/Lista%20preliminar%20de%20requerimientos%20funcionales%20y%20no%20funcionales.md)

---

## 🛠️ 4. Selección del Enfoque (Justificación Técnica)
Hemos comparado dos arquitecturas principales antes de tomar una decisión fundamentada:

1.  **Enfoque Seleccionado: MERN (React + Node.js)**
    *   **Justificación:** El uso de un lenguaje único (**JavaScript ES6+**) maximiza la eficiencia del equipo. React permite una **SPA** fluida para visualización de horarios, y Node.js maneja la lógica asíncrona necesaria para el motor de generación.
2.  **Alternativa Evaluada: Arquitectura Monolítica (Tradicional)**
    *   **Descarte:** Menor escalabilidad y experiencia de usuario más lenta debido a recargas constantes del servidor.

**Metodología:** Aplicación estricta de **Scrum** con entregas incrementales y gestión mediante este repositorio.

[**Ver Justificación Detallada**](docs/inicio/Documento%20de%20selección%20del%20enfoque%20del%20proyecto.md)

---

## 📅 5. Planificación y Gestión (Project Charter)
| Hito | Fase | Semana |
| :--- | :--- | :--- |
| **Hito 1** | Análisis y Requerimientos | S1 - S2 |
| **Hito 2** | Diseño de Solución | S3 - S4 |
| **Hito 3** | Desarrollo (Sprints) | S5 - S9 |
| **Hito 4** | Pruebas y QA | S10 - S11 |
| **Hito 5** | Cierre y Entrega | S12 |

**Riesgo Crítico:** Complejidad del modelado matemático del algoritmo de generación.
[**Ver Project Charter Oficial**](docs/inicio/Project%20Charter.md) | [**Ver Supuestos y Restricciones**](docs/inicio/Registro%20de%20supuestos%20y%20restricciones.md)

---

## 👥 6. El Equipo de Proyecto
Organizados bajo roles definidos y normas de convivencia orientadas a resultados.

| Integrante | Rol Scrum / Especialidad |
| :--- | :--- |
| **VASQUEZ MIRANDA, Luis Alexis** | **Project Leader** / Backend Developer |
| **ARAUJO HUAMANI, Leonardo Daniel** | **Analista de Sistemas** / Requirements Logic |
| **CURI UNTIVEROS, Jefferson Diego** | **Diseñador de Software** / UX-UI Architecture |
| **VILCARANO DE LA CRUZ, Frank Anthony**| **Frontend Developer** / QA Lead |

**Normas de Trabajo:** Reuniones semanales via Meet, commits atómicos en GitHub, reporte de bloqueos inmediato.
[**Ver Declaración del Equipo**](docs/inicio/Declaración%20del%20equipo%20del%20proyecto.md)

---

## 📂 7. Entregables de la Fase de Inicio
Acceso directo a la documentación formal generada en el Sprint 0:

| Documento | Descripción | Acceso |
| :--- | :--- | :---: |
| **Project Charter** | Acta de constitución oficial. | [👁️ Ver](docs/inicio/Project%20Charter.md) |
| **Visión del Proyecto** | Metas y valor de negocio. | [👁️ Ver](docs/inicio/Declaración%20de%20la%20visión%20del%20proyecto.md) |
| **Análisis del Problema** | Identificación de ambigüedades. | [👁️ Ver](docs/inicio/Documento%20inicial%20del%20problema%20(primer%20borrador).md) |
| **Selección de Enfoque** | Justificación del Stack MERN. | [👁️ Ver](docs/inicio/Documento%20de%20selección%20del%20enfoque%20del%20proyecto.md) |
| **Especificación de Requerimientos** | Detalle de RF y RNF. | [👁️ Ver](docs/inicio/Lista%20preliminar%20de%20requerimientos%20funcionales%20y%20no%20funcionales.md) |
| **Registro de Supuestos** | 12 Supuestos y 12 Restricciones. | [👁️ Ver](docs/inicio/Registro%20de%20supuestos%20y%20restricciones.md) |
| **Equipo y Roles** | Organización del equipo humano. | [👁️ Ver](docs/inicio/Declaración%20del%20equipo%20del%20proyecto.md) |
| **Estado del Repositorio** | Informe de operatividad. | [👁️ Ver](docs/inicio/Repositorio%20GitHub%20operativo.md) |

---
<div align="center">
  <sub>Taller de Proyectos 2 - Ingeniería de Sistemas e Informática - Universidad Continental (2026)</sub>
</div>
