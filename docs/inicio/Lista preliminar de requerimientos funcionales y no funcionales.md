# Lista Preliminar de Requerimientos Funcionales y No Funcionales

**Taller de Proyectos 2 - Ingeniería de Sistemas e Informática**

**Docente:** Job Daniel Gamarra Moreno  
**NRC:** 28574

---

## 1. Requerimientos Funcionales (RF) - Enfoque SMART

Los siguientes requerimientos han sido validados con los stakeholders y cumplen con los criterios SMART (Específicos, Medibles, Alcanzables, Relevantes y Acotados en el tiempo).

| ID | Nombre | Especificación (S) | Medición / Aceptación (M) | Plazo (T) |
|:---|:---|:---|:---|:---|
| **RF-01** | **Gestión de Docentes** | Registrar, editar y listar docentes con código único, especialidad y disponibilidad horaria. | Validación de código único (100%) y respuesta de guardado en < 1s. | Sprint 1 |
| **RF-02** | **Gestión de Cursos** | Registrar cursos con créditos, horas semanales, requisitos de aula y secciones necesarias. | Los cursos deben aparecer en el catálogo inmediatamente tras el registro. | Sprint 1 |
| **RF-03** | **Gestión de Infraestructura** | Registrar aulas con capacidad de aforo y equipamiento técnico (ej: laboratorios). | El sistema debe impedir asignar más alumnos que el aforo definido. | Sprint 1 |
| **RF-04** | **Motor de Generación** | Algoritmo que asigne automáticamente docente-curso-aula-bloque sin solapamientos. | Generación de un horario completo para 100 cursos en menos de 60 segundos. | Sprint 2 |
| **RF-05** | **Validación de Conflictos** | Identificar y alertar en tiempo real si un docente o aula tiene doble asignación. | 100% de solapamientos detectados con mensaje de advertencia visual. | Sprint 2 |
| **RF-06** | **Ajuste Manual** | Permitir al administrador mover clases en una grilla interactiva tipo "drag-and-drop". | Cada movimiento manual debe disparar una validación de reglas de negocio en < 300ms. | Sprint 3 |
| **RF-07** | **Reporte de Factibilidad** | Generar un informe de cursos no programados por falta de recursos (aulas/docentes). | El reporte debe listar la causa exacta (ej: "Sin aula disponible en bloque X"). | Sprint 2 |
| **RF-08** | **Seguridad de Roles** | Diferenciar permisos entre "Carga Académica" (lectura/escritura) y "Consulta" (solo lectura). | 100% de endpoints protegidos mediante tokens JWT y validación de roles. | Sprint 1 |

---

## 2. Requerimientos No Funcionales (RNF) - Calidad ARC42

Estructurados según el estándar de calidad de arquitectura ARC42 (Sección 10).

| Categoría | Atributo | Especificación Medible | Prioridad |
|:---|:---|:---|:---|
| **Eficiencia** | Rendimiento | El motor de búsqueda debe procesar 1,000 combinaciones/segundo para encontrar la solución óptima. | Alta |
| **Fiabilidad** | Disponibilidad | El sistema debe estar operativo el 99% del tiempo durante el periodo de planificación académica. | Alta |
| **Usabilidad** | Aprendizaje | Un coordinador debe ser capaz de configurar la carga inicial de datos en menos de 30 minutos sin manual técnico. | Media |
| **Seguridad** | Confidencialidad | Cifrado de datos sensibles (contraseñas) mediante algoritmos de hashing (BCrypt) con factor de costo ≥ 10. | Crítica |
| **Mantenibilidad** | Modularidad | Cobertura de pruebas unitarias superior al 80% en los módulos de lógica de negocio (Backend). | Alta |
| **Escalabilidad** | Capacidad | Soporte para el ingreso simultáneo de hasta 20 coordinadores gestionando diferentes facultades. | Media |

---

## 3. Trazabilidad y Validación

Cada requerimiento ha sido mapeado con los **Stakeholders** principales (Dirección Académica, Coordinadores de Facultad) para asegurar que el alcance del **PMV** se centre exclusivamente en la resolución del conflicto horario, postergando integraciones externas para fases futuras.

