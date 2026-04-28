# 🗓️ Planner-UC: Generación Óptima de Horarios Académicos

<div align="center">

![Architecture](https://img.shields.io/badge/Architecture-MERN%20%2B%20Python-8860D0?style=for-the-badge)
![Methodology](https://img.shields.io/badge/Methodology-TDD%20%2F%20Scrum-5680E9?style=for-the-badge)
![Support](https://img.shields.io/badge/Support-Google%20Antigravity-5AB9EA?style=for-the-badge)

*Sistema de optimización para la planificación académica universitaria en entornos de currículo flexible.*

---

</div>

## 📖 Índice de Documentación (TOC)
Toda la documentación del proyecto sigue el estándar **arc42** para garantizar claridad y mantenibilidad.

### **1. Inicio y Fundamentación**
- [🔍 Documento Inicial del Problema](docs/inicio/Documento%20inicial%20del%20problema%20(primer%20borrador).md) - Análisis de complejidad y ambigüedades.
- [✨ Declaración de la Visión](docs/inicio/Declaración%20de%20la%20visión%20del%20proyecto.md) - Propuesta de valor y misión.
- [🛠️ Selección del Enfoque Técnico](docs/inicio/Documento%20de%20selección%20del%20enfoque%20del%20proyecto.md) - Justificación de tecnologías.
- [📜 Project Charter](docs/inicio/Project%20Charter.md) - Acta de constitución y hitos.
- [📌 Registro de Supuestos y Restricciones](docs/inicio/Registro%20de%20supuestos%20y%20restricciones.md) - Marco lógico.

### **2. Planificación y Gestión (Scrum)**
- [📅 Backlog Detallado del Proyecto](docs/planificacion/Backlog%20Detallado%20del%20Proyecto%20(Hoja%201).md) - Lista total de tareas.
- [🏃 Backlog del Sprint 1](docs/planificacion/Backlog%20del%20Sprint%201.md) / [Sprint 2](docs/planificacion/Backlog%20del%20Sprint%202.md) - Seguimiento de iteraciones.
- [💰 Gestión de Costos](docs/planificacion/Costo%20acumulado%20del%20proyecto.md) - Presupuesto y recursos.
- [⚠️ Registro de Riesgos](docs/planificacion/Registro%20de%20Riesgos.md) - Mitigación de riesgos técnicos.

### **3. Requerimientos y Arquitectura**
- [📋 Lista de Requerimientos SMART](docs/inicio/Lista%20preliminar%20de%20requerimientos%20funcionales%20y%20no%20funcionales.md) - RF, RNF y Trazabilidad.
- [🏗️ Documento Maestro ARC42](docs/ARC42.md) - Estructura completa de la arquitectura.
- [🤝 Declaración del Equipo](docs/inicio/Declaración%20del%20equipo%20del%20proyecto.md) - Roles y normas.

### **4. Documentación del Backend**
- [🔧 Arquitectura del Backend](docs/backend/README.md) - Tecnologías y estructura.
- [📊 Algoritmo de Scheduling](docs/backend/SCHEDULING_DEMO_ORTOOLS_EXPLAINED.md) - Desglose del solver **OR-Tools CP-SAT**.
- [🧪 Guía de Pruebas (TDD)](docs/backend/TESTING.md) - Evidencia de tests automatizados.

---

## 🚀 Presentación del Proyecto
**Planner-UC** aborda un **Problema Complejo de Ingeniería (CSP)**. El sistema utiliza algoritmos de optimización para automatizar la creación de horarios, eliminando el error humano y optimizando el uso de infraestructura.

### **Puntos Clave:**
- **SMART Compliance:** Requerimientos validados bajo criterios técnicos rigurosos.
- **TDD (Test-Driven Development):** Núcleo probado automáticamente antes de su implementación.
- **Eficiencia:** Generación de horarios base en **< 60 segundos**.

---

## 🛠️ Guía de Ejecución Rápida

### **Backend (Motor de Optimización)**
```bash
cd Backend
uv sync
uv run uvicorn app.main:app --reload
```

### **Frontend (Interfaz Web)**
```bash
cd frontend
npm install
npm run dev
```

---
*Desarrollado por el Grupo 05 - Taller de Proyectos 2.*
