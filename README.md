<div align="center">

# 🗓️ SISTEMA DE GENERACIÓN ÓPTIMA DE HORARIOS ACADÉMICOS EN ENTORNOS DE CURRÍCULO FLEXIBLE
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

### **✨ Valor de Negocio (Visión)**
> "Para los coordinadores académicos de la UC, el Sistema Planner-UC es una solución de optimización que permite la generación automática de horarios 100% libres de solapamientos, garantizando eficiencia y trazabilidad frente a los procesos manuales tradicionales."


### **📦 Alcance del PMV (Medible)**
Para este proyecto Continental, el alcance se define estrictamente como:
*   **Inclusión:** Motor de generación algorítmica, validación de conflictos en tiempo real, persistencia de datos base (docentes, aulas, cursos), y visualización de mallas horarias.
*   **Exclusión (Consistencia MVP):** No incluye integración con sistemas ERP (Banner/PeopleSoft), pagos ni soporte técnico, manteniendo el enfoque en la **funcionalidad esencial de programación**.
*   **Meta:** Generar un horario 100% libre de conflictos para un escenario de prueba de 50 docentes y 100 cursos.


---

## ⚙️ 3. Requerimientos del Sistema (SMART)
Hemos definido una base de **24 requerimientos** formulados y validados conforme al enfoque **SMART** (Específicos, Medibles, Alcanzables, Relevantes y Acotados en el tiempo).


| Tipo | Cantidad | Ejemplos Clave |
| :--- | :--- | :--- |
| **Funcionales (RF)** | 16 | Detección de solapamientos, Gestión de disponibilidad, Motor de generación automática. |
| **No Funcionales (RNF)** | 8 | Generación en < 60s, Disponibilidad del 95%, Seguridad via Hash de credenciales. |

[**Ver Lista Completa de Requerimientos**](docs/inicio/Lista%20preliminar%20de%20requerimientos%20funcionales%20y%20no%20funcionales.md)

---

## 🛠️ 4. Selección del Enfoque (Justificación Técnica)
Hemos comparado dos arquitecturas principales antes de tomar una decisión fundamentada:

1.  **Enfoque Seleccionado: MERN (React + Node.js)**
    *   **Justificación:** Selección fundamentada en criterios **técnicos** (procesamiento asíncrono), **metodológicos** (Scrum/Lenguaje unificado) y **contextuales** (curva de aprendizaje y 16 semanas de plazo).

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

## 📂 7. Documentación Estructurada (Estándar ARC42)

Siguiendo las directrices académicas, la documentación del proyecto está organizada bajo el estándar **arc42**, garantizando la trazabilidad entre requerimientos y arquitectura.

> [!IMPORTANT]
> Puedes acceder al índice centralizado de arquitectura aquí: [**📘 Índice ARC42**](docs/ARC42.md)

### 📋 Tabla de Contenidos (TOC)

| Sección arc42 | Documento de Referencia | Acceso Directo |
| :--- | :--- | :---: |
| **1. Metas y Visión** | Objetivos estratégicos y valor de negocio. | [👁️ Ver](docs/inicio/Declaración%20de%20la%20visión%20del%20proyecto.md) |
| **2. Restricciones** | Limitaciones técnicas, de tiempo y equipo. | [👁️ Ver](docs/inicio/Registro%20de%20supuestos%20y%20restricciones.md) |
| **3. Contexto y Alcance** | Delimitación del PMV y Project Charter. | [👁️ Ver](docs/inicio/Project%20Charter.md) |
| **4. Estrategia Solución** | Justificación del Stack MERN seleccionado. | [👁️ Ver](docs/inicio/Documento%20de%20selección%20del%20enfoque%20del%20proyecto.md) |
| **10. Calidad (SMART)** | Requerimientos Funcionales y No Funcionales. | [👁️ Ver](docs/inicio/Lista%20preliminar%20de%20requerimientos%20funcionales%20y%20no%20funcionales.md) |
| **Análisis Técnico** | Definición del problema e incertidumbres. | [👁️ Ver](docs/inicio/Documento%20inicial%20del%20problema%20(primer%20borrador).md) |
| **Gestión Repositorio** | Informe de operatividad de GitHub. | [👁️ Ver](docs/inicio/Repositorio%20GitHub%20operativo.md) |
| **Equipo Académico** | Roles y normas de convivencia. | [👁️ Ver](docs/inicio/Declaración%20del%20equipo%20del%20proyecto.md) |


---
<div align="center">
  <sub>Taller de Proyectos 2 - Ingeniería de Sistemas e Informática - Universidad Continental (2026)</sub>
</div>
