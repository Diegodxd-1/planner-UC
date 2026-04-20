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
Como parte del pensamiento crítico aplicado, se han identificado las siguientes áreas de incertidumbre inicial que el sistema debe gestionar:
1.  **Bloques Horarios Dinámicos**: Necesidad de definir una estructura de bloques (ej: 60 u 90 minutos) que se adapte a diferentes modalidades.
2.  **Priorización Jerárquica**: Definir la lógica de decisión cuando dos restricciones deseables entran en conflicto (ej: Preferencia de docente vs. optimización de aula).
3.  **Carga Docente Máxima**: Ambigüedad en la definición de topes de secciones consecutivas para evitar la fatiga académica.

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

