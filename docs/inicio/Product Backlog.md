# Product Backlog

**Taller de Proyectos 2 - Ingeniería de Sistemas e Informática**

---

## 1. Introducción
El Product Backlog es una lista priorizada de todo lo que se conoce que es necesario en el producto. Es la única fuente de requisitos para cualquier cambio a realizarse en el sistema **Planner-UC**. Se ha estructurado en forma de **Historias de Usuario (User Stories)** para facilitar la validación con los stakeholders.

## 2. Historias de Usuario Priorizadas

| ID | Historia de Usuario | Prioridad | Estimación (Story Points) | Requerimiento Vinculado |
| :--- | :--- | :---: | :---: | :--- |
| **US-01** | **Gestión de Disponibilidad**: Como coordinador, quiero registrar la disponibilidad horaria de los docentes para evitar asignaciones en horarios no laborables. | Alta | 5 | RF-01 |
| **US-02** | **Carga de Infraestructura**: Como administrador, quiero registrar aulas y sus capacidades para asegurar que los grupos no superen el aforo permitido. | Alta | 3 | RF-03 |
| **US-03** | **Motor de Generación**: Como coordinador, quiero ejecutar el motor de optimización para obtener una propuesta de horario base en menos de 1 minuto. | Crítica | 13 | RF-04 |
| **US-04** | **Detección de Conflictos**: Como coordinador, quiero recibir alertas visuales inmediatas sobre solapamientos para corregir errores durante el ajuste manual. | Crítica | 8 | RF-05 |
| **US-05** | **Interfaz de Ajuste (Drag & Drop)**: Como administrador, quiero mover clases en un calendario interactivo para realizar ajustes finos de última hora. | Media | 8 | RF-06 |
| **US-06** | **Catalogación Académica**: Como analista, quiero cargar la lista de cursos y sus prerrequisitos para mantener la coherencia de la malla curricular. | Alta | 5 | RF-02 |
| **US-07** | **Reporte de No-Asignados**: Como administrador, quiero ver un reporte de cursos que no pudieron ser programados para gestionar recursos adicionales (aulas/docentes). | Media | 3 | RF-07 |
| **US-08** | **Acceso Seguro**: Como usuario del sistema, quiero autenticarme con mi rol correspondiente para asegurar la integridad de la información académica. | Alta | 5 | RF-08 |

## 3. Criterios de Aceptación Generales (DoD)
Para que una Historia de Usuario se considere "Done" (Hecha), debe cumplir con:
1.  **Código**: Subido al repositorio en la rama correspondiente y sin conflictos.
2.  **Pruebas**: Cobertura de pruebas unitarias al 80% y validación de criterios específicos de la historia.
3.  **Documentación**: Código comentado y actualización del manual de usuario (si aplica).
4.  **Validación**: Demo aprobada por el Product Owner (Líder de Proyecto).

---
*Backlog inicial generado para el Sprint 0 - 2026. Dominio académico y optimización técnica.*
