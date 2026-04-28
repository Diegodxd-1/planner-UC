# 📋 LISTA PRELIMINAR DE REQUERIMIENTOS (ENFOQUE SMART)

Siguiendo las directrices del docente, los requerimientos han sido validados bajo el enfoque **SMART** (Específicos, Medibles, Alcanzables, Relevantes y Temporales).

### 🔹 Requerimientos Funcionales
| **ID** | **Nombre (SMART)** | **Descripción Técnica** | **Validación SMART** |
| :--- | :--- | :--- | :--- |
| **RF-01** | Registrar docentes | Registro con código único, especialidad y disponibilidad horaria. | **S**: Datos docentes. **M**: 100% en DB. **T**: Sprint 1. |
| **RF-02** | Registrar cursos | Registro con código único, créditos, sección y prerrequisitos. | **S**: Malla académica. **M**: ID único. **T**: Sprint 1. |
| **RF-03** | Registrar aulas | Registro con capacidad (>0) y tipo (Lab/Teoría). | **S**: Recursos físicos. **M**: Aforo > 0. **T**: Sprint 1. |
| **RF-04** | Bloques horarios | Crear bloques con día y hora inicio/fin sin traslapes iniciales. | **S**: Estructura temporal. **M**: 0 traslapes. **T**: Sprint 2. |
| **RF-05** | Registrar restricciones| Registro de reglas obligatorias (Hard) para el motor. | **S**: Lógica de reglas. **M**: Tabla de reglas. **T**: Sprint 2. |
| **RF-06** | Validar datos previos | Bloquear generación si faltan datos base (docentes/aulas). | **S**: QA de entrada. **M**: Error al faltar datos. **T**: Sprint 2. |
| **RF-07** | Generar horarios | Algoritmo de asignación automática de docentes y aulas. | **S**: Algoritmo CSP. **M**: 0 conflictos Hard. **T**: Sprint 3. |
| **RF-08** | Detectar conflictos | Identificación en tiempo real de traslapes en el horario. | **S**: Verificación. **M**: Reporte de errores. **T**: Sprint 2. |
| **RF-09** | Priorizar reglas | Cumplimiento del 100% de restricciones obligatorias. | **S**: Jerarquía. **M**: 100% éxito Niv. 1. **T**: Sprint 3. |
| **RF-10** | Visualizar horarios | Vistas filtradas por docente, curso o aula. | **S**: UX Reporting. **M**: Filtros operativos. **T**: Sprint 4. |

---

### ⚙️ Requerimientos No Funcionales
| **Atributo** | **Requerimiento Cuantificable** | **Justificación (SMART)** |
| :--- | :--- | :--- |
| **Rendimiento** | Consultas de horario **≤ 2 s** con 500 registros. | **M**: Latencia medible. **R**: Fluidez operativa. |
| **Eficiencia** | Generación de horario base **≤ 60 s**. | **M**: Cronómetro. **R**: Mejora proceso manual. |
| **Disponibilidad**| Operatividad **≥ 95%** durante el proyecto. | **M**: Logs de Uptime. **T**: 16 semanas. |
| **Seguridad** | 100% de operaciones críticas requieren login. | **S**: Control acceso. **R**: Integridad de datos. |
| **Seguridad** | Contraseñas con **Hash seguro (BCrypt)**. | **S**: Cifrado. **R**: Protección de identidad. |
| **Escalabilidad** | Soporta el doble de datos con degradación < 20%. | **M**: Pruebas de carga. **R**: Viabilidad futura. |

---

### 🔗 Matriz de Trazabilidad
| **ID** | **Meta del Proyecto** | **Restricción Asociada** | **Prioridad** |
| :--- | :--- | :--- | :---: |
| **RF-07** | Automatización | Tiempo de desarrollo (16 sem) | Alta |
| **RF-09** | Integridad Académica | Disponibilidad docente y aulas | Alta |
| **RNF-02** | Eficiencia | Proceso manual lento | Media |

> [!IMPORTANT]
> Esta documentación sigue las directrices del estándar **ARC42** para asegurar claridad y consistencia.
