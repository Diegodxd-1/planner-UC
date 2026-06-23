# 1. Registro de Riesgos

## 1.1. Objetivo

Consolidar los eventos inciertos que pudieron afectar el alcance, la calidad, el cronograma o los costos de Planner-UC, junto con las respuestas aplicadas y su estado al cierre del MVP.

## 1.2. Escala utilizada

| Nivel | Probabilidad | Impacto |
| --- | --- | --- |
| Bajo | Poco probable | Efecto menor y recuperable |
| Medio | Puede ocurrir | Afecta parcialmente un entregable |
| Alto | Probable o recurrente | Compromete objetivos relevantes |

## 1.3. Registro consolidado

| ID | Riesgo | Área | Probabilidad inicial | Impacto | Respuesta aplicada | Resultado o evidencia | Estado final |
| --- | --- | --- | --- | --- | --- | --- | --- |
| R-01 | Requerimientos incompletos o cambiantes | Alcance | Alta | Alto | Revisión incremental de requisitos, actualización documental y priorización del MVP. | El alcance evolucionó hacia autenticación, CRUD, calidad, seguridad y accesibilidad. Persisten funciones avanzadas fuera del MVP. | Mitigado |
| R-02 | Vulnerabilidades en autenticación o acceso administrativo | Seguridad | Media | Alto | Validación de sesión y rol en servidor, perfil activo obligatorio, setup protegido y credenciales en variables de entorno. | Auditoría OWASP y pruebas administrativas; persiste riesgo residual por ausencia de MFA. | Mitigado |
| R-03 | Fallo del algoritmo por alta complejidad | Calidad | Alta | Alto | Uso de OR-Tools CP-SAT, separación de datos y optimización, helpers y pruebas de restricciones. | 39 pruebas backend aprobadas; solución funcional con datos demo. | Mitigado |
| R-04 | Rendimiento insuficiente con grandes volúmenes | Rendimiento | Media | Alto | Paginación, reducción de payloads y optimización de consultas. | No existen pruebas de carga con volumen institucional. | Abierto |
| R-05 | Datos inválidos o inconsistentes | Datos | Media | Alto | Validaciones de JSON, correo, contraseña, roles, identificadores y aforo. | Pruebas de rutas y payloads; restricciones SQL versionadas. | Mitigado |
| R-06 | Fallo de comunicación frontend-backend | Integración | Media | Medio | Contrato del endpoint, estados de carga y error, pruebas de API y E2E. | El frontend consume correctamente `/api/scheduling-demo` y muestra respuestas y errores controlados. | Mitigado |
| R-07 | Cambios de necesidades | Alcance | Media | Alto | Ajuste del backlog y evolución incremental. | Se agregaron controles de calidad, seguridad, WCAG, SUS y sostenibilidad. | Materializado |
| R-08 | Falta de tiempo del equipo | Cronograma | Alta | Alto | Repriorización hacia el MVP. | El equipo concentró el trabajo en las funcionalidades esenciales y dejó las ampliaciones fuera del alcance del cierre. | Materializado |
| R-09 | Falta de experiencia con herramientas | Equipo | Media | Medio | Investigación, pruebas y correcciones iterativas. | Se resolvieron problemas de SonarQube, Cypress, cobertura y CP-SAT. | Mitigado |
| R-10 | Dependencias externas | Cronograma | Baja | Medio | Limitación a herramientas y entornos disponibles. | No se integraron sistemas institucionales. | Aceptado |
| R-11 | Estimación imprecisa de tareas | Cronograma | Alta | Alto | Repriorización progresiva. | Los backlogs no coinciden completamente con el estado final. | Materializado |
| R-12 | Planificación deficiente de sprints | Cronograma | Media | Alto | Seguimiento mediante Git, commits y pull requests. | Los documentos de sprint quedaron desactualizados. | Materializado |
| R-13 | Falta de control del avance | Gestión | Media | Medio | Historial Git, evidencias y matriz de cumplimiento. | Existe trazabilidad técnica, pero no cierre actualizado de todas las historias. | Mitigado parcialmente |
| R-14 | Problemas de coordinación | Equipo | Media | Medio | División de trabajo y documentación compartida. | Existen aportes de varios autores, sin registro completo de comunicaciones. | Mitigado parcialmente |
| R-15 | Exposición de secretos administrativos | Seguridad | Media | Alto | Eliminación de credenciales hardcodeadas. | SonarQube pasó de un issue de seguridad a cero. | Cerrado |
| R-16 | Vulnerabilidades en dependencias | Seguridad | Alta | Alto | Actualización de Next.js y overrides. | `npm audit --omit=dev` pasó de tres vulnerabilidades a cero. | Mitigado |
| R-17 | Regresiones de accesibilidad | Calidad | Media | Medio | Correcciones WCAG y evaluación Axe. | Ocho violaciones reducidas a cero; Axe no está integrado en CI. | Mitigado |
| R-18 | Falta de monitoreo y alertas | Operación | Media | Alto | Logging básico. | No existe sistema centralizado de alertas. | Abierto |
| R-19 | Datos demo no representativos | Alcance | Alta | Alto | Uso controlado de datos demo y declaración de la limitación. | No existe validación con datos institucionales. | Abierto |
| R-20 | Desalineación documental | Gestión | Alta | Medio | Actualización de README, SPEC y reportes. | Persisten backlogs, costos y enlaces que requieren normalización. | Materializado |

## 1.4. Resumen de riesgos

| Estado final | Cantidad |
| --- | ---: |
| Cerrado | 1 |
| Mitigado | 8 |
| Mitigado parcialmente | 2 |
| Materializado | 5 |
| Aceptado | 1 |
| Abierto | 3 |
| Total | 20 |

## 1.5. Riesgos prioritarios posteriores al cierre

| Prioridad | Riesgo | Acción recomendada |
| --- | --- | --- |
| Alta | Datos demo no representativos | Validar el modelo con datos académicos anonimizados. |
| Alta | Rendimiento no validado | Ejecutar pruebas de carga y medir el solver. |
| Alta | Falta de monitoreo | Centralizar logs y configurar alertas. |
| Media | Ausencia de MFA | Activar autenticación reforzada para administradores. |
| Media | Regresiones WCAG | Integrar Axe en CI. |
