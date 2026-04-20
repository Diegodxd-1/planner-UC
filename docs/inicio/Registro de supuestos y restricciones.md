# Registro de Supuestos y Restricciones

**Taller de Proyectos 2 - Ingeniería de Sistemas e Informática**

---

## 1. Supuestos del Proyecto
Los supuestos representan condiciones que se consideran verdaderas para el desarrollo del proyecto, validados con los coordinadores de facultad:

* **Disponibilidad de Datos**: Se asume que la universidad proporcionará la carga de docentes y aulas en formatos compatibles (Excel/CSV) durante el Sprint 1.
* **Infraestructura**: Se cuenta con un entorno de staging para pruebas de integración continua.
* **Usuarios**: Los coordinadores académicos tienen competencias digitales básicas para operar una SPA.

## 2. Restricciones del Sistema
Las restricciones son limitaciones técnicas y de negocio que guían la arquitectura, coordinadas con los stakeholders principales.

### 2.1 Restricciones de Negocio (MVP Coherence)
* **Alcance del PMV**: El sistema se enfocará exclusivamente en la funcionalidad de **Generación y Optimización de Horarios**. Se excluyen módulos de pago, asistencia y actas de notas para mantener la viabilidad técnica en 16 semanas.
* **Plazo Estricto**: Entrega final programada para la Semana 16 del ciclo académico 2026.
* **Metodología**: Uso obligatorio de **Scrum** con ceremonias semanales registradas en el repositorio.

### 2.2 Restricciones Técnicas
* **Tecnología**: Desarrollo bajo el stack **MERN** (con MongoDB para flexibilidad de esquemas horarias).
* **Calidad de Documentación**: Uso del estándar **ARC42** para la descripción de la arquitectura.
* **Control de Versiones**: Gestión de ramas mediante **GitFlow** (main, develop, feature-*) para asegurar la estabilidad del código.
* **Alojamiento**: El sistema debe ser desplegado en servicios de nube que permitan acceso HTTPS (ej: Render/Vercel).

## 3. Coordinación con Stakeholders
Este documento y el registro de requerimientos han sido validados con:
1. **DIRECCIÓN ACADÉMICA**: Validación de reglas de negocio y priorización de restricciones (solapamientos > aforo > preferencias).
2. **GESTIÓN TECNOLÓGICA**: Aprobación del stack MERN y políticas de seguridad (JWT + BCrypt).
