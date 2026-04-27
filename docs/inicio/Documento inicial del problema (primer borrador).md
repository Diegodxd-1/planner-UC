# 🔍 DOCUMENTO INICIAL DEL PROYECTO (PRIMER BORRADOR)

### 🌏 Contexto del Problema
En las universidades, la planificación de horarios académicos es una tarea compleja que involucra múltiples variables, como la disponibilidad de docentes, la asignación de aulas, los cursos ofertados, las secciones disponibles y diversas restricciones académicas.

En muchos casos, este proceso se realiza de forma manual o con herramientas limitadas, lo que genera errores, conflictos de horarios y dificultades en la organización académica. Además, la coordinación de estos elementos exige considerar restricciones como la capacidad de aulas, disponibilidad docente, compatibilidad de cursos y distribución de carga académica.

> [!WARNING]
> La falta de herramientas adecuadas provoca solapamientos de horarios, uso ineficiente de recursos y retrasos en la planificación.

---

### ⚡ Problema Central
**Existe dificultad para generar horarios académicos universitarios de manera eficiente, considerando múltiples restricciones y recursos limitados.**

El proceso manual suele ser propenso a errores, conflictos entre docentes, cursos o aulas, y requiere múltiples ajustes hasta obtener una solución válida. Esto genera pérdida de tiempo en los coordinadores académicos y afecta la planificación oportuna de las actividades educativas.

#### **🧐 Ambigüedad del Problema**
- No se define el número exacto de bloques horarios disponibles por periodo académico.
- No se establece la prioridad entre restricciones cuando se presentan conflictos.
- No se especifica si un docente puede dictar múltiples secciones del mismo curso en distintos horarios.
- No se detalla si los estudiantes siguen un plan de estudios fijo o pueden elegir cursos libremente.
- No se define el número máximo de cursos por estudiante en un periodo académico.

---

### 📊 Variables Involucradas
El problema involucra múltiples variables que deben ser consideradas para generar una solución válida:
*   Estudiantes matriculados
*   Docentes asignados a cursos
*   Cursos y secciones disponibles
*   Aulas y su capacidad
*   Bloques horarios definidos
*   Restricciones académicas y operativas

---

### 🛠️ Restricciones del Problema
El sistema debe respetar un conjunto de restricciones para garantizar la validez del horario generado:
1.  Un docente no puede estar asignado a más de un curso en el mismo horario.
2.  Un aula no puede ser utilizada por más de un curso simultáneamente.
3.  Un estudiante no debe tener cursos obligatorios en el mismo horario.
4.  La capacidad del aula debe ser suficiente para la cantidad de estudiantes asignados.
5.  Se deben respetar los prerrequisitos entre cursos.

> [!IMPORTANT]
> Estas restricciones hacen que el problema sea de alta complejidad, ya que no todas las combinaciones posibles generan soluciones válidas.

---

### 💡 Necesidad de una Solución Tecnológica
Dada la complejidad del problema, se requiere una solución tecnológica que automatice la generación de horarios académicos. Una aplicación web permitirá gestionar la información académica, validar restricciones y generar horarios de forma automática. Esto reduce errores humanos, mejora la eficiencia del proceso y optimiza el uso de recursos como aulas y docentes.

---

### 🎯 Alcance del Proyecto
El proyecto consiste en el desarrollo de un **Producto Mínimo Viable (PMV)** de una aplicación web para la generación de horarios académicos.

**El sistema permitirá:**
- Registrar información básica (docentes, cursos, aulas y horarios)
- Definir restricciones principales
- Generar horarios automáticamente sin conflictos básicos

El sistema será desarrollado utilizando el stack **MERN** (MongoDB, Express, React y Node.js) y se implementará en un entorno controlado. El alcance se limita a funcionalidades esenciales, priorizando la validación del modelo del problema y la generación de soluciones válidas dentro del tiempo del proyecto (16 semanas).