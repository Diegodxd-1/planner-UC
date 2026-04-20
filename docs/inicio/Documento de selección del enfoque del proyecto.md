# Documento de Selección del Enfoque del Proyecto

**Taller de Proyectos 2 - Ingeniería de Sistemas e Informática**

**Docente:** Job Daniel Gamarra Moreno  
**NRC:** 28574  
**Huancayo - Perú**

---

## 1. Objetivo
Definir y justificar el enfoque tecnológico seleccionado para el desarrollo del sistema de generación de horarios universitarios.

## 2. Criterios de Selección

La selección del enfoque se fundamenta en los siguientes criterios clave:

### 2.1 Criterios Técnicos
*   **Eficiencia de Procesamiento**: Capacidad de manejar algoritmos de búsqueda combinatoria (CSP) en el servidor.
*   **Renderizado Dinámico**: Necesidad de una interfaz altamente interactiva (SPA) para la visualización de grillas horarias.
*   **Integridad de Datos**: Flexibilidad para manejar esquemas de datos que pueden evolucionar durante el desarrollo.

### 2.2 Criterios Metodológicos
*   **Ciclo de Entrega**: Alineación con el marco **Scrum**, permitiendo entregas incrementales y despliegues rápidos.
*   **Colaboración Full-stack**: Uso de un lenguaje único (**JavaScript**) para minimizar la fricción entre el desarrollo de frontend y backend.
*   **Mantenibilidad**: Facilidad para implementar pruebas unitarias y garantizar la trazabilidad mediante Git.

### 2.3 Criterios Contextuales
*   **Integración Institucional**: Capacidad de alineación con el ecosistema digital de la **Universidad Continental** y su enfoque en currículo flexible.
*   **Perfil del Usuario**: Adaptación a coordinadores académicos que requieren una herramienta centralizada y operativa sin dependencias externas complejas.
*   **Marco Académico**: Cumplimiento del plazo de 16 semanas para la entrega de un proyecto terminal con alta carga de optimización matemática.


## 3. Evaluación de Enfoques

| Criterio | Enfoque Seleccionado: MERN Stack | Alternativa: Arquitectura Monolítica |
| :--- | :--- | :--- |
| **Arquitectura** | **SPA (Single Page Application)**: Frontend (React) y Backend (Node) desacoplados. | **MPA (Multi-Page Application)**: Basada en plantillas del lado del servidor. |
| **Productividad** | **Muy Alta**: Equipo especializado en un solo lenguaje (JS/TS). | **Media**: Requiere cambio de contexto entre lenguajes (ej: PHP/Java y JS). |
| **Interactividad** | **React.js**: Actualización parcial del DOM sin recargar la página. | **HTML/JQuery**: Recargas constantes, UX menos fluida. |
| **Despliegue** | **Cloud Native**: Optimizado para micro-servicios y hosting moderno. | **Tradicional**: Requiere gestión manual de servidores y SO. |

## 4. Conclusión
Se ha optado por el stack **MERN (MongoDB, Express, React, Node.js)** porque maximiza los criterios de **Eficiencia de Procesamiento** y **Colaboración Full-stack**, garantizando la entrega de un MVP funcional y escalable dentro de los plazos establecidos.

