# 🛠️ SELECCIÓN DEL ENFOQUE TÉCNICO

## 📋 Criterios de Selección
Para garantizar la viabilidad del proyecto en un plazo de **16 semanas**, hemos priorizado los siguientes pilares:

- ⏱️ **Time-to-Market:** Rápida implementación de funcionalidades core.
- 🧩 **Simplicidad:** Reducción de la deuda técnica inicial.
- 🎓 **Experiencia del Equipo:** Aprovechamiento del dominio en JavaScript.
- 🚀 **Escalabilidad:** Arquitectura preparada para crecimiento futuro.
- 💰 **Costo Cero:** Uso de servicios Cloud con tiers gratuitos.

---

## 🏗️ Enfoque Seleccionado: MERN Stack + Python
Hemos optado por una arquitectura **decoupled (desacoplada)** que permite especializar cada capa del sistema.

### **Comparativa Técnica**

| Criterio | Enfoque Seleccionado (JS/Python) | Alternativa Monolítica (Tradicional) |
| :--- | :--- | :--- |
| **Arquitectura** | **SPA (React)** + **Micro-Backend**. | **MPA** (Plantillas del servidor). |
| **Lenguaje** | **JavaScript / Python**. | PHP, Java o C# (Rígidos). |
| **Frontend** | React (Componentes dinámicos). | HTML/JS estático (Difícil de escalar). |
| **Backend** | Node.js (E/S No bloqueante). | Servidores tradicionales (Configuración lenta). |
| **Base de Datos** | **PostgreSQL / MongoDB**. | Esquemas SQL rígidos. |
| **Despliegue** | **Vercel / Render** (CI/CD Automático). | Servidores VPS (Gestión manual). |
| **Curva Aprendizaje**| **Baja/Media** (Lenguajes conocidos). | **Alta** (Múltiples paradigmas). |

---

## ⚖️ Justificación de Decisiones

### **¿Por qué React + Node?**
La unificación del lenguaje en JavaScript permite que todo el equipo colabore tanto en el cliente como en el servidor, eliminando silos de conocimiento y acelerando el desarrollo del PMV.

### **¿Por qué un motor en Python?**
Aunque el backend es Node.js, la lógica de optimización de horarios (Constraint Satisfaction Problem) se beneficia enormemente de librerías como **Google OR-Tools** disponibles en Python, lo que nos da una ventaja competitiva en el rendimiento del motor.

### **¿Por qué PostgreSQL?**
Necesitamos integridad referencial para los cursos y aulas, pero con la flexibilidad de manejar JSONB para las restricciones dinámicas del "planner".

---

> [!IMPORTANT]
> El enfoque se mantiene alineado con un **PMV**, garantizando que entregaremos una solución funcional y estable dentro del cronograma académico.
