<div align="center">

# 🗓️ Sistema de Generación Óptima de Horarios Académicos (SGO-HA)

[![React](https://img.shields.io/badge/Frontend-React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Backend-Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/Database-MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Express](https://img.shields.io/badge/Framework-Express-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)

---

### 🚀 Revolucionando la Planificación Universitaria con Ingeniería de Software
*Un proyecto diseñado para la eficiencia, escalabilidad y precisión académica.*

[**Explorar Documentación**](docs/)

</div>

## 👥 Integrantes del Equipo
| Nombre | Rol Principal | Especialidad |
| :--- | :--- | :--- |
| **VASQUEZ MIRANDA, Luis Alexis** | 👑 Líder del Proyecto | Backend Developer |
| **ARAUJO HUAMANI, Leonardo Daniel** | 🔍 Analista de Sistemas | Requirements & Logic |
| **CURI UNTIVEROS, Jefferson Diego** | 🎨 Diseñador de Software | Architecture & Design |
| **VILCARANO DE LA CRUZ, Frank Anthony** | 💻 Desarrollador Frontend | UI/UX & QA |

---

## 🌩️ Problemática Abordada
La planificación de horarios académicos en entornos de currículo flexible es un desafío crítico. Involucra variables masivas: disponibilidad docente, capacidad de aulas, cruces de secciones y prerrequisitos.

> [!IMPORTANT]
> Este proyecto aborda un **Problema de Satisfacción de Restricciones (CSP)** de naturaleza combinatoria. El espacio de búsqueda crece exponencialmente, clasificándolo como un **problema complejo de ingeniería**.

❌ **Consecuencias Actuales:**
- ⚠️ Solapamientos de cursos.
- 🕒 Pérdida masiva de tiempo administrativo.
- 📉 Uso ineficiente de infraestructura institucional.

---

## 🎯 Justificación del PMV
Nuestro **Producto Mínimo Viable (PMV)** automatiza la generación de horarios integrando algoritmos de validación en tiempo real. 

- ✅ **Precisión:** Eliminación total del solapamiento.
- ✅ **Optimización:** Distribución eficiente de aulas y docentes.
- ✅ **Agilidad:** Respuesta inmediata ante cambios de currículo.

---

## 🛠️ Stack Tecnológico
| Tecnología | Logo | Justificación Técnica |
| :--- | :---: | :--- |
| **React.js** | ![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB) | Creación de una **SPA** fluida con alta usabilidad siguiendo normativas de UI. |
| **Node.js** | ![Node](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white) | Implementación de una **API REST** asíncrona para validaciones en tiempo real. |
| **MongoDB** | ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white) | Esquema **NoSQL** flexible para soportar variabilidad en mallas curriculares. |
| **Express** | ![Express](https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white) | Middleware robusto para gestión de rutas y seguridad de la API. |

---

## 🏗️ Arquitectura del Sistema
Utilizamos una **Arquitectura Decoupled (Desacoplada)**:
- 🎨 **Frontend:** SPA independiente en React.
- ⚙️ **Backend:** API REST en Node.js/Express.
- 🔗 **Comunicación:** Protocolo HTTP/JSON bajo principios de **Separación de Intereses (SoC)**.

---

## ✨ Estándares y Calidad
Nos regimos bajo los más altos lineamientos de ingeniería:

- 🛡️ **OWASP Top 10:** Seguridad en autenticación y datos sensibles.
- 📏 **ISO/IEC 25010:** Marco de referencia para mantenibilidad y rendimiento.
- 🌿 **Green Software:** Algoritmos eficientes para reducir el impacto energético.
- ♿ **WCAG 2.1:** Accesibilidad garantizada para todos los usuarios.

---

## ⚙️ Instrucciones de Instalación
```bash
# 1. Clonar el repositorio
git clone https://github.com/Diegodxd-1/planner-UC.git

# 2. Configurar el Backend
cd backend
npm install

# 3. Configurar el Frontend
cd ../frontend
npm install
```

## 🏗️ Instrucciones de Build
```bash
# Generar archivos de producción para el Frontend
cd frontend
npm run build
```

---

## 📅 Cronograma de Hitos
| Hito | Descripción | Semana |
| :--- | :--- | :--- |
| **Hito 1** | Análisis del problema y requerimientos | S1 – S2 |
| **Hito 2** | Diseño de la solución | S3 – S4 |
| **Hito 3** | Desarrollo del sistema | S5 – S9 |
| **Hito 4** | Pruebas y validación | S10 – S11 |
| **Hito 5** | Entrega final del proyecto | S12 |

---

## 📋 Requerimientos Clave
El sistema se enfoca en resolver la asignación automatizada bajo restricciones:
- **RF:** Gestión de docentes, aulas, bloques horarios y detección de conflictos.
- **RNF:** Generación en < 60s, alta disponibilidad y seguridad de datos.

---

## 📂 Estructura de Documentación (PMBOK)
Accede a la documentación detallada del proyecto siguiendo el estándar internacional:

*   [**📁 Fase de Inicio**](docs/inicio/):
    *   [Declaración de la Visión](docs/inicio/Declaración%20de%20la%20visión%20del%20proyecto.md)
    *   [Declaración del Equipo](docs/inicio/Declaración%20del%20equipo%20del%20proyecto.md)
    *   [Documento del Problema](docs/inicio/Documento%20inicial%20del%20problema%20(primer%20borrador).md)
    *   [Requerimientos (RF/RNF)](docs/inicio/Lista%20preliminar%20de%20requerimientos%20funcionales%20y%20no%20funcionales.md)
    *   [Selección del Enfoque](docs/inicio/Documento%20de%20selección%20del%20enfoque%20del%20proyecto.md)
    *   [Project Charter](docs/inicio/Project%20Charter.md)
    *   [Supuestos y Restricciones](docs/inicio/Registro%20de%20supuestos%20y%20restricciones.md)
    *   [Repositorio GitHub](docs/inicio/Repositorio%20GitHub%20operativo.md)

*   [**📁 Fase de Planificación**](docs/planificacion/): Cronograma, Gestión de Riesgos.
*   [**📁 Fase de Ejecución**](docs/ejecucion/): Sprint Backlogs, Evidencias.
*   [**📁 Seguimiento y Control**](docs/seguimiento_control/): Métricas, Burndown charts.
*   [**📁 Fase de Cierre**](docs/cierre/): Informe final, Lecciones aprendidas.

---
<div align="center">
  <sub>Desarrollado con ❤️ para el Taller de Proyectos 2 - Continental</sub>
</div>
