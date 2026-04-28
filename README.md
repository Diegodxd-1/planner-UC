# 🗓️ Planner-UC: Generación Óptima de Horarios Académicos

<div align="center">

![MERN Stack](https://img.shields.io/badge/Architecture-MERN%20%2B%20Python-8860D0?style=for-the-badge)
![TDD](https://img.shields.io/badge/Methodology-TDD%20%2F%20Scrum-5680E9?style=for-the-badge)
![Antigravity](https://img.shields.io/badge/Support-Google%20Antigravity-5AB9EA?style=for-the-badge)

*Sistema de optimización para la planificación académica universitaria en entornos de currículo flexible.*

---

</div>

## 📖 Índice de Documentación (TOC)
Toda la documentación del proyecto está organizada en archivos independientes para garantizar claridad y mantenibilidad, siguiendo el estándar **arc42**.

### **1. Inicio y Fundamentación**
- [🔍 Documento Inicial del Problema](docs/inicio/Documento%20inicial%20del%20problema%20(primer%20borrador).md) - Análisis de complejidad y ambigüedades.
- [✨ Declaración de la Visión](docs/inicio/Declaración%20de%20la%20visión%20del%20proyecto.md) - Propuesta de valor y misión del producto.
- [🛠️ Selección del Enfoque Técnico](docs/inicio/Documento%20de%20selección%20del%20enfoque%20del%20proyecto.md) - Justificación de tecnologías y metodología.
- [📜 Project Charter](docs/inicio/Project%20Charter.md) - Acta de constitución, hitos y riesgos.
- [📌 Registro de Supuestos y Restricciones](docs/inicio/Registro%20de%20supuestos%20y%20restricciones.md) - Marco lógico del proyecto.

### **2. Requerimientos y Calidad**
- [📋 Lista de Requerimientos SMART](docs/inicio/Lista%20preliminar%20de%20requerimientos%20funcionales%20y%20no%20funcionales.md) - RF, RNF y Matriz de Trazabilidad.
- [🤝 Declaración del Equipo](docs/inicio/Declaración%20del%20equipo%20del%20proyecto.md) - Roles, responsabilidades y normas.
- [🚀 Repositorio Operativo](docs/inicio/Repositorio%20GitHub%20operativo.md) - Guía de gestión de versiones.

### **3. Arquitectura y Diseño (arc42)**
- [🏗️ Documento Maestro ARC42](docs/ARC42.md) - Estructura completa de la arquitectura del sistema.

---

## 🚀 Presentación del Proyecto
**Planner-UC** aborda un **Problema Complejo de Ingeniería** de naturaleza combinatoria (**CSP**). El sistema utiliza algoritmos de optimización para automatizar la creación de horarios, eliminando el error humano y optimizando el uso de infraestructura física.

### **Puntos Clave del Desarrollo:**
- **SMART Compliance:** Todos los requerimientos están validados bajo criterios específicos, medibles y temporales.
- **Spec-Driven Development:** El desarrollo se guía por especificaciones técnicas rigurosas respaldadas por **Google Antigravity**.
- **TDD (Test-Driven Development):** Núcleo algorítmico desarrollado bajo ciclos de pruebas automatizadas.

---

## ⚙️ Especificaciones Técnicas (Resumen)
- **Rendimiento:** Generación de horarios base en **< 60 segundos**.
- **Latencia:** Consultas administrativas con respuesta en **< 2 segundos**.
- **Stack:** React (Frontend) + FastAPI/Python (Motor de Optimización) + PostgreSQL.

---

## 🛠️ Guía de Ejecución Rápida

### **Backend (Motor)**
1. `cd Backend`
2. `uv sync`
3. `uv run uvicorn app.main:app --reload`

### **Frontend (Interfaz)**
1. `cd frontend`
2. `npm install`
3. `npm run dev`

---

<div align="center">
  <sub>Taller de Proyectos 2 - Universidad Continental (2026)</sub>
</div>
