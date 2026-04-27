# DOCUMENTO DE SELECCIÓN DEL ENFOQUE DEL PROYECTO

La selección del enfoque del proyecto se fundamenta en criterios técnicos, metodológicos y contextuales, con el objetivo de asegurar la viabilidad del sistema y su alineación con los objetivos planteados.

Para la selección del enfoque se han considerado los siguientes criterios:

- Tiempo de desarrollo: limitado a 16 semanas, lo que exige un enfoque ágil y de rápida implementación.
- Complejidad técnica: se priorizan tecnologías que reduzcan la dificultad de desarrollo y mantenimiento.
- Experiencia del equipo: el equipo cuenta con conocimientos en JavaScript y desarrollo web.
- Escalabilidad: el sistema debe permitir futuras mejoras sin requerir una reestructuración completa.
- Costo: se prioriza el uso de servicios gratuitos o de bajo costo.
- Facilidad de despliegue: se busca una implementación sencilla en entornos cloud accesibles.

En cuanto al contexto del proyecto, el sistema está orientado a estudiantes y personal administrativo que requieren gestionar procesos de convalidación académica de manera eficiente. Este tipo de sistema implica la manipulación de datos variables (cursos, equivalencias, requisitos), así como la necesidad de una interfaz interactiva que permita visualizar resultados de forma clara. Además, se considera la restricción de tiempo (16 semanas) y recursos limitados, por lo que se prioriza un enfoque que permita desarrollar un Producto Mínimo Viable (PMV) funcional, evitando complejidades innecesarias en la primera versión.

Desde el punto de vista técnico, se selecciona un enfoque Full Stack JavaScript utilizando React para el frontend y Node.js con Express para el backend. Esta decisión se fundamenta en la posibilidad de trabajar con un lenguaje unificado, lo que reduce la curva de aprendizaje y facilita la colaboración del equipo. Asimismo, Node.js permite manejar múltiples solicitudes concurrentes de manera eficiente, mientras que React proporciona una experiencia de usuario dinámica e interactiva, adecuada para sistemas que requieren visualización de datos en tiempo real o semiestructurados.

La siguiente tabla presenta los principales criterios considerados en la selección del enfoque:

| **CRITERIOS DE SELECCIÓN DEL ENFOQUE** | **Enfoque Seleccionado: React + Node.js (Fullstack JS)** | **Alternativa Evaluada: Arquitectura Monolítica (Tradicional)** |
| :--- | :--- | :--- |
| **Arquitectura** | **SPA (Single Page Application)**: El frontend y backend son independientes, comunicándose por JSON. | **MPA (Multi-Page Application)**: Basada en plantillas generadas directamente por el servidor. |
| **Lenguaje principal** | **JavaScript (ES6 +)**: Un solo lenguaje unificado para todo el equipo, facilitando la colaboración. | **Múltiples lenguajes**: Uso de diferentes sintaxis (PHP/Java para Back, JS para Front). |
| **Desarrollo frontend** | **React**: Biblioteca basada en componentes reutilizables que permite una interfaz fluida. | **HTML/JS Estático**: Menos interactivo, código difícil de mantener y de escalar. |
| **Desarrollo backend** | **Node.js**: Entorno de alto rendimiento ideal para procesar múltiples peticiones en tiempo real. | **Servidores Tradicionales**: Estructuras robustas pero con configuración inicial más lenta y compleja. |
| **Base de datos** | **PostgreSQL**: Alta flexibilidad para cambios dinámicos en el esquema del "planner". | **Bases de datos SQL rígidas**: Estructuras fijas que requieren migraciones manuales complejas. |
| **Integración frontend-backend** | **Híbrido (Vercel + Render)**: Despliegue independiente optimizado para escalabilidad y hosting gratuito. | **Servidor único (VPS)**: Requiere configuración manual de infraestructura y genera costos operativos. |
| **Curva de aprendizaje** | **Alta eficiencia** al compartir la misma lógica de JavaScript entre el equipo de Front y Back. | **Más lenta** debido a la necesidad de aprender y dominar sintaxis distintas para cada capa. |

En comparación con la alternativa basada en Django, se determinó que, si bien este framework permite un desarrollo rápido mediante su arquitectura monolítica e incluye funcionalidades integradas, presenta una mayor curva de aprendizaje para el equipo, debido a su menor experiencia en Python. Asimismo, la separación entre frontend y backend en el enfoque Full Stack JavaScript permite una mayor flexibilidad para futuras mejoras del sistema.

Por otro lado, el uso de MongoDB o Supabase se justifica por la necesidad de manejar estructuras de datos dinámicas propias del proceso de convalidación académica, evitando la rigidez de los esquemas relacionales en etapas tempranas del desarrollo.

Finalmente, aunque se adopta una arquitectura moderna con separación de frontend y backend, el alcance del proyecto se mantiene alineado con un enfoque PMV, limitando la implementación a funcionalidades esenciales, lo que garantiza la viabilidad del desarrollo dentro del tiempo establecido.
