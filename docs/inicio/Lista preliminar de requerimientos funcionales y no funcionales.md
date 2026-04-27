# LISTA PRELIMINAR DE REQUERIMIENTOS FUNCIONALES Y NO FUNCIONALES

### Requerimientos funcionales

Los requerimientos funcionales describen lo que el sistema debe hacer.

| **ID** | **Nombre del Requerimiento** | **Descripción Técnica** | **Criterio de Aceptación** |
| :--- | :--- | :--- | :--- |
| **RF-01** | Registrar docentes | Registrar docente con código único, nombre, disponibilidad horaria y cursos asignables. Validar campos obligatorios y unicidad del código. | Dado un docente con datos válidos, cuando se guarda, entonces el sistema lo registra sin duplicados. |
| **RF-02** | Registrar cursos | Registrar curso con código único, nombre, créditos, sección y prerrequisitos. | Dado un curso válido, cuando se guarda, entonces queda disponible para planificación. |
| **RF-03** | Registrar aulas | Registrar aula con código único, capacidad (>0) y tipo. | Dado un aula válida, cuando se guarda, entonces puede asignarse a horarios. |
| **RF-04** | Definir bloques horarios | Crear, editar y eliminar bloques con día, hora inicio y fin, evitando traslapes. | Dado un bloque válido, cuando se registra, entonces queda disponible sin conflictos de horario. |
| **RF-05** | Registrar restricciones | Registrar restricciones obligatorias o deseables para docentes, cursos o aulas. | Dado una restricción válida, cuando se guarda, entonces se considera en la generación. |
| **RF-06** | Validar datos previos | Verificar existencia mínima de docentes, cursos, aulas y bloques antes de generar horarios. | Dado datos incompletos, cuando se intenta generar, entonces el sistema bloquea la acción y muestra el faltante. |
| **RF-07** | Generar horarios | Generar automáticamente un horario asignando docentes, aulas y bloques, cumpliendo el 100% de restricciones obligatorias y minimizando conflictos en las deseables. | Dado datos válidos, cuando se ejecuta la generación, entonces se produce un horario sin conflictos en restricciones obligatorias. |
| **RF-08** | Detectar conflictos | Identificar conflictos de asignación (docente, aula, curso) indicando tipo y ubicación. | Dado un horario, cuando se valida, entonces el sistema lista los conflictos detectados. |
| **RF-09** | Priorizar restricciones | Permitir clasificar restricciones y priorizar el cumplimiento total de las obligatorias durante la generación. | Dado restricciones mixtas, cuando se genera, entonces se cumplen todas las obligatorias. |
| **RF-10** | Visualizar horarios | Mostrar horarios por docente, curso, aula o bloque con filtros. | Dado un horario generado, cuando se aplica un filtro, entonces se muestran las asignaciones correspondientes. |
| **RF-11** | Ajustar horarios manualmente | Permitir modificar asignaciones validando en tiempo real la existencia de conflictos antes de confirmar. | Dado un cambio manual, cuando se guarda, entonces se valida y solo se acepta si no genera conflictos obligatorios. |
| **RF-12** | Re-generar horarios | Permitir ejecutar nuevamente la generación tras cambios en datos o restricciones. | Dado datos actualizados, cuando se re-genera, entonces se obtiene un nuevo horario válido. |
| **RF-13** | Consultar horarios | Consultar horarios por estudiante, docente, curso o aula. | Dado un filtro, cuando se consulta, entonces se muestran los resultados correspondientes. |
| **RF-14** | Gestionar usuarios y roles | Administrar usuarios y restringir acciones según rol (admin/coordinador/consulta). | Dado un usuario sin permiso, cuando intenta una acción restringida, entonces el sistema deniega el acceso. |
| **RF-15** | Registrar historial | Almacenar cada ejecución de generación (fecha, usuario, parámetros y resultado). | Dado una generación ejecutada, cuando se consulta el historial, entonces aparece el registro. |
| **RF-16** | Emitir reporte de incidencias | Generar un reporte cuando no exista solución válida indicando restricciones en conflicto. | Dado restricciones incompatibles, cuando se intenta generar, entonces se emite un reporte de incidencias. |

### Requerimientos no funcionales

Los requerimientos no funcionales describen cómo debe comportarse el sistema y sus atributos de calidad. La consigna menciona especialmente rendimiento, escalabilidad, usabilidad, seguridad y mantenibilidad bajo ISO/IEC 25010.

