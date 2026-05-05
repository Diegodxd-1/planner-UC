## Backlog Detallado del Producto

**Nombre del Proyecto:** Planner - UC  
**Dueño del Producto:** OptiHorario  

---

## Historias de Usuario

| ID | Rol | Deseo | Para | ID Tarea | Tarea | Criterio de Aceptación | Prioridad | Estimación | Dependencias | Sprint | Estado | Comentarios |
|----|-----|-------|------|----------|-------|------------------------|----------|------------|--------------|--------|--------|-------------|
| HU-1 | Administrador | Registrar usuarios | gestionar accesos al sistema | T1.1 | Crear formulario y validación | Dado datos válidos, el sistema registra la cuenta correctamente | 3 | 3 | - | Sprint 1 | Terminado | Base del sistema |
| HU-2 | Usuario | Iniciar sesión | acceder según rol | T2.1 | Implementar autenticación | Dado credenciales válidas, permite acceso | 2 | 2 | HU-1 | Sprint 1 | Terminado | Seguridad |
| HU-3 | Coordinador | Registrar cursos | planificación de horarios | T3.1 | CRUD de cursos | Dado datos válidos, el curso queda disponible | 3 | 3 | HU-2 | Sprint 1 | Terminado | |
| HU-4 | Coordinador | Registrar docentes | asignarlos a cursos | T4.1 | CRUD de docentes | Dado datos válidos, docente disponible | 3 | 3 | HU-2 | Sprint 1 | Terminado | |
| HU-5 | Coordinador | Registrar aulas | asignar espacios | T5.1 | CRUD de aulas | Dado aula válida, queda disponible | 2 | 2 | HU-2 | Sprint 1 | Por Hacer | |
| HU-10 | Coordinador | Editar horarios | corregir asignaciones | T10.1 | Edición manual | Dado horario existente, se actualiza sin conflictos | 3 | 3 | HU-7, HU-8 | Sprint 1 | Por Hacer | Validación |
| HU-8 | Coordinador | Detectar conflictos | identificar solapamientos | T8.1 | Validar restricciones | Dado datos completos, detecta conflictos | 8 | 7 | HU-3, HU-4, HU-5, HU-6 | Sprint 1 | Por Hacer | Core |
| HU-6 | Coordinador | Definir bloques horario | organizar tiempos | T6.1 | Crear bloques | Dado bloque válido, queda disponible | 5 | 5 | HU-3, HU-4, HU-5 | Sprint 1 | Por Hacer | |
| HU-7 | Usuario | Generar horarios | automatizar planificación | T7.1 | Algoritmo de generación | Dado datos base, genera horario válido | 3 | 3 | HU-3, HU-4, HU-5, HU-6, HU-8 | Sprint 1 | Por Hacer | UI |
| HU-9 | Coordinador | Ver horarios | visualizar resultados | T9.1 | Vista de horarios | Dado horario generado, se visualiza correctamente | 5 | 4 | HU-7 | Sprint 1 | Por Hacer | |
| HU-11 | Usuario | Consultar horarios | usar filtros | T11.1 | Filtros de búsqueda | Dado filtros, muestra resultados correctos | 3 | 3 | HU-7, HU-9 | Sprint 2 | Por Hacer | |
| HU-12 | Coordinador | Guardar ejecuciones | historial | T12.1 | Registrar ejecución | Dado ejecución finalizada, se guarda | 3 | 3 | HU-7 | Sprint 2 | Por Hacer | |
| HU-30 | Coordinador | Reporte de conflictos | analizar problemas | T30.1 | Generar reporte | Dado conflictos, muestra detalle | 3 | 3 | HU-8, HU-7 | Sprint 2 | Por Hacer | |
| HU-26 | Coordinador | Registrar estudiantes | base para matrícula | T26.1 | CRUD estudiantes | Dado datos válidos, queda disponible | 5 | 5 | HU-2 | Sprint 2 | Por Hacer | |
| HU-28 | Sistema | Validar prerrequisitos | evitar errores académicos | T28.1 | Validación | Dado incumplimiento, bloquea matrícula | 5 | 5 | HU-27, HU-3 | Sprint 2 | Por Hacer | |
| HU-29 | Sistema | Validar créditos | evitar sobrecarga | T29.1 | Validación créditos | Dado exceso, bloquea matrícula | 3 | 3 | HU-27, HU-3 | Sprint 2 | Por Hacer | |
| HU-27 | Coordinador | Matricular cursos | relación estudiante-curso | T27.1 | Registrar matrícula | Dado datos válidos, registra relación | 5 | 3 | HU-26, HU-3 | Sprint 2 | Por Hacer | Mejora |

---

## Resumen del Backlog

| Estado | Cantidad |
|--------|---------|
| Terminado | 4 |
| Por Hacer | 13 |

---

## Notas

- El backlog está organizado por **Sprints (1 y 2)**  
- Las historias críticas están relacionadas con la **generación de horarios (core del sistema)**  
- Se identifican dependencias clave que afectan el flujo del desarrollo  
- Las validaciones académicas (prerrequisitos y créditos) se implementan en el Sprint 2  