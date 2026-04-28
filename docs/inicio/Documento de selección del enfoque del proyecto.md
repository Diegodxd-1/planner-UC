# 🛠️ SELECCIÓN DEL ENFOQUE TÉCNICO

Este documento justifica la elección de la arquitectura y metodología, basándose en criterios técnicos, metodológicos y contextuales que aseguran la viabilidad del proyecto.

### 📋 1. Criterios de Selección (Justificación)

| **Criterio** | **Definición** | **Impacto en el Proyecto** |
| :--- | :--- | :--- |
| **Técnico** | Capacidad de procesamiento asíncrono y resolución de CSP. | Asegura que el motor no bloquee la interfaz de usuario. |
| **Metodológico**| Soporte para entregas continuas (Scrum) y TDD. | Facilita la detección temprana de errores lógicos. |
| **Contextual** | Experiencia previa del equipo y plazo de **16 semanas**. | Minimiza el riesgo de retrasos por aprendizaje de nuevas sintaxis. |
| **Económico** | Costo de infraestructura y herramientas de despliegue. | Permite el uso de tiers gratuitos (Vercel/Render/Supabase). |

---

### 🏗️ 2. Comparativa de Alternativas Evaluadas

| **Variable** | **Alternativa Monolítica (Django/PHP)** | **Enfoque Seleccionado (MERN + Python)** |
| :--- | :--- | :--- |
| **Arquitectura** | Acoplada (Frontend servido por backend). | **Decoupled**: Independencia total (React/Next). |
| **Interactividad** | Limitada (Recargas de página). | **Alta**: SPA con actualizaciones en tiempo real. |
| **Algoritmo** | Librerías matemáticas estándar. | **Optimizado**: Google OR-Tools para CSP. |
| **Escalabilidad** | Vertical (Dificultad al crecer). | **Horizontal**: Escalable mediante microservicios. |

---

### ⚖️ 3. Argumentación de Decisiones

#### **¿Por qué React + Node.js?**
La decisión de utilizar un stack **Full Stack JavaScript** (MERN) responde a la necesidad de agilidad. Unificar el lenguaje permite que todo el equipo trabaje en cualquier capa del sistema, eliminando silos de conocimiento y acelerando la construcción del **PMV**.

#### **¿Por qué un Motor en Python?**
A pesar de usar Node.js para la API, el núcleo de optimización se implementa en Python debido a su ecosistema robusto de investigación de operaciones. Esto permite una **Estrategia Híbrida** que combina la velocidad de desarrollo web con la potencia de cálculo matemático.

#### **¿Por qué Scrum + TDD?**
Dado que la generación de horarios es un problema de alta complejidad, el uso de **TDD** (Test-Driven Development) garantiza que cada regla añadida al algoritmo sea verificada automáticamente, evitando regresiones en la lógica de negocio.

---

> [!NOTE]
> Este enfoque ha sido seleccionado para garantizar que la solución sea no solo funcional, sino también escalable y mantenible para futuras expansiones en la Universidad Continental.
