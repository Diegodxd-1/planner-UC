# Documento de Selección del Enfoque del Proyecto

**Taller de Proyectos 2 - Ingeniería de Sistemas e Informática**

**Docente:** Job Daniel Gamarra Moreno  
**NRC:** 28574  
**Huancayo - Perú**

---

## 1. Objetivo
Definir y justificar el enfoque tecnológico seleccionado para el desarrollo del sistema de generación de horarios universitarios.

## 2. Evaluación de Enfoques

| Criterio | Enfoque Seleccionado: React + Node.js (Fullstack JS) | Alternativa Evaluada: Arquitectura Monolítica (Tradicional) |
| :--- | :--- | :--- |
| **Arquitectura** | **SPA (Single Page Application)**: El frontend y backend son independientes, comunicándose por JSON. | **MPA (Multi-Page Application)**: Basada en plantillas generadas directamente por el servidor. |
| **Lenguaje principal** | **JavaScript (ES6 +)**: Un solo lenguaje unificado para todo el equipo, facilitando la colaboración. | **Múltiples lenguajes**: Uso de diferentes sintaxis (PHP/Java para Back, JS para Front). |
| **Desarrollo frontend** | **React.js**: Biblioteca basada en componentes reutilizables que permite una interfaz fluida. | **HTML/JS Estático**: Menos interactivo, código difícil de mantener y de escalar. |
| **Desarrollo backend** | **Node.js + Express**: Entorno de alto rendimiento ideal para procesar múltiples peticiones en tiempo real. | **Servidores Tradicionales**: Estructuras robustas pero con configuración inicial más lenta y compleja. |
| **Base de datos** | **MongoDB / Supabase**: Alta flexibilidad para cambios dinámicos en el esquema del "planner". | **Bases de datos SQL rígidas**: Estructuras fijas que requieren migraciones manuales complejas. |
| **Integración** | **Híbrido (Vercel + Render)**: Despliegue independiente optimizado para escalabilidad y hosting gratuito. | **Servidor único (VPS)**: Requiere configuración manual de infraestructura y genera costos operativos. |
| **Aprendizaje** | **Alta eficiencia** al compartir la misma lógica de JavaScript entre el equipo de Front y Back. | **Más lenta** debido a la necesidad de aprender y dominar sintaxis distintas para cada capa. |

## 3. Conclusión
Se ha optado por el stack **MERN (MongoDB, Express, React, Node.js)** debido a su flexibilidad, el rendimiento de Node.js para tareas de procesamiento y la facilidad de desarrollo al usar un único lenguaje en todo el stack.
