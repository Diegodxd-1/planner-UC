# 🔍 DOCUMENTO INICIAL DEL PROYECTO (PRIMER BORRADOR)

### 🌏 Contexto del Problema
La planificación de horarios es un **Problema Complejo de Ingeniería**. En las universidades con **currículo flexible**, el número de combinaciones posibles crece exponencialmente, haciendo que el proceso manual sea ineficiente y propenso a errores críticos de solapamiento.

---

### ⚡ Problema Central
**Existe dificultad para generar horarios académicos óptimos que cumplan con restricciones físicas, académicas y humanas en tiempo real.**

#### **🧐 Evidencia de Complejidad (Ambigüedades y Trade-offs)**
1.  **Jerarquía de Conflictos:** No existe una prioridad clara entre restricciones. **Decisión:** Priorizamos las restricciones "Duras" (choques de aula/docente) sobre las "Blandas" (preferencias horarias).
2.  **Variabilidad de Bloques:** La falta de estandarización en bloques (60/90 min) complica el algoritmo. **Decisión:** El sistema estandarizará bloques de 90 min para el PMV.
3.  **Carga Docente:** ¿Es mejor compactar el horario del docente o el del alumno? **Trade-off:** Se prioriza la compactación de la malla estudiantil para reducir la deserción.

---

### 🛠️ Restricciones del Problema
1.  **Exclusividad:** Un docente/aula no puede tener dos actividades simultáneas.
2.  **Capacidad:** El aforo del aula debe ser $\geq$ a la matrícula proyectada.
3.  **Continuidad:** Respeto estricto a los prerrequisitos de la malla curricular.
4.  **Disponibilidad:** Ventanas horarias obligatorias de docentes externos.

---

### 💡 Justificación de la Solución Tecnológica
Dada la naturaleza combinatoria (CSP - Constraint Satisfaction Problem) del problema, el uso de un motor de optimización (Google OR-Tools) es indispensable. Esto permite pasar de una planificación de días a una de **minutos**, garantizando el cumplimiento del 100% de las leyes académicas.

---

### 🎯 Alcance del Proyecto (PMV)
El desarrollo se centra en un **Producto Mínimo Viable** desarrollado en **16 semanas**:
- Gestión de base de datos académica (MERN).
- Algoritmo de generación automática validado con **TDD**.
- Interfaz de ajuste manual con validación en tiempo real.

> [!NOTE]
> Esta delimitación garantiza una entrega funcional y técnica de alta calidad, evitando la expansión innecesaria del alcance que ponga en riesgo los plazos.
