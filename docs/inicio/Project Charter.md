# 📜 PROJECT CHARTER

## 🏫 Título del Proyecto
**SISTEMA DE GENERACIÓN ÓPTIMA DE HORARIOS ACADÉMICOS EN ENTORNOS DE CURRÍCULO FLEXIBLE**

---

## 📝 Carta del Proyecto
El presente proyecto tiene como finalidad desarrollar una solución que permita generar horarios académicos óptimos en entornos universitarios con currículo flexible. Este tipo de entorno presenta alta complejidad debido a la variabilidad en la matrícula, restricciones académicas y disponibilidad de recursos como docentes y aulas.

El sistema propuesto busca automatizar el proceso de asignación de horarios considerando múltiples restricciones y condiciones, permitiendo obtener soluciones válidas que eviten conflictos y optimicen la distribución de recursos.

---

## 🎯 Objetivos

### **1. Objetivo General**
Desarrollar un sistema web que permita generar horarios académicos optimizados en entornos universitarios con currículo flexible, reduciendo conflictos y mejorando la eficiencia del proceso de planificación.

### **2. Objetivos Específicos**
- [x] Modelar el problema de generación de horarios considerando variables y restricciones académicas.
- [ ] Diseñar un sistema que permita gestionar docentes, cursos, aulas y disponibilidades.
- [ ] Implementar un algoritmo que genere horarios válidos sin conflictos.
- [ ] Validar el sistema mediante pruebas funcionales.
- [ ] Documentar el proceso y resultados del proyecto.

---

## 📦 Detalles del Proyecto

### **🚀 Descripción del producto / Entregables**
El proyecto consiste en el desarrollo de un sistema que permita generar horarios académicos de forma automática, considerando múltiples restricciones como disponibilidad de docentes, aulas, cursos y estudiantes.

**Principales Entregables:**
- 📄 Documento de análisis del problema.
- 📐 Modelo formal del problema (variables, restricciones y supuestos).
- 🏗️ Documento de arquitectura y diseño de la solución.
- 💻 Sistema funcional (PMV) de generación de horarios.
- 🧪 Casos de prueba y resultados de validación.
- 📚 Documentación técnica del sistema (README + Markdown).
- 🎥 Video demostrativo del funcionamiento.

> [!IMPORTANT]
> El sistema se desarrollará bajo un enfoque **PMV (Producto Mínimo Viable)**, priorizando las funcionalidades esenciales.

### **🚫 El proyecto NO incluye**
- Implementación en sistemas reales de universidades.
- Integración con sistemas institucionales existentes (Banner, PeopleSoft, etc.).
- Infraestructura de servidores propia.
- Soporte posterior a la entrega.

### **🛠️ Recursos Preasignados**
- Equipo de estudiantes de ingeniería de sistemas.
- Herramientas de desarrollo open-source.
- Tiempo asignado: 16 semanas.

---

## 👥 Lista de Interesados (Stakeholders)

| Nombre / Grupo | Rol | Responsabilidad / Interés |
| :--- | :--- | :--- |
| **Equipo de desarrollo** | Desarrolladores | Analizar, diseñar, desarrollar y probar el sistema. |
| **Docente del curso** | Supervisor | Guiar el desarrollo y evaluar el progreso. |
| **Coordinador académico** | Usuario principal | Generar y gestionar horarios de manera eficiente. |
| **Docentes** | Usuarios | Consultar horarios y registrar disponibilidad. |
| **Estudiantes** | Usuarios finales | Consultar horarios para su organización académica. |
| **Institución Educativa** | Beneficiario | Optimizar el uso de recursos físicos y humanos. |

---

## 📅 Resumen del Cronograma de Hitos

| Hito | Descripción | Fecha / Periodo |
| :--- | :--- | :--- |
| **Hito 1** | Análisis del problema y requerimientos | Semana 1 - 2 |
| **Hito 2** | Diseño de la solución | Semana 3 - 4 |
| **Hito 3** | Desarrollo del sistema | Semana 5 - 11 |
| **Hito 4** | Pruebas y validación | Semana 11 - 15 |
| **Hito 5** | Entrega final del proyecto | Semana 16 |

---

## ⚠️ Consideraciones del Proyecto

### **🔥 Riesgos de Alto Nivel**
1. **Complejidad Algorítmica:** Dificultad para modelar todas las restricciones en un tiempo aceptable.
2. **Plazo Limitado:** El tiempo de 16 semanas es ajustado para un sistema de optimización.
3. **Datos de Prueba:** Dificultad para obtener datos reales y consistentes para validar el motor.

### **✅ Criterios de Aceptación**
- El sistema genera un horario completo en **≤ 5 minutos**.
- El horario generado está **libre de conflictos críticos** (traslapes).
- Se validan el **100% de las restricciones críticas** definidas.
- Interfaz intuitiva para la gestión de datos base.

### **📌 Suposiciones**
- Disponibilidad de datos representativos para el modelado.
- Compromiso y disponibilidad del equipo de desarrollo.
- Las reglas de negocio no cambiarán drásticamente durante el Sprint.

### **🛑 Restricciones**
- **Tiempo:** Entrega final fija en la semana 16.
- **Tecnología:** Uso mandatorio del stack MERN / Python-FastAPI para el motor.
- **Alcance:** Limitado estrictamente a un PMV.
