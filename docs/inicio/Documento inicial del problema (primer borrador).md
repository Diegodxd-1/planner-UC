# Documento Inicial del Problema (Primer Borrador)

**Taller de Proyectos 2 - Ingeniería de Sistemas e Informática**

**Docente:** Job Daniel Gamarra Moreno  
**NRC:** 28574  
**Huancayo - Perú**

---

## 1. Introducción y Contexto
En el ámbito académico universitario, la planificación de horarios representa un **Problema de Ingeniería Complejo** de naturaleza combinatoria, específicamente un **Constraint Satisfaction Problem (CSP)**. En entornos de **currículo flexible**, como el de la Universidad Continental, la complejidad aumenta exponencialmente debido a la alta variabilidad en la matrícula estudiantil, la disponibilidad fragmentada de docentes y la infraestructura física limitada (aulas y laboratorios).

Actualmente, este proceso se gestiona de manera artesanal o con herramientas de baja automatización, lo que resulta en:
*   **Ineficiencia**: Ciclos de planificación extendidos que consumen recursos administrativos.
*   **Conflictos**: Solapamientos involuntarios de docentes o aulas.
*   **Suboptimización**: Uso ineficiente del aforo de las aulas y brechas horarias improductivas para estudiantes y docentes.

## 2. Definición del Problema Central
El desafío principal consiste en diseñar e implementar un motor de optimización que genere mallas horarias factibles y óptimas, garantizando el cumplimiento del 100% de las restricciones obligatorias y maximizando las preferencias institucionales.

### Gestión de Incertidumbres y Ambigüedades
Como parte del pensamiento crítico aplicado, se han identificado las siguientes áreas de incertidumbre inicial que el sistema debe gestionar (Mínimo 4 según rúbrica):
1.  **Bloques Horarios Dinámicos**: Falta de definición sobre si la estructura de bloques es rígida (todas las horas iguales) o dinámica por facultad.
2.  **Priorización Jerárquica de Conflictos**: Ambigüedad en la jerarquía de resolución cuando dos restricciones de alta prioridad colisionan.
3.  **Tope de Carga Lectiva**: Incertidumbre sobre el límite máximo de horas frente a aula consecutivas permitidas para evitar el agotamiento docente.
4.  **Flexibilidad de Matrícula**: Desconocimiento del impacto real de los cruces de horarios en cursos electivos de diferentes facultades.

## 3. Mapa de Stakeholders y Relaciones
Para asegurar la viabilidad, se han identificado los siguientes actores clave:
*   **Dirección Académica**: Responsable de definir las reglas de negocio y validar la factibilidad legal de los horarios.
*   **Coordinadores de Facultad**: Stakeholders operativos que proveen la disponibilidad docente y necesidades de aula.
*   **Gestión de Infraestructura**: Provee el inventario verificado de aulas, laboratorios y sus capacidades técnicas.
*   **Cuerpo Docente**: Beneficiarios indirectos cuya satisfacción depende de mallas compactas y respeto a su disponibilidad.


## 3. Modelado del Problema: Variables y Parámetros
Para abordar la resolución técnica, el problema se descompone en las siguientes entidades:
*   **Variables de Decisión**: Asignación `(Docente, Curso, Sección, Bloque, Aula)`.
*   **Conjunto de Dominios**: Bloques horarios semanales y aulas disponibles por sede.
*   **Parámetros de Entrada**: Matrícula proyectada, disponibilidad docente y malla curricular.

## 4. Restricciones del Sistema (Validación Técnica)
Se han identificado dos capas de restricciones fundamentales:
*   **Restricciones de Integridad (Duras)**: 
    *   No solapamiento de docentes/aulas.
    *   Cumplimiento de aforo máximo.
    *   Sincronía de bloques en cursos con múltiples horas.
*   **Restricciones de Calidad (Blandas)**:
    *   Minimización de "horas huecas" para estudiantes.
    *   Agrupación de secciones por especialidad en bloques contiguos.

## 5. Propuesta de Solución: Enfoque MERN
Se propone el desarrollo de un **Producto Mínimo Viable (PMV)** robusto basado en el stack **MERN** (MongoDB, Express, React, Node.js). Este enfoque permite:
1.  **Frontend React**: Gestión de una interfaz interactiva para ajustes manuales post-generación.
2.  **Backend Node.js**: Ejecución del algoritmo de optimización de forma asíncrona.
3.  **Persistencia MongoDB**: Flexibilidad para almacenar mallas horarias con estructuras JSON variables.

