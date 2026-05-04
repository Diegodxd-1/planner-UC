# Spec.md - Especificación Formal del Sistema

## 1. Propósito
Este documento define las reglas de negocio, los datos de entrada, los resultados esperados y las restricciones técnicas del motor de optimización de horarios (**OR-Tools CP-SAT**) de Planner-UC. El objetivo es reducir la ambigüedad en la generación automática de la oferta académica.

---

## 2. Definición de Entradas (Inputs)

El sistema recibe cuatro conjuntos de datos principales:

| Entidad | Atributos Clave | Descripción |
| :--- | :--- | :--- |
| **Aulas (Rooms)** | Nombre, Capacidad | Espacios físicos donde se imparten las clases. |
| **Cursos (Courses)** | Código, Bloques/Semana, Max Secciones | Asignaturas que requieren entre 1 y 3 bloques de 90 min. |
| **Estudiantes** | Cursos Desbloqueados | Lista de asignaturas que el alumno *puede* llevar (Demanda). |
| **Franjas (Slots)** | Día, Hora Inicio, Hora Fin | Bloques estandarizados de 90 minutos (e.g., Lun 07:00-08:30). |

---

## 3. Reglas de Negocio y Restricciones

### 3.1. Restricciones Duras (Hard Constraints)
Son de cumplimiento obligatorio. Si no se cumplen, el horario es inválido.
1.  **Exclusividad de Aula:** Un aula solo puede albergar una sección en un bloque horario específico.
2.  **Capacidad de Aula:** La capacidad de alumnos asignados a una sección no debe superar el aforo físico del aula.
3.  **Límite de Secciones:** No se pueden abrir más secciones de las definidas como máximo para cada curso.
4.  **Continuidad de Secciones (Simetría):** Para evitar soluciones redundantes, la sección $N$ de un curso solo puede abrirse si la sección $N-1$ ya ha sido abierta.
5.  **Patrones Horarios:** Una sección debe cumplir con su carga horaria semanal (1, 2 o 3 bloques) siguiendo patrones predefinidos (bloques juntos o en días distintos según la configuración).

### 3.2. Objetivos de Optimización (Soft Constraints)
El solver busca minimizar una función de costo compuesta por:
1.  **Maximizar Cobertura de Demanda:** Priorizar la apertura de cursos con mayor número de estudiantes habilitados.
2.  **Minimizar Capacidad Ociosa:** Evitar abrir aulas grandes para grupos pequeños si existen alternativas.
3.  **Eficiencia de Apertura:** Minimizar el número total de secciones abiertas para optimizar costos operativos.
4.  **Preferencias Horarias:** Priorizar franjas horarias específicas (mañana/tarde) según pesos configurados.
5.  **Compacidad:** Penalizar horarios con "huecos" o días dispersos para una misma sección.

---

## 4. Definición de Salidas (Outputs)

El sistema devuelve un objeto JSON con la siguiente estructura:
-   **career_name:** Nombre de la carrera procesada.
-   **sections:** Lista de secciones abiertas con:
    -   Código y nombre del curso.
    -   Número de sección.
    -   Aula asignada.
    -   Patrón horario (días y horas).
-   **summary:** Métricas de rendimiento:
    -   Total de secciones abiertas.
    -   Demanda no cubierta estimada.
    -   Capacidad excedente.

---

## 5. Casos Límite (Edge Cases)

1.  **Demanda Cero:** Si un curso no tiene estudiantes habilitados, el modelo no debe abrir ninguna sección.
2.  **Saturación de Aulas:** Si la demanda supera la capacidad total de todas las aulas disponibles, el modelo priorizará los cursos de mayor impacto académico.
3.  **Cursos con 3 Bloques:** El sistema debe garantizar que los 3 bloques se asignen preferentemente en días contiguos o bloques seguidos para no fragmentar la disponibilidad del aula.
4.  **Aulas de Capacidad Reducida:** El solver debe evitar asignar cursos masivos a aulas pequeñas, marcando dicha demanda como "no cubierta" si no hay espacio suficiente.
