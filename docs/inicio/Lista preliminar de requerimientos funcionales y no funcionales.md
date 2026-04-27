# LISTA PRELIMINAR DE REQUERIMIENTOS FUNCIONALES Y NO FUNCIONALES

### Requerimientos funcionales

Los requerimientos funcionales describen lo que el sistema debe hacer.

| **ID**    | **Nombre del Requerimiento**  | **Descripción Técnica**                                                                                                                                             | **Criterio de Aceptación**                                                                                                        |

| **RF-01** | Registrar docentes            | Registrar docente con código único, nombre, disponibilidad horaria y cursos asignables. Validar campos obligatorios y unicidad del código.                          | Dado un docente con datos válidos, cuando se guarda, entonces el sistema lo registra sin duplicados.                              |

| **RF-02** | Registrar cursos              | Registrar curso con código único, nombre, créditos, sección y prerrequisitos.                                                                                       | Dado un curso válido, cuando se guarda, entonces queda disponible para planificación.                                             |

| **RF-03** | Registrar aulas               | Registrar aula con código único, capacidad (>0) y tipo.                                                                                                             | Dado un aula válida, cuando se guarda, entonces puede asignarse a horarios.                                                       |

| **RF-04** | Definir bloques horarios      | Crear, editar y eliminar bloques con día, hora inicio y fin, evitando traslapes.                                                                                    | Dado un bloque válido, cuando se registra, entonces queda disponible sin conflictos de horario.                                   |

| **RF-05** | Registrar restricciones       | Registrar restricciones obligatorias o deseables para docentes, cursos o aulas.                                                                                     | Dado una restricción válida, cuando se guarda, entonces se considera en la generación.                                            |

| **RF-06** | Validar datos previos         | Verificar existencia mínima de docentes, cursos, aulas y bloques antes de generar horarios.                                                                         | Dado datos incompletos, cuando se intenta generar, entonces el sistema bloquea la acción y muestra el faltante.                   |

| **RF-07** | Generar horarios              | Generar automáticamente un horario asignando docentes, aulas y bloques, cumpliendo el 100% de restricciones obligatorias y minimizando conflictos en las deseables. | Dado datos válidos, cuando se ejecuta la generación, entonces se produce un horario sin conflictos en restricciones obligatorias. |

| **RF-08** | Detectar conflictos           | Identificar conflictos de asignación (docente, aula, curso) indicando tipo y ubicación.                                                                             | Dado un horario, cuando se valida, entonces el sistema lista los conflictos detectados.                                           |

| **RF-09** | Priorizar restricciones       | Permitir clasificar restricciones y priorizar el cumplimiento total de las obligatorias durante la generación.                                                      | Dado restricciones mixtas, cuando se genera, entonces se cumplen todas las obligatorias.                                          |

| **RF-10** | Visualizar horarios           | Mostrar horarios por docente, curso, aula o bloque con filtros.                                                                                                     | Dado un horario generado, cuando se aplica un filtro, entonces se muestran las asignaciones correspondientes.                     |

| **RF-11** | Ajustar horarios manualmente  | Permitir modificar asignaciones validando en tiempo real la existencia de conflictos antes de confirmar.                                                            | Dado un cambio manual, cuando se guarda, entonces se valida y solo se acepta si no genera conflictos obligatorios.                |

| **RF-12** | Re-generar horarios           | Permitir ejecutar nuevamente la generación tras cambios en datos o restricciones.                                                                                   | Dado datos actualizados, cuando se re-genera, entonces se obtiene un nuevo horario válido.                                        |

| **RF-13** | Consultar horarios            | Consultar horarios por estudiante, docente, curso o aula.                                                                                                           | Dado un filtro, cuando se consulta, entonces se muestran los resultados correspondientes.                                         |

| **RF-14** | Gestionar usuarios y roles    | Administrar usuarios y restringir acciones según rol (admin/coordinador/consulta).                                                                                  | Dado un usuario sin permiso, cuando intenta una acción restringida, entonces el sistema deniega el acceso.                        |

