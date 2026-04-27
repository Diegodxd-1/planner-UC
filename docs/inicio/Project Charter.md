# 📄 PROJECT CHARTER

## 🏫 Título del Proyecto
**SISTEMA DE GENERACIÓN ÓPTIMA DE HORARIOS ACADÉMICOS EN ENTORNOS DE CURRÍCULO FLEXIBLE**

---

### 📝 Carta del Proyecto
El presente proyecto tiene como finalidad desarrollar una solución que permita generar horarios académicos óptimos en entornos universitarios con currículo flexible. Este tipo de entorno presenta alta complejidad debido a la variabilidad en la matrícula, restricciones académicas y disponibilidad de recursos como docentes y aulas.

El sistema propuesto busca automatizar el proceso de asignación de horarios considerando múltiples restricciones y condiciones, permitiendo obtener soluciones válidas que eviten conflictos y optimicen la distribución de recursos.

Con ello, se espera mejorar la eficiencia en la planificación académica, reducir errores manuales y facilitar la toma de decisiones en instituciones educativas.

---

### 🎯 Objetivos

#### **1. Objetivo General**
Desarrollar un sistema web que permita generar horarios académicos optimizados en entornos universitarios con currículo flexible, reduciendo conflictos y mejorando la eficiencia del proceso de planificación.

#### **2. Objetivos Específicos**
*   Modelar el problema de generación de horarios considerando variables y restricciones académicas.
*   Diseñar un sistema que permita gestionar docentes, cursos, aulas y disponibilidades.
*   Implementar un algoritmo que genere horarios válidos sin conflictos.
*   Validar el sistema mediante pruebas funcionales.
*   Documentar el proceso y resultados del proyecto.

---

### 📦 Detalles del Proyecto

#### **Descripción del Producto**
El proyecto consiste en el desarrollo de un sistema que permita generar horarios académicos de forma automática, considerando múltiples restricciones como disponibilidad de docentes, aulas, cursos y estudiantes. El sistema ayudará a reducir conflictos, optimizar recursos y facilitar la planificación académica en universidades con currículo flexible.

#### **📋 Entregables Principales**
- Documento de análisis del problema
- Modelo formal del problema (variables, restricciones y supuestos)
- Documento de arquitectura y diseño de la solución
- Sistema funcional (PMV) de generación de horarios
- Casos de prueba y resultados de validación
- Documentación técnica del sistema (README + Markdown)
- Video demostrativo del funcionamiento

> [!NOTE]
> El sistema se desarrollará bajo un enfoque **PMV (Producto Mínimo Viable)**, priorizando únicamente las funcionalidades esenciales.

#### **🚫 El proyecto NO incluye**
- Implementación en sistemas reales de universidades
- Integración con sistemas institucionales existentes
- Infraestructura adicional
- Capacitación formal a usuarios finales
- Soporte posterior a la entrega del proyecto

#### **🛠️ Recursos Preasignados**
- Equipo de estudiantes de ingeniería de sistemas
- Computadoras personales
- Acceso a herramientas de desarrollo
- Tiempo asignado para desarrollo del proyecto
- Conocimiento básico del dominio académico

---

### 👥 Lista de Interesados (Stakeholders)

| **Nombre / Grupo** | **Rol** | **Responsabilidad / Interés** |
| :--- | :--- | :--- |
| **Equipo de desarrollo** | Desarrolladores | Analizar el problema, diseñar la solución, desarrollar el sistema y realizar pruebas. |
| **Docente del curso** | Supervisor | Guiar el desarrollo, evaluar el progreso y validar objetivos. |
| **Coordinador académico** | Usuario principal | Utilizar el sistema para generar y gestionar horarios de manera eficiente. |
| **Docentes universitarios** | Usuarios | Consultar horarios asignados y registrar disponibilidad. |
| **Estudiantes** | Usuarios finales | Consultar horarios generados para su organización académica. |
| **Universidad** | Beneficiario | Mejorar la planificación académica y optimizar recursos físicos y humanos. |

---

### 📅 Resumen del Cronograma de Hitos

| **Hito** | **Descripción** | **Fecha** |
| :--- | :--- | :--- |
| **Hito 1** | Análisis del problema y requerimientos | Semana 1 - Semana 2 |
| **Hito 2** | Diseño de la solución | Semana 3 - Semana 4 |
| **Hito 3** | Desarrollo del sistema | Semana 5 - Semana 11 |
| **Hito 4** | Pruebas y validación | Semana 11 - Semana 15 |
| **Hito 5** | Entrega final del proyecto | Semana 16 |

---

### ⚠️ Consideraciones del Proyecto

#### **Riesgos de Alto Nivel**
- Alta complejidad del problema debido a la combinación de múltiples restricciones.
- Posibles cambios en los requerimientos durante el desarrollo bajo enfoque ágil.
- Limitaciones de tiempo (16 semanas) que afectan el alcance del sistema.
- Dificultad para obtener soluciones óptimas en tiempo computacional aceptable.
- Falta de experiencia del equipo en algoritmos de optimización.
- Disponibilidad limitada de datos reales para validación.

#### **✅ Criterios de Aceptación**
- El sistema genera un horario académico completo en un tiempo menor o igual a **5 minutos**.
- El horario generado no presenta conflictos de asignación de docentes, aulas o cursos.
- Se validan al menos el **100% de las restricciones críticas** definidas.
- El sistema permite registrar y gestionar datos de docentes, cursos y aulas.
- El sistema funciona correctamente en al menos el **90% de los casos de prueba**.
- Entrega de documentación completa conforme a lo solicitado.

#### **📌 Suposiciones**
- Datos representativos disponibles para modelar el problema.
- Usuarios proporcionan información válida sobre disponibilidad.
- Disponibilidad continua del equipo durante las 16 semanas.
- Las restricciones principales no cambiarán drásticamente.

#### **🛑 Restricciones**
- Tiempo limitado de desarrollo (16 semanas).
- Recursos técnicos limitados (herramientas gratuitas).
- Desarrollo realizado únicamente por estudiantes.
- Sin integración a sistemas reales institucionales.
- Alcance limitado a un **Producto Mínimo Viable (PMV)**.
