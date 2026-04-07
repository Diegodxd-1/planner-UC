# Documento Inicial del Problema (Primer Borrador)

**Taller de Proyectos 2 - Ingeniería de Sistemas e Informática**

**Docente:** Job Daniel Gamarra Moreno  
**NRC:** 28574  
**Huancayo - Perú**

---

## 1. Contexto del problema
En las universidades, la planificación de horarios académicos es una tarea compleja que involucra múltiples variables como la disponibilidad de docentes, la asignación de aulas, los cursos ofrecidos, las secciones disponibles y las restricciones académicas asociadas. Generalmente, este proceso se realiza de forma manual o mediante herramientas poco automatizadas, lo que puede generar errores, conflictos de horarios y dificultades en la organización académica.

## 2. Problema central
El problema central consiste en la dificultad de generar horarios académicos universitarios de manera eficiente, considerando múltiples restricciones y recursos limitados. La generación manual es propensa a errores y requiere múltiples ajustes.

### Ambigüedad del problema
* No se especifica el número exacto de bloques horarios disponibles.
* No se define la prioridad entre restricciones en caso de conflicto.
* No se detalla si los docentes pueden dictar múltiples secciones del mismo curso.
* No se establece si los estudiantes eligen libremente o siguen un plan predefinido.

## 3. Variables involucradas
* Estudiantes matriculados.
* Docentes responsables.
* Cursos y secciones.
* Aulas y capacidad.
* Bloques horarios.
* Restricciones de disponibilidad y compatibilidad.

## 4. Restricciones del problema
* Un docente no puede estar en dos cursos al mismo tiempo.
* Un aula no puede ser usada por más de un curso simultáneamente.
* Los estudiantes no deben tener cursos obligatorios solapados.
* La capacidad del aula debe ser suficiente.
* Respetar prerrequisitos entre cursos.

## 5. Necesidad de una solución tecnológica
Es necesario desarrollar una herramienta tecnológica que automatice el proceso, facilitando la gestión de datos, la validación de restricciones y la generación automática de soluciones óptimas.

## 6. Alcance del proyecto
Desarrollar un **Producto Mínimo Viable (PMV)** utilizando el **stack tecnológico MERN (MongoDB, Express, React y Node.js)** para demostrar la viabilidad de la solución automática.
