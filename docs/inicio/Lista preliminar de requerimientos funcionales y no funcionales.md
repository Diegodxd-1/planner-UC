# Lista Preliminar de Requerimientos Funcionales y No Funcionales

**Taller de Proyectos 2 - Ingeniería de Sistemas e Informática**

**Docente:** Job Daniel Gamarra Moreno  
**NRC:** 28574

---

## 1. Requerimientos funcionales

| ID   | Nombre del Requerimiento | Descripción Técnica | Criterio de Aceptación |
|------|--------------------------|---------------------|------------------------|
| RF-01 | Registrar docentes | Registrar docente con código, nombre, disponibilidad y cursos. Validar campos y código único. | Dado un docente válido, cuando se guarda, entonces el sistema lo registra. |
| RF-02 | Registrar cursos | Registrar curso con código, nombre, créditos, sección y prerrequisitos. Código único. | Dado un curso válido, cuando se guarda, entonces queda disponible para planificación. |
| RF-03 | Registrar aulas | Registrar aula con código, capacidad y tipo. Capacidad > 0. | Dado un aula válida, cuando se guarda, entonces puede asignarse a horarios. |
| RF-04 | Definir bloques horarios | Crear, editar y eliminar bloques con día, inicio y fin. Sin traslapes. | Dado un bloque válido, cuando se registra, entonces queda disponible para asignación. |
| RF-05 | Registrar restricciones | Registrar restricciones obligatorias o deseables para docentes, cursos o aulas. | Dado una restricción definida, cuando se guarda, entonces se aplica en la generación. |
| RF-06 | Validar datos previos | Verificar existencia de docentes, cursos, aulas y bloques antes de generar. | Dado datos incompletos, cuando se intenta generar, entonces el sistema bloquea la acción. |
| RF-07 | Generar horarios | Generar horarios asignando docentes, aulas y bloques respetando restricciones. | Dado datos válidos, cuando se ejecuta la generación, entonces se crea un horario válido. |
| RF-08 | Detectar conflictos | Identificar solapamientos de docentes, aulas o cursos. | Dado un conflicto, cuando se valida el horario, entonces el sistema lo reporta. |
| RF-09 | Priorizar restricciones | Clasificar restricciones en obligatorias y deseables. Priorizar obligatorias. | Dado ambas restricciones, cuando se genera el horario, entonces se cumplen las obligatorias. |
| RF-10 | Visualizar horarios | Mostrar horarios por docente, curso, aula o bloque. | Dado un horario generado, cuando se aplica un filtro, entonces se muestran los resultados. |
| RF-11 | Ajustar horarios manualmente | Permitir modificar asignaciones y validar conflictos inmediatamente. | Dado un cambio manual, cuando se guarda, entonces se valida y acepta si no hay conflicto. |
| RF-12 | Re-generar horarios | Permitir ejecutar nuevamente la generación tras cambios en datos. | Dado datos actualizados, cuando se re-genera, entonces se produce un nuevo horario. |
| RF-13 | Consultar horarios | Consultar horarios por estudiante, docente, curso o aula. | Dado un filtro aplicado, cuando se consulta, entonces se muestran las asignaciones. |
| RF-14 | Gestionar usuarios y roles | Administrar usuarios y restringir acciones según rol. | Dado un rol sin permiso, cuando accede a una función restringida, entonces el acceso se deniega. |
| RF-15 | Registrar historial | Guardar cada generación con fecha, usuario y resultado. | Dado una generación ejecutada, cuando se consulta historial, entonces aparece el registro. |
| RF-16 | Emitir reporte de incidencias | Generar reporte cuando no exista solución válida. | Dado restricciones incompatibles, cuando se genera el horario, entonces se emite un reporte. |

## 2. Requerimientos no funcionales

| Categoría arc42 | Atributo | Requerimiento Cuantificable | Justificación |
|---|---|---|---|
| Rendimiento | Tiempo de consulta | Consultas de horario ≤ 2 s con hasta 500 registros. | Consultas lentas dificultan validar horarios. |
| Rendimiento | Tiempo de generación | Generación de horario ≤ 60 s para 100 cursos, 50 docentes, 40 aulas. | Si tarda más, no mejora la planificación manual. |
| Disponibilidad | Operatividad | Sistema disponible ≥ 95% durante pruebas. | Si falla, no puede demostrarse ni validarse. |
| Seguridad | Control de acceso | 100% de operaciones críticas requieren autenticación y rol. | Evita cambios no autorizados en horarios. |
| Seguridad | Protección de credenciales | Contraseñas almacenadas con hash seguro, nunca en texto plano. | Evita exposición de credenciales. |
| Integridad | Datos únicos | 0 duplicados en códigos de docentes, cursos y aulas. | Duplicados generan errores en horarios. |
| Fiabilidad | Consistencia | Mismos datos ⇒ mismo resultado o mismas incidencias (100%). | Resultados inconsistentes reducen confianza. |
| Usabilidad | Aprendizaje | Usuario nuevo genera horario en ≤ 15 min con guía básica. | Reduce dependencia de soporte. |
| Usabilidad | Mensajes de error | 100% de errores indican campo y corrección. | Facilita corrección de datos. |
| Compatibilidad | Navegadores | Compatible con últimas 2 versiones de Chrome, Edge y Firefox. | Evita problemas en entornos académicos. |
| Mantenibilidad | Modularidad | Sistema organizado en módulos y ≥ 70% de pruebas en lógica crítica. | Facilita mantenimiento y cambios. |
| Mantenibilidad | Trazabilidad | 100% de cambios asociados a issue o commit. | Permite seguimiento del desarrollo. |
| Escalabilidad | Crecimiento | Soporta 2× datos con degradación ≤ 30%. | Mantiene utilidad ante crecimiento. |
| Portabilidad | Instalación | Instalación en ≤ 30 min siguiendo ≤ 20 pasos. | Facilita replicar entorno. |
| Accesibilidad | Interfaz | Cumple criterios básicos WCAG 2.1 nivel A. | Mejora accesibilidad de usuarios. ||
