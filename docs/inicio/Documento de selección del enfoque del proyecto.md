# 🛠️ SELECCIÓN DEL ENFOQUE DEL PROYECTO

La selección del enfoque se fundamenta en criterios técnicos, metodológicos y contextuales, con el objetivo de asegurar la viabilidad del sistema y su alineación estratégica.

### 📋 Criterios de Selección
Para la toma de decisiones se han considerado los siguientes pilares:
- **Tiempo de desarrollo:** Limitado a 16 semanas.
- **Complejidad técnica:** Priorización de mantenibilidad.
- **Experiencia del equipo:** Dominio de JavaScript y desarrollo web.
- **Escalabilidad:** Capacidad de evolución futura.
- **Eficiencia de costos:** Uso de servicios gratuitos/cloud.
- **Facilidad de despliegue:** Implementación automatizada.

---

### 🏗️ Análisis del Enfoque Técnico
Se ha seleccionado un enfoque **Full Stack JavaScript** utilizando **React** para el frontend y **Node.js** con **Express** para el backend. Esta decisión permite trabajar con un lenguaje unificado, reduciendo la curva de aprendizaje y facilitando la integración.

#### **Comparativa de Soluciones**

| **Criterio** | **Enfoque Seleccionado (MERN)** | **Alternativa Monolítica** |
| :--- | :--- | :--- |
| **Arquitectura** | **SPA**: Independencia entre Front y Back. | **MPA**: Basada en plantillas de servidor. |
| **Lenguaje** | **JavaScript (ES6+)**: Lenguaje unificado. | **Múltiples**: PHP/Java + JavaScript. |
| **Frontend** | **React**: Componentes reutilizables. | **HTML Estático**: Difícil de mantener. |
| **Backend** | **Node.js**: Alto rendimiento asíncrono. | **Tradicional**: Configuración compleja. |
| **Base de Datos** | **PostgreSQL**: Esquemas flexibles y robustos. | **SQL Rígida**: Migraciones complejas. |
| **Integración** | **Híbrido (Vercel/Render)**: Escalable. | **Servidor Único**: Gestión manual. |
| **Aprendizaje** | **Alta Eficiencia**: Un solo ecosistema. | **Lenta**: Diversidad de sintaxis. |

---

### ⚖️ Justificación Técnica
En comparación con alternativas como Django, se determinó que el enfoque JavaScript ofrece una mayor agilidad dada la experiencia previa del equipo. La separación de capas garantiza que el motor de optimización pueda evolucionar independientemente de la interfaz.

> [!NOTE]
> El uso de bases de datos modernas se justifica por la necesidad de manejar estructuras dinámicas propias del proceso académico, evitando la rigidez de esquemas tradicionales en etapas de PMV.
