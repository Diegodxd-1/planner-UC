# 📋 LISTA DE REQUERIMIENTOS (ENFOQUE SMART)

Siguiendo las directrices del docente, los requerimientos han sido formulados bajo el enfoque **SMART** (Específicos, Medibles, Alcanzables, Relevantes y Temporales) y estructurados para asegurar trazabilidad total.

### 🔹 1. Requerimientos Funcionales (RF)

| **ID** | **Requerimiento SMART** | **Descripción Técnica** | **Atributos SMART** |
| :--- | :--- | :--- | :--- |
| **RF-01** | **Gestión de Docentes** | Registrar, editar y listar docentes con código único, especialidad y disponibilidad. | **S**: Datos docentes. **M**: 100% de registros en DB. **T**: Sprint 1. |
| **RF-02** | **Gestión de Cursos** | Registrar cursos con créditos, prerrequisitos y secciones vinculadas. | **S**: Malla académica. **M**: Verificable por ID único. **T**: Sprint 1. |
| **RF-03** | **Gestión de Aulas** | Registrar aulas con capacidad de aforo y tipo (Teoría/Lab). | **S**: Recursos físicos. **M**: Validación aforo > 0. **T**: Sprint 1. |
| **RF-04** | **Configuración Temporal**| Definir franjas horarias de 60-90 min evitando traslapes base. | **S**: Estructura horaria. **M**: 0 traslapes en config. **T**: Sprint 2. |
| **RF-05** | **Motor de Optimización**| Generar un horario automático asignando el 100% de cursos obligatorios. | **S**: Algoritmo CSP. **M**: 0 conflictos críticos. **T**: Sprint 3. |
| **RF-06** | **Detector de Conflictos**| Identificar en tiempo real solapamientos de docente o aula. | **S**: QA de asignación. **M**: Alerta visual inmediata. **T**: Sprint 2. |
| **RF-07** | **Validación de Aforo** | Impedir la asignación de secciones que superen la capacidad del aula. | **S**: Restricción física. **M**: Bloqueo al exceder cupo. **T**: Sprint 2. |
| **RF-08** | **Edición Manual** | Permitir ajustes manuales con validación de reglas en < 1s. | **S**: Flexibilidad. **M**: Latencia < 1s por cambio. **T**: Sprint 3. |
| **RF-09** | **Jerarquía de Reglas** | Aplicar prioridad: 1. Obligatorias (No solape), 2. Deseables (Compactación). | **S**: Lógica CSP. **M**: 100% éxito Niv. 1. **T**: Sprint 3. |
| **RF-10** | **Reportes de Malla** | Visualizar el horario completo filtrado por docente, aula o curso. | **S**: Reporting. **M**: Filtros operativos 100%. **T**: Sprint 4. |

---

### ⚙️ 2. Requerimientos No Funcionales (RNF) - ISO 25010

| **ID** | **Atributo** | **Requerimiento Cuantificable (SMART)** | **Métrica de Validación** |
| :--- | :--- | :--- | :--- |
| **RNF-01** | **Performance** | El motor debe generar un horario base en **< 60 segundos** para 100 secciones. | Tiempo de respuesta del servidor. |
| **RNF-02** | **Latencia** | Las consultas administrativas deben responder en **< 2 segundos**. | Test de estrés (Postman/JMeter). |
| **RNF-03** | **Disponibilidad** | El sistema debe mantener una operatividad del **95%** en fase beta. | Logs de Uptime del servidor. |
| **RNF-04** | **Seguridad** | Las credenciales deben estar cifradas mediante **BCrypt con Salt**. | Auditoría de código/DB. |
| **RNF-05** | **Escalabilidad** | Soportar un incremento del **50% en la carga** con degradación < 20%. | Test de escalabilidad horizontal. |
| **RNF-06** | **Usabilidad** | Un usuario debe generar su primer horario tras **< 1h de capacitación**. | Evaluación de UX con usuario. |

---

### 🔗 3. Matriz de Trazabilidad y Prioridad

| **ID** | **Importancia** | **Relación con el Problema** | **Estado** |
| :--- | :---: | :--- | :---: |
| **RF-05** | Crítica | Automatización del proceso manual ineficiente. | Planificado |
| **RF-07** | Alta | Optimización del uso de infraestructura física. | Planificado |
| **RNF-01** | Alta | Reducción drástica del tiempo de planificación. | Planificado |
| **RNF-04** | Media | Protección de integridad de la malla académica. | Planificado |

---

> [!IMPORTANT]
> **Alineación ARC42:** Esta especificación se integra en la sección 1 (Metas) y sección 10 (Calidad) del documento maestro de arquitectura, asegurando consistencia técnica.
