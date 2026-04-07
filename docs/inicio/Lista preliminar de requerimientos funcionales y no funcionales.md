# Lista Preliminar de Requerimientos Funcionales y No Funcionales

**Taller de Proyectos 2 - Ingeniería de Sistemas e Informática**

**Docente:** Job Daniel Gamarra Moreno  
**NRC:** 28574

---

## 1. Requerimientos funcionales

| ID | Nombre del Requerimiento | Descripción Técnica | Criterio de Aceptación |
| :--- | :--- | :--- | :--- |
| RF-01 | Registrar docentes | Registrar docente con código, nombre, disponibilidad y cursos. | Registro exitoso de docente válido. |
| RF-02 | Registrar cursos | Registrar curso con código, nombre, créditos, sección y prerrequisitos. | Disponibilidad para planificación. |
| RF-03 | Registrar aulas | Registrar aula con código, capacidad y tipo. | Poder asignarse a horarios. |
| RF-04 | Definir bloques horarios | Crear, editar y eliminar bloques con día, inicio y fin. | Disponibilidad para asignación. |
| RF-05 | Registrar restricciones | Registrar restricciones obligatorias o deseables. | Aplicación en la generación. |
| RF-06 | Validar datos previos | Verificar existencia de datos base antes de generar. | Bloqueo si hay datos incompletos. |
| RF-07 | Generar horarios | Asignar docentes, aulas y bloques respetando restricciones. | Creación de horario válido. |
| RF-08 | Detectar conflictos | Identificar solapamientos de docentes, aulas o cursos. | Reporte de conflictos detectados. |
| RF-09 | Priorizar restricciones | Clasificar en obligatorias y deseables. | Cumplimiento de obligatorias. |
| RF-10 | Visualizar horarios | Mostrar horarios por docente, curso, aula o bloque. | Visualización con filtros aplicados. |
| RF-11 | Ajustar manualmente | Modificar asignaciones y validar inmediatamente. | Validación y aceptación si es válido. |
| RF-12 | Re-generar horarios | Ejecutar nuevamente tras cambios en datos. | Nuevo horario generado. |
| RF-13 | Consultar horarios | Por estudiante, docente, curso o aula. | Muestra de asignaciones según filtro. |
| RF-14 | Gestionar usuarios | Administrar usuarios y roles. | Denegación de acceso si no tiene permiso. |
| RF-15 | Registrar historial | Guardar historial de generaciones. | Aparición en registro de historial. |
| RF-16 | Reporte incidencias | Generar reporte si no hay solución válida. | Emisión de reporte por incompatibilidad. |

## 2. Requerimientos no funcionales

| Categoría | Atributo | Requerimiento Cuantificable | Justificación |
| :--- | :--- | :--- | :--- |
| Rendimiento | Tiempo consulta | Consultas de horario ≤ 2 s para 500 registros. | Fluidez en la validación. |
| Rendimiento | Tiempo generación| Generación ≤ 60 s para 100 cursos/50 docentes. | Mejora sobre el proceso manual. |
| Disponibilidad | Operatividad | Disponible ≥ 95% durante pruebas. | Permitir validación continua. |
| Seguridad | Control acceso | 100% operaciones críticas requieren rol. | Seguridad de la información académica. |
| Seguridad | Credenciales | Contraseñas almacenadas con hash seguro. | Evitar exposición de datos. |
| Integridad | Datos únicos | 0 duplicados en códigos. | Evitar errores en la generación. |
| Fiabilidad | Consistencia | 100% mismos datos -> mismo resultado. | Confianza en el sistema. |
| Usabilidad | Aprendizaje | Uso en ≤ 15 min con guía básica. | Reducción de soporte. |
