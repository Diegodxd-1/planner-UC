# 📌 REGISTRO DE SUPUESTOS Y RESTRICCIONES

## 💡 Supuestos
Los supuestos son condiciones que consideramos verdaderas para avanzar en el desarrollo, aunque no tengamos una validación absoluta al 100%.

> [!TIP]
> Estos supuestos permiten establecer el marco de referencia para el algoritmo de optimización.

- **Estructura Académica:** La universidad posee una organización clara de cursos, docentes y aulas.
- **Asignación Docente:** Cada curso tiene al menos un docente responsable asignado.
- **Disponibilidad Horaria:** Los docentes tienen ventanas de tiempo definidas para dictar clases.
- **Exclusividad de Aula:** Un aula solo puede albergar una clase a la vez.
- **Perfil de Usuario:** Los coordinadores académicos serán los operadores principales del sistema.
- **Acceso a Herramientas:** El equipo tiene acceso pleno a Git, GitHub, entornos de desarrollo y plataformas cloud.

---

## 🛑 Restricciones
Condiciones inamovibles que limitan o condicionan el desarrollo del proyecto.

### **🕒 Tiempo y Alcance**
*   **Cronograma:** Entrega final obligatoria en **16 semanas**.
*   **Alcance:** Limitado a un **Producto Mínimo Viable (PMV)** enfocado en la lógica central.
*   **Entorno:** Validación en entorno controlado (no producción institucional).

### **💻 Tecnología y Metodología**
*   **Stack Mandatorio:** **MERN** (MongoDB, Express, React, Node.js).
*   **Gestión:** Uso estricto de **Scrum** y herramientas de control de versiones (Git).
*   **Arquitectura:** Separación física de Frontend y Backend.
*   **Documentación:** Formato Markdown accesible desde GitHub.

---

## ⚖️ Validación y Coherencia

### **Justificación de Restricciones**
Las restricciones se han definido bajo un criterio de **realismo técnico**. La elección del stack MERN y el enfoque PMV responden directamente al límite de 16 semanas, asegurando que el equipo entregue un motor de horarios funcional y no solo una interfaz sin lógica.

### **Alineación Supuestos-Restricciones**
| Supuesto | Restricción Relacionada | Coherencia |
| :--- | :--- | :--- |
| El equipo sabe desarrollo web. | Uso de Stack MERN. | Permite avanzar rápido sin aprender un lenguaje nuevo desde cero. |
| Disponibilidad de datos base. | Validación en entorno controlado. | El sistema se prueba con data sintética pero realista. |
| Los coordinadores son el usuario. | Enfoque PMV. | Se prioriza la funcionalidad de planificación sobre la de consulta masiva. |

---

> [!NOTE]
> No se identifican contradicciones entre los supuestos y las restricciones, lo que garantiza la viabilidad del planteamiento inicial.