| **RF-15** | Registrar historial           | Almacenar cada ejecución de generación (fecha, usuario, parámetros y resultado).                                                                                    | Dado una generación ejecutada, cuando se consulta el historial, entonces aparece el registro.                                     |

| **RF-16** | Emitir reporte de incidencias | Generar un reporte cuando no exista solución válida indicando restricciones en conflicto.                                                                           | Dado restricciones incompatibles, cuando se intenta generar, entonces se emite un reporte de incidencias.                         |


### Requerimientos no funcionales

Los requerimientos no funcionales describen cómo debe comportarse el sistema y sus atributos de calidad. La consigna menciona especialmente rendimiento, escalabilidad, usabilidad, seguridad y mantenibilidad bajo ISO/IEC 25010.

| **Categoría arc42**        | **Atributo**                                                                         | **Requerimiento Cuantificable**                                          | **Justificación**                         |

| **Rendimiento**            | Tiempo de consulta                                                                   | Consultas de horario ≤ 2 s con hasta 500 registros.                      | Permite validar horarios sin demoras.     |

| Tiempo de generación       | Generación ≤ 60 s para 100 cursos, 50 docentes y 40 aulas (escenario de prueba PMV). | Debe ser más rápido que el proceso manual.                               |

| **Disponibilidad**         | Operatividad                                                                         | Disponibilidad ≥ 95% durante pruebas.                                    | Permite demostrar y validar el sistema.   |

| **Seguridad**              | Control de acceso                                                                    | 100% de operaciones críticas requieren autenticación y rol.              | Evita cambios no autorizados en horarios. |

| Protección de credenciales | Contraseñas almacenadas con hash seguro (no texto plano).                            | Protege datos sensibles.                                                 |

| **Integridad**             | Datos únicos                                                                         | 0 duplicados en códigos de docentes, cursos y aulas.                     | Evita inconsistencias en la generación.   |

| **Usabilidad**             | Mensajes de error                                                                    | 100% de errores indican campo afectado y acción correctiva.              | Facilita el uso del sistema.              |

| **Compatibilidad**         | Navegadores                                                                          | Compatible con últimas 2 versiones de Chrome, Edge y Firefox.            | Uso en entornos académicos reales.        |

| **Mantenibilidad**         | Modularidad                                                                          | Sistema organizado en módulos (frontend, backend, lógica de generación). | Facilita mantenimiento                    |

| Trazabilidad               | 100% de cambios vinculados a commits o issues en repositorio.                        | Permite seguimiento del desarrollo.                                      |

| **Escalabilidad**          | Crecimiento                                                                          | Soporta el doble de datos con degradación aceptable de rendimiento.      | Mantiene utilidad ante crecimiento.       |

| **Accesibilidad**          | Interfaz                                                                             | Cumple criterios básicos WCAG 2.1 nivel A.                               | Mejora acceso para distintos usuarios.    |


# Criterios de desempeño

- 1. Claridad y profundidad en el análisis del problema, evidenciando identificación de ambigüedades y restricciones
  - Coherencia y solidez en la justificación del enfoque seleccionado
  - Calidad, estructura y formalidad de los documentos elaborados
  - Uso adecuado de herramientas (GitHub, documentación)
  - Nivel de organización, distribución de roles y trabajo colaborativo del equipo

**RÚBRICA DE EVALUACIÓN - SPRINT 0: INICIO DEL PROYECTO**

| **Criterio/Indicador**                                                                                                                                        | **Sobresaliente (3)**                                                                                                                                                        | **Suficiente (2)**                                                                                                       | **En desarrollo (1)**                                                                                   | **Insatisfactorio (0)**                                                                                           |

| **Análisis del problema: identificación clara del problema central, variables, stakeholders, ambigüedades y restricciones; coherencia del documento inicial** | Análisis completo, identifica ≥4 ambigüedades y ≥4 restricciones reales, incluye stakeholders y relaciones; documento<br><br>estructurado y coherente, aporta<br><br>mejoras | Identifica problema y elementos básicos, ≥2 ambigüedades y ≥2<br><br>restricciones; documento claro sin errores críticos | Identificación parcial del problema, <2 ambigüedades o restricciones; documento incompleto o poco claro | No identifica correctamente el problema, sin ambigüedades ni restricciones; documento<br><br>ausente o incorrecto |

