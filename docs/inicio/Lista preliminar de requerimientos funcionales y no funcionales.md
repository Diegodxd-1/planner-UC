# 📋 LISTA DE REQUERIMIENTOS (RF & RNF)

## 🔹 Requerimientos Funcionales (RF)
Definen las acciones específicas que el sistema debe ejecutar.

| ID | Requerimiento | Descripción Técnica | Criterio de Aceptación |
| :--- | :--- | :--- | :--- |
| **RF-01** | Registrar docentes | Registro con código único, disponibilidad y cursos asignables. | El sistema impide duplicados de código. |
| **RF-02** | Registrar cursos | Registro con código único, créditos y prerrequisitos. | El curso queda disponible para la planificación. |
| **RF-03** | Registrar aulas | Registro con código único, capacidad y tipo. | El aula puede asignarse a bloques horarios. |
| **RF-04** | Bloques horarios | Crear/editar bloques (día, hora inicio/fin) sin traslapes. | Bloques disponibles para asignación. |
| **RF-05** | Restricciones | Registrar reglas obligatorias o deseables. | El motor las considera en la generación. |
| **RF-06** | Validación previa | Verificar datos mínimos antes de procesar. | Bloquea la generación si faltan datos base. |
| **RF-07** | Generar horarios | Motor de optimización para asignación automática. | Horario sin conflictos en reglas obligatorias. |
| **RF-08** | Detectar conflictos | Identificación visual de traslapes de asignación. | El sistema lista y marca los conflictos. |
| **RF-10** | Visualizar horarios | Vistas por docente, aula o curso con filtros. | Los filtros muestran la data correspondiente. |
| **RF-11** | Ajuste manual | Modificación manual con validación en tiempo real. | No permite guardar si genera conflictos críticos. |
| **RF-14** | Gestión de roles | Control de acceso según rol (Admin/Coordinador). | Deniega acceso a funciones no permitidas. |

---

## ⚙️ Requerimientos No Funcionales (RNF)
Atributos de calidad basados en el estándar ISO/IEC 25010.

| Categoría | Atributo | Especificación Cuantificable | Justificación |
| :--- | :--- | :--- | :--- |
| **Rendimiento** | Tiempo Respuesta | Consultas de horario **≤ 2 segundos**. | Fluidez en la experiencia de usuario. |
| **Rendimiento** | Generación | Procesamiento completo en **≤ 60 segundos**. | Eficiencia frente al proceso manual. |
| **Disponibilidad**| Operatividad | Disponibilidad del sistema **≥ 95%**. | Continuidad del servicio. |
| **Seguridad** | Autenticación | 100% de operaciones críticas bajo login. | Integridad de la planificación académica. |
| **Seguridad** | Cifrado | Contraseñas almacenadas con **Hash seguro**. | Protección de datos sensibles. |
| **Usabilidad** | Feedback | Errores con mensajes de acción correctiva. | Facilidad de aprendizaje y uso. |
| **Compatibilidad**| Navegadores | Chrome, Edge y Firefox (últimas 2 versiones). | Estándar en entornos institucionales. |
| **Modularidad** | Estructura | Separación clara de Front, Back y Algoritmo. | Facilidad de mantenimiento evolutivo. |

---

## 🏆 Criterios de Desempeño y Calidad
1. **Profundidad del Análisis:** Identificación de restricciones reales y ambigüedades.
2. **Justificación Técnica:** Coherencia del stack tecnológico con la solución.
3. **Organización del Equipo:** Distribución clara de roles y uso de metodologías ágiles.

---

## 📊 Rúbrica de Evaluación (Sprint 0)

| Criterio | Sobresaliente (3) | Suficiente (2) | En Desarrollo (1) |
| :--- | :--- | :--- | :--- |
| **Análisis** | Identifica ≥4 ambigüedades y ≥4 restricciones. | Identifica ≥2 de cada uno. | Identificación parcial. |
| **Requerimientos**| ≥8 RF y ≥5 RNF claros y trazables. | ≥5 RF y ≥3 RNF adecuados. | Requerimientos ambiguos. |
| **Enfoque** | Justificación sólida con comparación de alternativas. | Justificación básica. | Justificación débil. |
| **Visión** | Valor y alcance medible y alineado. | Visión adecuada. | Visión incompleta. |
| **Equipo** | Roles claros y normas explícitas (Scrum). | Roles básicos definidos. | Roles poco claros. |
| **Repositorio** | Commits frecuentes, uso de ramas y orden. | Estructura básica. | Pocos commits o desorden. |
