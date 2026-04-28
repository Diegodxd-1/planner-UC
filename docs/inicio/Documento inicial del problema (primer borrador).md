# 🔍 DOCUMENTO INICIAL DEL PROBLEMA (PRIMER BORRADOR)

### 🌏 Contexto del Problema
La planificación de horarios académicos es un desafío logístico crítico en las universidades modernas. La transición hacia modelos de **currículo flexible** ha transformado este proceso de una tarea administrativa tediosa en un **Problema Complejo de Ingeniería** de naturaleza combinatoria.

---

### ⚡ Problema Central y Complejidad
**El problema central es la incapacidad de generar horarios académicos eficientes que cumplan simultáneamente con restricciones físicas, académicas y humanas.**

Desde la perspectiva de la computación, este es un **Constraint Satisfaction Problem (CSP)**. A medida que aumenta el número de cursos (N) y docentes (M), el espacio de búsqueda de soluciones válidas crece de manera exponencial, haciendo que el proceso manual sea matemáticamente propenso al fracaso o a soluciones sub-óptimas que generan solapamientos.

---

### 🧐 Evidencia de Complejidad: Ambigüedades y Trade-offs
Para alcanzar una solución sobresaliente, hemos identificado y argumentado las siguientes incertidumbres:

1.  **Priorización de Restricciones (Trade-off):** ¿Es más importante evitar que un docente tenga "horas muertas" o asegurar que las aulas de mayor capacidad no queden vacías? **Decisión:** Priorizamos la integridad del horario estudiantil sobre la compactación docente en la fase PMV.
2.  **Incertidumbre en Bloques:** La variabilidad de duraciones (60 vs 90 min) dificulta el empaquetado de bloques. **Decisión:** Estandarizar bloques base para facilitar el cálculo algorítmico.
3.  **Flexibilidad vs. Control:** Los estudiantes de currículo flexible no tienen secciones fijas. **Decisión:** El sistema modelará "proyecciones de demanda" para estimar el número de secciones necesarias.

---

### 🛠️ Restricciones y Variables
El sistema debe procesar un ecosistema dinámico de variables:
- **Restricciones Duras (Hard):** No solape de docente, no solape de aula, cumplimiento de prerrequisitos.
- **Restricciones Blandas (Soft):** Docentes con preferencias de mañana/tarde, minimización de "huecos" en el horario.

> [!IMPORTANT]
> El reconocimiento de estas restricciones es vital para el diseño del algoritmo. Una solución que no considere la capacidad de aforo vs. matrícula es una solución fallida en el contexto real.

---

### 💡 Justificación de la Solución Tecnológica
La automatización mediante un motor de optimización (basado en el enfoque **Spec-Driven Development**) es la única vía para garantizar una planificación 100% libre de errores. El uso de **Google Antigravity** como soporte conceptual nos permite diseñar una arquitectura que soporte la complejidad matemática sin sacrificar la usabilidad administrativa.

---

### 🎯 Alcance Estratégico (PMV)
El desarrollo se limita a las funcionalidades core que demuestren la viabilidad técnica:
- Registro de entidades base (Docentes, Aulas, Cursos).
- Motor de generación automática con validación de restricciones duras.
- Interfaz de visualización y ajuste manual.

> [!NOTE]
> Esta delimitación es consistente con el plazo de **16 semanas** y permite centrar los esfuerzos de ingeniería en el algoritmo de resolución de conflictos, que es el corazón del problema.
