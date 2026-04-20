# Lista Preliminar de Requerimientos Funcionales y No Funcionales

**Taller de Proyectos 2 - Ingeniería de Sistemas e Informática**

**Docente:** Job Daniel Gamarra Moreno  
**NRC:** 28574

---

## 1. Requerimientos Funcionales (RF) - Enfoque SMART

Los siguientes requerimientos han sido validados con los stakeholders y cumplen con los criterios SMART (Específicos, Medibles, Alcanzables, Relevantes y Acotados en el tiempo).

| ID | Nombre | Especificación (S) | Medición (M) | Trazabilidad | Prioridad |
|:---|:---|:---|:---|:---|:---|
| **RF-01** | **Gestión de Docentes** | Registro incremental de disponibilidad y especialidad. | Validación de código único al 100%. | Docentes / Disponibilidad | Alta |
| **RF-02** | **Gestión de Cursos** | Definición de horas semanales y requisitos de aula. | Visibilidad en catálogo inmediata (< 1s). | Cursos / Malla Curricular | Alta |
| **RF-03** | **Infraestructura** | Registro de aulas con aforo y equipamiento. | Bloqueo automático ante exceso de aforo. | Aulas / Capacidad | Alta |
| **RF-04** | **Motor de Generación** | Asignación automática sin solapamientos. | Solución para 100 cursos en < 60s. | Bloques / Restricciones | Crítica |
| **RF-05** | **Validación Real-time** | Alertas de doble asignación en tiempo real. | 100% de solapamientos detectados. | Conflictos horaros | Crítica |
| **RF-06** | **Ajuste Manual** | Interfaz drag-and-drop para cambios post-motor. | Latencia de validación < 300ms. | Flexibilidad operativa | Media |
| **RF-07** | **Reporte Factibilidad** | Listado de cursos no asignados con causa. | Informe con 0% de ambigüedad en falla. | Optimización recursos | Alta |
| **RF-08** | **Seguridad** | Autenticación y roles (Escritura/Lectura). | 100% de endpoints protegidos por JWT. | Integridad de datos | Crítica |


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

