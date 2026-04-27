# 🔍 DOCUMENTO INICIAL DEL PROBLEMA

## 🌏 Contexto del Problema
En el ámbito universitario, la **planificación de horarios** es un rompecabezas logístico que involucra la sincronización de múltiples variables críticas. Actualmente, muchas instituciones dependen de procesos manuales o herramientas básicas (como hojas de cálculo) que resultan en:

- ❌ **Solapamientos** de horarios para docentes y estudiantes.
- 📉 **Uso ineficiente** de aulas y recursos físicos.
- ⏳ **Largas jornadas** de trabajo para los coordinadores académicos.
- ⚠️ **Errores humanos** difíciles de detectar hasta el inicio de clases.

---

## ⚡ Problema Central
> "Dificultad crítica para generar horarios académicos eficientes que cumplan con el 100% de las restricciones operativas y pedagógicas en entornos de alta demanda."

El proceso manual es propenso a inconsistencias y ajustes de último minuto, lo que afecta directamente la calidad del servicio educativo y la satisfacción de la comunidad académica.

---

## 🧐 Análisis de Complejidad

### **❓ Ambigüedades Identificadas**
Para resolver este problema, hemos detectado áreas que requieren definición:
- [ ] Definición exacta de bloques horarios por jornada.
- [ ] Jerarquía de prioridad entre restricciones en caso de conflictos irresolubles.
- [ ] Reglas de carga docente (máximo de secciones consecutivas).
- [ ] Grado de flexibilidad del plan de estudios (cursos fijos vs. electivos).

### **📊 Variables del Sistema**
Para una solución integral, el modelo debe procesar:
*   **Talento Humano:** Docentes y su disponibilidad.
*   **Infraestructura:** Aulas, laboratorios y su capacidad de aforo.
*   **Oferta Académica:** Cursos, secciones y malla curricular.
*   **Tiempo:** Bloques horarios y ventanas permitidas.

---

## 🛠️ Restricciones del Modelo

### **🔴 Restricciones Duras (Mandatorias)**
1. **Exclusividad Docente:** Un docente no puede dictar dos cursos al mismo tiempo.
2. **Exclusividad de Aula:** Un aula física no puede albergar dos secciones simultáneas.
3. **Coherencia Estudiantil:** Un estudiante no puede tener dos cursos de su malla en el mismo bloque.
4. **Capacidad Crítica:** El aforo del aula debe ser ≥ a la matrícula proyectada.

---

## 💡 Propuesta de Solución: Sistema Planner-UC
Se propone el desarrollo de una **aplicación web inteligente** que automatice la lógica de asignación mediante un motor de optimización.

### **🎯 Alcance del PMV**
- **Gestión Base:** Registro de docentes, aulas y cursos.
- **Configuración:** Definición de restricciones y bloques horarios.
- **Algoritmo:** Generación automática de propuestas de horarios.
- **Interfaz:** Visualización clara y detección de alertas de conflicto.

> [!NOTE]
> El sistema se implementará bajo el stack **MERN** (Frontend React, Backend Node/Express) con un motor de optimización en Python para el procesamiento pesado.