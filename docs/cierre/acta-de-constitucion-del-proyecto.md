# 1. Revisión del Acta de Constitución del Proyecto

## 1.1. Identificación del proyecto

| Campo | Definición |
| --- | --- |
| Nombre | Sistema de Generación Óptima de Horarios Académicos en Entornos de Currículo Flexible |
| Nombre corto | Planner-UC |
| Tipo de producto | Producto Mínimo Viable |
| Beneficiario | Institución universitaria |
| Usuario principal | Coordinador o administrador académico |
| Equipo ejecutor | Grupo 05 |
| Duración planificada | 16 semanas |

## 1.2. Objetivo general revisado

El Acta de Constitución estableció como objetivo general desarrollar un sistema web capaz de generar horarios académicos optimizados, reducir conflictos y mejorar la eficiencia de la planificación.

El objetivo se considera **cumplido parcialmente en el nivel de MVP**:

- existe una aplicación web funcional;
- existe un motor de optimización con OR-Tools CP-SAT;
- el solver evita conflictos de aula en los escenarios modelados;
- el resultado puede visualizarse desde el frontend;
- existen módulos administrativos para cursos, aulas y usuarios;
- todavía no existe integración completa entre los datos persistidos y el solver;
- docentes, disponibilidad y matrícula individual no forman parte del modelo actual.

## 1.3. Revisión de objetivos específicos

| Objetivo del Acta | Evidencia de ejecución | Estado final | Observación |
| --- | --- | --- | --- |
| Modelar el problema de generación de horarios | `SPEC.md`, lógica CP-SAT y documentación del backend. | Cumplido | El modelo cubre cursos, aulas, bloques, secciones y demanda estimada. |
| Gestionar docentes, cursos, aulas y disponibilidades | CRUD de cursos, aulas y usuarios. | Parcial | No existe módulo completo de disponibilidad docente ni integración docente-solver. |
| Implementar un algoritmo que genere horarios válidos | `Backend/app/scheduling_demo.py`. | Cumplido para el demo | Genera una oferta horaria sin conflictos de aula para datos controlados. |
| Validar el sistema mediante pruebas funcionales | Jest, Cypress, pytest, SonarQube, OWASP, WCAG y SUS. | Cumplido | La validación es amplia para el alcance del MVP. |
| Documentar el proceso y los resultados | README, SPEC, ARC42, reportes y evidencias. | Cumplido | Existen desfases puntuales en backlogs, costos y enlaces. |

## 1.4. Revisión de entregables principales

| Entregable definido | Evidencia | Estado |
| --- | --- | --- |
| Documento de análisis del problema | `docs/inicio/Documento inicial del problema (primer borrador).md` | Entregado |
| Modelo formal del problema | `SPEC.md` y documentación del solver | Entregado |
| Documento de arquitectura y diseño | `docs/ARC42.md` | Entregado |
| Sistema funcional MVP | `frontend/` y `Backend/` | Entregado con alcance parcial |
| Casos de prueba y validación | Pruebas frontend/backend y `docs/evidencias/` | Entregado |
| Documentación técnica | README, SPEC y reportes Markdown | Entregado |
| Video demostrativo | No se encontró evidencia versionada en el repositorio. | No verificado |

## 1.5. Revisión de criterios de aceptación

| Criterio original | Resultado verificable | Evaluación |
| --- | --- | --- |
| Generar un horario en cinco minutos o menos | El backend genera la solución demo y las pruebas no reportan timeout. No existe medición formal versionada del tiempo máximo. | Parcialmente cumplido |
| No presentar conflictos de docentes, aulas o cursos | Se previenen conflictos de aula. Docentes y cruces individuales de estudiantes no están modelados. | Parcialmente cumplido |
| Validar el 100% de las restricciones críticas definidas | Las restricciones implementadas tienen pruebas, pero no se implementaron todas las restricciones originalmente previstas. | Parcialmente cumplido |
| Registrar y gestionar docentes, cursos y aulas | Se gestionan cursos, aulas y usuarios con rol profesor. No existe gestión completa de disponibilidad docente. | Parcialmente cumplido |
| Funcionar correctamente en al menos el 90% de los casos de prueba | Las suites finales documentadas aprobaron 66 pruebas frontend y 39 backend sin fallos. | Cumplido |
| Entregar documentación completa | Existe documentación técnica y de cierre. Persisten elementos de gestión por actualizar. | Cumplido parcialmente |

## 1.6. Revisión de los criterios de éxito

| Criterio de éxito | Estado | Justificación |
| --- | --- | --- |
| Viabilidad técnica del enfoque de optimización | Alcanzado | CP-SAT genera soluciones y cuenta con pruebas automatizadas. |
| Aplicación web funcional | Alcanzado | Frontend, autenticación, navegación y CRUD implementados. |
| Integración completa con datos reales | No alcanzado | El solver utiliza datos demo. |
| Calidad técnica verificable | Alcanzado | Quality Gate aprobado y cobertura global de 80.1%. |
| Seguridad básica del MVP | Alcanzado | Control de acceso, validaciones y cero vulnerabilidades productivas reportadas. |
| Accesibilidad de las rutas evaluadas | Alcanzado | Axe final reporta cero violaciones automáticas. |
| Usabilidad aceptable | Alcanzado | Puntaje SUS promedio de 81.56/100. |
| Preparación para producción institucional | No alcanzado | Faltan datos reales, monitoreo, MFA, pruebas de carga y operación formal. |

## 1.7. Revisión de hitos

| Hito | Resultado |
| --- | --- |
| Análisis y requerimientos | Completado y documentado. |
| Diseño de la solución | Arquitectura y especificación disponibles. |
| Desarrollo | MVP funcional con alcance avanzado pendiente. |
| Pruebas y validación | Completado para el alcance actual. |
| Entrega final | Documentación de cierre en preparación. |

No es posible calcular una variación temporal exacta porque los backlogs no fueron cerrados de forma consistente y no existe una línea base detallada con fechas reales por hito.

## 1.8. Revisión de riesgos de alto nivel

| Riesgo definido en el Acta | Resultado |
| --- | --- |
| Alta complejidad de las restricciones | Mitigado para el demo mediante CP-SAT y pruebas. |
| Cambios de requerimientos | Materializado; el alcance evolucionó durante el proyecto. |
| Tiempo limitado | Materializado; se priorizó el MVP y quedaron funciones pendientes. |
| Rendimiento del algoritmo | Mitigado para datos demo; no validado a escala institucional. |
| Falta de experiencia | Mitigado mediante aprendizaje, pruebas y documentación. |
| Falta de datos reales | Materializado y pendiente de resolución. |

## 1.9. Dictamen de revisión del Acta

El proyecto es aceptable como **MVP académico funcional y técnicamente validado**.

No debe declararse como solución institucional completa debido a las siguientes brechas:

1. el solver no consume directamente los datos persistidos;
2. no modela docentes ni disponibilidades;
3. no realiza matrícula individual;
4. no cuenta con pruebas de carga institucionales;
5. no tiene monitoreo ni operación productiva;
6. no existe evidencia versionada del video demostrativo;
7. la documentación de cronograma y costos requiere cierre administrativo.
