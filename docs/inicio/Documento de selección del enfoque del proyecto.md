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

| Criterio | Seleccionado: MERN Stack | Alternativa 1: Monolito Tradicional | Alternativa 2: Microservicios (Go/Python) |
| :--- | :--- | :--- | :--- |
| **Arquitectura** | **SPA**: Full desacople. | **MPA**: Basado en plantillas. | **Distribuida**: Servicios independientes. |
| **Productividad** | **Muy Alta**: Lenguaje único (JS). | **Media**: Cambio de contexto. | **Baja**: Complejidad de red y despliegue. |
| **Interactividad** | **React.js**: UX fluida. | **HTML/JQuery**: UX básica. | **Web/Mobile**: UX flexible pero costosa. |
| **Escalabilidad** | **Alta**: Horizontal en Node. | **Baja**: Vertical (Monolito). | **Máxima**: Escala por servicio. |
| **Mantenimiento** | **Simplificado**: Monorepo/Ecosistema. | **Robusto**: Pero lento de cambiar. | **Complejo**: Requiere Orquestadores. |


## 4. Conclusión
Se ha optado por el stack **MERN (MongoDB, Express, React, Node.js)** porque maximiza los criterios de **Eficiencia de Procesamiento** y **Colaboración Full-stack**, garantizando la entrega de un MVP funcional y escalable dentro de los plazos establecidos.