| **Requerimientos: definición de requerimientos funcionales y no funcionales, claridad, trazabilidad y coherencia**                                            | ≥8 RF y ≥5 RNF bien definidos, claros, verificables y trazables al problema; sin inconsistencias                                                                             | ≥5 RF y ≥3 RNF adecuados, comprensibles, con mínima trazabilidad                                                         | RF/RNF incompletos, ambiguos o con inconsistencias; <5 RF o<br><br><3 RNF                               | No presenta requerimientos o son incorrectos                                                                      |

| **Selección del enfoque: justificación técnica del stack tecnológico y metodología**<br><br>**(Scrum), coherencia con el problema y restricciones**           | Justificación sólida, compara ≥2 alternativas, argumenta decisiones con criterios técnicos y restricciones                                                                   | Justificación básica del enfoque, sin comparación profunda pero coherente                                                | Justificación débil, poco alineada al problema o sin sustento técnico                                   | No justifica o la selección es incoherente                                                                        |

| **Declaración de la visión: claridad, alineación con el problema, definición de valor y alcance**                                                             | Visión clara, concisa, alineada al problema, define valor y alcance medible; aporta mejoras                                                                                  | Visión adecuada, alineada, sin errores críticos                                                                          | Visión ambigua o incompleta, con debilidades en valor o alcance                                         | No presenta o es incorrecta                                                                                       |

| **Project Charter: inclusión de objetivos, alcance, stakeholders, entregables, riesgos iniciales y**<br><br>**cronograma preliminar**                         | Documento completo con todos los elementos, bien estructurado, coherente y detallado                                                                                         | Incluye la mayoría de elementos, estructura adecuada sin errores críticos                                                | Faltan varios elementos o presenta inconsistencias                                                      | No presenta o es incorrecto                                                                                       |

| **Supuestos y restricciones: identificación, justificación y**                                                                                                | ≥5 supuestos y ≥5 restricciones<br><br>justificadas y coherentes con el                                                                                                      | ≥3 supuestos y ≥3<br><br>restricciones identificadas                                                                     | <3 supuestos o restricciones, o sin                                                                     | No presenta o es incorrecto                                                                                       |


| **Criterio/Indicador**                                                                                                                                                   | **Sobresaliente (3)**                                                                                        | **Suficiente (2)**                                                | **En desarrollo (1)**                                             | **Insatisfactorio (0)**                        |

| **coherencia con el problema**                                                                                                                                           | análisis                                                                                                     | sin errores críticos                                              | justificación clara                                               |                                                |

| **Equipo de proyecto: definición de roles, responsabilidades, normas de trabajo y organización colaborativa**                                                            | Roles claros (≥4), responsabilidades definidas, normas explícitas y coherentes con Scrum                     | Roles y responsabilidades básicos definidos, sin errores críticos | Roles poco claros o incompletos, sin normas definidas             | No presenta o es incorrecto                    |

| **Repositorio GitHub: creación, estructura inicial, control de versiones y acceso colaborativo**                                                                         | Repositorio funcional, estructura organizada, commits ≥5, uso de ramas, acceso compartido<br><br>verificado  | Repositorio creado, estructura básica, commits<br><br>≥2          | Repositorio incompleto, sin estructura clara o pocos commits (<2) | No presenta repositorio o no funciona          |

| **Calidad de documentación: estructura, redacción técnica, coherencia y uso de formato**                                                                                 | Documentos claros, coherentes, sin errores, uso adecuado de formato técnico                                  | Documentación comprensible, con mínimos errores                   | Documentación confusa, con errores frecuentes                     | Documentación ausente o incorrecta             |

| **Evidencia de problema complejo: identificación de ambigüedades, justificación de supuestos,**<br><br>**reconocimiento de restricciones y argumentación de decisiones** | Evidencia completa, argumenta decisiones con base en restricciones y supuestos, pensamiento crítico evidente | Evidencia básica, identifica y justifica parcialmente             | Evidencia limitada, sin argumentación sólida                      | No evidencia comprensión del problema complejo |

