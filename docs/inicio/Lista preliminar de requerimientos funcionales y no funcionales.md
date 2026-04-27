# 📋 LISTA PRELIMINAR DE REQUERIMIENTOS

### 🔹 Requerimientos Funcionales
Los requerimientos funcionales describen las acciones que el sistema debe ejecutar para satisfacer las necesidades del usuario.

| **ID** | **Nombre del Requerimiento** | **Descripción Técnica** | **Criterio de Aceptación** |
| :--- | :--- | :--- | :--- |
| **RF-01** | Registrar docentes | Registro con código único, nombre, disponibilidad y cursos asignables. | Dado un docente válido, el sistema lo registra sin duplicados. |
| **RF-02** | Registrar cursos | Registro con código único, nombre, créditos, sección y prerrequisitos. | El curso queda disponible para la planificación. |
| **RF-03** | Registrar aulas | Registro con código único, capacidad (>0) y tipo. | El aula puede asignarse a bloques horarios. |
| **RF-04** | Bloques horarios | Crear, editar y eliminar bloques con día, hora inicio y fin. | Bloques disponibles sin traslapes iniciales. |
| **RF-05** | Registrar restricciones | Registro de reglas obligatorias o deseables para el motor. | La restricción se considera en la generación automática. |
| **RF-06** | Validar datos previos | Verificar existencia mínima de datos antes de generar. | Bloquea la generación si faltan datos base. |
| **RF-07** | Generar horarios | Algoritmo de asignación automática de docentes, aulas y bloques. | Horario sin conflictos en restricciones obligatorias. |
| **RF-08** | Detectar conflictos | Identificación de traslapes en docentes, aulas o cursos. | El sistema lista detalladamente los conflictos. |
| **RF-09** | Priorizar restricciones | Clasificación y prioridad de cumplimiento de reglas. | Se cumplen el 100% de las reglas obligatorias. |
| **RF-10** | Visualizar horarios | Vistas por docente, curso, aula o bloque con filtros. | Los filtros muestran la información correcta. |
| **RF-11** | Ajuste manual | Modificación manual con validación de conflictos en tiempo real. | No permite guardar si genera conflictos críticos. |
| **RF-12** | Re-generar horarios | Nueva ejecución tras cambios en datos o restricciones. | Se obtiene un nuevo horario válido y actualizado. |
| **RF-13** | Consultar horarios | Consultas específicas por estudiante, docente o aula. | Resultados precisos según los filtros aplicados. |
| **RF-14** | Gestión de roles | Administración de permisos según rol (Admin/Coordinador). | Deniega acciones a usuarios sin permisos. |
| **RF-15** | Registro historial | Almacenamiento de cada ejecución (fecha, usuario, resultado). | El registro aparece en la bitácora del sistema. |
| **RF-16** | Reporte incidencias | Emisión de reporte si no existe solución válida. | Indica qué restricciones causan el bloqueo. |

---

### ⚙️ Requerimientos No Funcionales
Atributos de calidad del sistema basados en el estándar ISO/IEC 25010.

| **Categoría** | **Atributo** | **Requerimiento Cuantificable** | **Justificación** |
| :--- | :--- | :--- | :--- |
| **Rendimiento** | Tiempo consulta | Consultas de horario **≤ 2 s** con 500 registros. | Fluidez en la validación de horarios. |
| **Rendimiento** | Tiempo generación | Generación **≤ 60 s** para escenario PMV. | Eficiencia frente al proceso manual. |
| **Disponibilidad**| Operatividad | Disponibilidad **≥ 95%** durante el proyecto. | Garantía de acceso para validaciones. |
| **Seguridad** | Control acceso | 100% de operaciones críticas requieren login. | Integridad de la planificación académica. |
| **Seguridad** | Protección datos | Contraseñas con **Hash seguro** (no texto plano). | Protección de la identidad de usuarios. |
| **Integridad** | Unicidad | 0 duplicados en códigos base. | Prevención de inconsistencias lógicas. |
| **Usabilidad** | Feedback | Errores indican campo y acción correctiva. | Facilidad de uso para administrativos. |
| **Compatibilidad**| Navegadores | Chrome, Edge y Firefox (últimas 2 versiones). | Estándar de uso institucional. |
| **Mantenibilidad**| Modularidad | Organización en módulos (Front, Back, Lógica). | Facilita el mantenimiento futuro. |
| **Mantenibilidad**| Trazabilidad | 100% de cambios vinculados a commits. | Seguimiento formal del desarrollo. |
| **Escalabilidad** | Crecimiento | Soporta el doble de datos con degradación mínima. | Viabilidad ante crecimiento de la oferta. |
| **Accesibilidad** | Interfaz | Cumplimiento básico WCAG 2.1 nivel A. | Acceso inclusivo para todos los usuarios. |

---

### 🏆 Criterios de Desempeño
1.  Claridad y profundidad en el análisis del problema.
2.  Coherencia y solidez en la justificación del enfoque.
3.  Calidad, estructura y formalidad de los documentos.
4.  Uso adecuado de herramientas (GitHub, documentación).
5.  Nivel de organización y trabajo colaborativo.

---

### 📊 Rúbrica de Evaluación (Sprint 0)

| **Criterio** | **Sobresaliente (3)** | **Suficiente (2)** | **En Desarrollo (1)** |
| :--- | :--- | :--- | :--- |
| **Análisis** | Análisis completo, identifica ≥4 ambigüedades. | Identifica elementos básicos, ≥2 ambigüedades. | Identificación parcial. |
| **Requerimientos** | ≥8 RF y ≥5 RNF claros y trazables. | ≥5 RF y ≥3 RNF adecuados. | Incompletos o ambiguos. |
| **Enfoque** | Justificación sólida, compara alternativas. | Justificación básica, coherente. | Justificación débil. |
| **Visión** | Clara, concisa, define valor y alcance. | Adecuada, sin errores críticos. | Ambigua o incompleta. |
| **Charter** | Documento completo y detallado. | Incluye la mayoría de elementos. | Faltan elementos. |
| **Supuestos** | ≥5 supuestos y restricciones justificados. | ≥3 supuestos y restricciones básicos. | <3 elementos. |
| **Equipo** | Roles claros (≥4) y normas explícitas. | Roles básicos definidos. | Roles poco claros. |
| **GitHub** | Funcional, ordenado, commits frecuentes. | Creado, estructura básica, ≥2 commits. | Incompleto o desordenado. |
| **Calidad Doc.** | Claros, coherentes, formato técnico. | Comprensible, mínimos errores. | Confusa o con errores. |
| **Complejidad** | Evidencia sólida de razonamiento crítico. | Evidencia básica de análisis. | Evidencia limitada. |
