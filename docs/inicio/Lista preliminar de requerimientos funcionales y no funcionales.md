# 📋 LISTA PRELIMINAR DE REQUERIMIENTOS (ENFOQUE SMART)

Siguiendo las directrices del docente, los requerimientos han sido validados bajo el enfoque **SMART** (Específicos, Medibles, Alcanzables, Relevantes y Temporales). Se mantienen los 16 requerimientos originales con su respectiva validación técnica.

### 🔹 Requerimientos Funcionales (RF)
| **ID** | **Nombre del Requerimiento** | **Descripción Técnica** | **Atributos SMART** |
| :--- | :--- | :--- | :--- |
| **RF-01** | Registrar docentes | Registro con código único, especialidad y disponibilidad. | **S**: Datos docentes. **M**: 100% en DB. **T**: S1. |
| **RF-02** | Registrar cursos | Registro con créditos, secciones y prerrequisitos. | **S**: Malla académica. **M**: ID único. **T**: S1. |
| **RF-03** | Registrar aulas | Registro con capacidad (>0) y tipo (Lab/Teoría). | **S**: Recursos físicos. **M**: Aforo > 0. **T**: S1. |
| **RF-04** | Bloques horarios | Definir franjas horarias de 90 min sin traslapes iniciales. | **S**: Estructura temporal. **M**: 0 traslapes. **T**: S2. |
| **RF-05** | Registrar restricciones| Registro de reglas obligatorias (Hard) para el motor. | **S**: Lógica de reglas. **M**: Tabla de reglas. **T**: S2. |
| **RF-06** | Validar datos previos | Bloquear generación si faltan datos base (docentes/aulas). | **S**: QA de entrada. **M**: Error al faltar datos. **T**: S2. |
| **RF-07** | Generar horarios | Algoritmo de asignación automática de docentes y aulas. | **S**: Algoritmo CSP. **M**: 0 conflictos Hard. **T**: S3. |
| **RF-08** | Detectar conflictos | Identificación en tiempo real de traslapes en el horario. | **S**: Verificación. **M**: Reporte de errores. **T**: S2. |
| **RF-09** | Priorizar restricciones| Cumplimiento del 100% de restricciones obligatorias. | **S**: Jerarquía. **M**: 100% éxito Niv. 1. **T**: S3. |
| **RF-10** | Visualizar horarios | Vistas filtradas por docente, curso o aula. | **S**: UX Reporting. **M**: Filtros operativos. **T**: S4. |
| **RF-11** | Ajuste manual | Modificación manual con validación de reglas en < 1s. | **S**: Edición fluida. **M**: Latencia < 1s. **T**: S3. |
| **RF-12** | Re-generar horarios | Nueva ejecución tras cambios en datos o restricciones. | **S**: Iteración. **M**: Nuevo horario válido. **T**: S3. |
| **RF-13** | Consultar horarios | Búsqueda específica por ciclo, docente o ambiente. | **S**: Consultas. **M**: Datos precisos. **T**: S4. |
| **RF-14** | Gestión de roles | Control de acceso según perfil (Admin/Coordinador). | **S**: Seguridad. **M**: Bloqueo de no-autorizados. **T**: S4. |
| **RF-15** | Registro historial | Bitácora de versiones de horarios generados. | **S**: Auditoría. **M**: Log de cambios. **T**: S4. |
| **RF-16** | Reporte incidencias | Emisión de informe técnico si no existe solución válida. | **S**: Feedback. **M**: Informe detallado. **T**: S4. |

---

### ⚙️ Requerimientos No Funcionales (RNF)
| **ID** | **Atributo** | **Requerimiento Cuantificable** | **Justificación (SMART)** |
| :--- | :--- | :--- | :--- |
| **RNF-01** | **Rendimiento** | Consultas de horario **≤ 2 s** con 500 registros. | **M**: Latencia medible. **R**: Fluidez operativa. |
| **RNF-02** | **Eficiencia** | Generación de horario base **≤ 60 s**. | **M**: Cronómetro. **R**: Mejora proceso manual. |
| **RNF-03** | **Disponibilidad**| Operatividad **≥ 95%** durante el proyecto. | **M**: Logs de Uptime. **T**: 16 semanas. |
| **RNF-04** | **Seguridad** | 100% de operaciones críticas requieren login. | **S**: Control acceso. **R**: Integridad de datos. |
| **RNF-05** | **Seguridad** | Contraseñas con **Hash seguro (BCrypt)**. | **S**: Cifrado. **R**: Protección de identidad. |
| **RNF-06** | **Escalabilidad** | Soporta el doble de datos con degradación < 20%. | **M**: Pruebas de carga. **R**: Viabilidad futura. |

---

### 🔗 Matriz de Trazabilidad
| **ID** | **Meta del Proyecto** | **Restricción Asociada** | **Prioridad** |
| :--- | :--- | :--- | :---: |
| **RF-07** | Automatización | Tiempo de desarrollo (16 sem) | Alta |
| **RF-09** | Integridad Académica | Disponibilidad docente y aulas | Alta |
| **RNF-02** | Eficiencia | Proceso manual lento | Media |

> [!IMPORTANT]
> Esta documentación sigue las directrices del estándar **ARC42** para asegurar claridad y consistencia.