| **Categoría arc42** | **Atributo** | **Requerimiento Cuantificable** | **Justificación** |
| :--- | :--- | :--- | :--- |
| **Rendimiento** | Tiempo de consulta | Consultas de horario ≤ 2 s con hasta 500 registros. | Permite validar horarios sin demoras. |
| **Rendimiento** | Tiempo de generación | Generación ≤ 60 s para 100 cursos, 50 docentes y 40 aulas (escenario de prueba PMV). | Debe ser más rápido que el proceso manual. |
| **Disponibilidad** | Operatividad | Disponibilidad ≥ 95% durante pruebas. | Permite demostrar y validar el sistema. |
| **Seguridad** | Control de acceso | 100% de operaciones críticas requieren autenticación y rol. | Evita cambios no autorizados en horarios. |
| **Seguridad** | Protección de credenciales | Contraseñas almacenadas con hash seguro (no texto plano). | Protege datos sensibles. |
| **Integridad** | Datos únicos | 0 duplicados en códigos de docentes, cursos y aulas. | Evita inconsistencias en la generación. |
| **Usabilidad** | Mensajes de error | 100% de errores indican campo afectado y acción correctiva. | Facilita el uso del sistema. |
| **Compatibilidad** | Navegadores | Compatible con últimas 2 versiones de Chrome, Edge y Firefox. | Uso en entornos académicos reales. |
| **Mantenibilidad** | Modularidad | Sistema organizado en módulos (frontend, backend, lógica de generación). | Facilita mantenimiento |
| **Mantenibilidad** | Trazabilidad | 100% de cambios vinculados a commits o issues en repositorio. | Permite seguimiento del desarrollo. |
| **Escalabilidad** | Crecimiento | Soporta el doble de datos con degradación aceptable de rendimiento. | Mantiene utilidad ante crecimiento. |
| **Accesibilidad** | Interfaz | Cumple criterios básicos WCAG 2.1 nivel A. | Mejora acceso para distintos usuarios. |

# Criterios de desempeño

- 1. Claridad y profundidad en el análisis del problema, evidenciando identificación de ambigüedades y restricciones
- 2. Coherencia y solidez en la justificación del enfoque seleccionado
- 3. Calidad, estructura y formalidad de los documentos elaborados
- 4. Uso adecuado de herramientas (GitHub, documentación)
- 5. Nivel de organización, distribución de roles y trabajo colaborativo del equipo

**RÚBRICA DE EVALUACIÓN - SPRINT 0: INICIO DEL PROYECTO**

| **Criterio/Indicador** | **Sobresaliente (3)** | **Suficiente (2)** | **En desarrollo (1)** | **Insatisfactorio (0)** |
| :--- | :--- | :--- | :--- | :--- |
| **Análisis del problema** | Análisis completo, identifica ≥4 ambigüedades y ≥4 restricciones reales. | Identifica problema y elementos básicos, ≥2 ambigüedades y ≥2 restricciones. | Identificación parcial del problema, <2 ambigüedades o restricciones. | No identifica correctamente el problema. |
| **Requerimientos** | ≥8 RF y ≥5 RNF bien definidos, claros, verificables y trazables. | ≥5 RF y ≥3 RNF adecuados, comprensibles. | RF/RNF incompletos, ambiguos o con inconsistencias. | No presenta requerimientos. |
| **Selección del enfoque** | Justificación sólida, compara ≥2 alternativas. | Justificación básica del enfoque. | Justificación débil. | No justifica. |
| **Declaración de la visión** | Visión clara, concisa, alineada al problema. | Visión adecuada, alineada. | Visión ambigua o incompleta. | No presenta o es incorrecta. |
| **Project Charter** | Documento completo con todos los elementos. | Incluye la mayoría de elementos. | Faltan varios elementos. | No presenta o es incorrecto. |
| **Supuestos y restricciones** | ≥5 supuestos y ≥5 restricciones justificadas. | ≥3 supuestos y ≥3 restricciones identificadas. | <3 supuestos o restricciones. | No presenta o es incorrecto. |
| **Equipo de proyecto** | Roles claros (≥4), responsabilidades definidas, normas explícitas. | Roles y responsabilidades básicos definidos. | Roles poco claros o incompletos. | No presenta o es incorrecto. |
| **Repositorio GitHub** | Repositorio funcional, estructura organizada, commits ≥5, uso de ramas. | Repositorio creado, estructura básica, commits ≥2. | Repositorio incompleto, sin estructura clara. | No presenta repositorio. |
| **Calidad de documentación** | Documentos claros, coherentes, sin errores. | Documentación comprensible, con mínimos errores. | Documentación confusa, con errores frecuentes. | Documentación ausente. |
| **Evidencia de problema complejo** | Evidencia completa, argumenta decisiones con base en restricciones. | Evidencia básica, identifica y justifica parcialmente. | Evidencia limitada, sin argumentación sólida. | No evidencia comprensión. |
