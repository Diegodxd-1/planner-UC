# Sistema de Generación Óptima de Horarios Académicos (SGO-HA)

## Tabla de Contenido
- [Integrantes del equipo](#integrantes-del-equipo)
- [Problemática abordada](#problemática-abordada)
- [Justificación del PMV](#justificación-del-pmv)
- [Tecnologías utilizadas](#tecnologías-utilizadas)
- [Arquitectura del sistema](#arquitectura-del-sistema)
- [Estándares y Calidad](#estándares-y-calidad)
- [Instrucciones de instalación](#instrucciones-de-instalación)
- [Instrucciones de build](#instrucciones-de-build)
- [Instrucciones de despliegue](#instrucciones-de-despliegue)
- [Video explicativo](#video-explicativo)
- [Documentación](#documentación)

## Integrantes del equipo
- **VASQUEZ MIRANDA, Luis Alexis** - Líder del Proyecto / Desarrollador Backend
- **ARAUJO HUAMANI, Leonardo Daniel** - Analista de Sistemas
- **CURI UNTIVEROS, Jefferson Diego** - Diseñador de Software
- **VILCARANO DE LA CRUZ, Frank Anthony** - Desarrollador Frontend y QA

## Problemática abordada
La planificación de horarios académicos en entornos de currículo flexible es una tarea de alta complejidad que involucra múltiples variables: disponibilidad docente, asignación de aulas, cruces de secciones y prerrequisitos. 

Este proyecto aborda un **Problema de Satisfacción de Restricciones (CSP - Constraint Satisfaction Problem)** de naturaleza combinatoria, donde el espacio de búsqueda crece exponencialmente con cada nueva sección, docente y aula, clasificándolo como un **problema complejo de ingeniería**. La falta de automatización genera solapamientos y un uso ineficiente de los recursos institucionales.

## Justificación del PMV
El Producto Mínimo Viable (PMV) busca automatizar la generación de horarios mediante un sistema que valide las restricciones principales en tiempo real. Al centralizar la gestión de datos académicos y aplicar algoritmos de validación, se reduce el error humano, se optimiza el tiempo de los coordinadores y se garantiza una planificación académica libre de conflictos.

## Tecnologías utilizadas
El stack tecnológico ha sido seleccionado para cumplir con los requerimientos de escalabilidad y mantenibilidad:

- **Frontend (React.js):** Elegido por su capacidad para crear una **SPA (Single Page Application)** fluida, asegurando una experiencia de usuario rápida y cumpliendo con los estándares de usabilidad de la rúbrica.
- **Backend (Node.js & Express):** Seleccionado para implementar una **API REST** altamente escalable y manejar operaciones asíncronas de validación de horarios en tiempo real.
- **Base de Datos (MongoDB):** Se optó por un modelo **NoSQL** por la flexibilidad del esquema ante requerimientos cambiantes y la alta variabilidad en la estructura de los currículos universitarios.
- **Control de Versiones:** Git & GitHub (Flujo de trabajo basado en ramas).

## Arquitectura del sistema
El sistema implementa una **Arquitectura Decoupled (Desacoplada)** mediante una SPA en React que consume una API REST en Node.js, garantizando la **Separación de Intereses (SoC - Separation of Concerns)**, permitiendo una mayor mantenibilidad y facilidad para futuras integraciones.

## Estándares y Calidad
Para asegurar un producto de nivel profesional, el desarrollo se rige bajo los siguientes lineamientos:
- **ISO/IEC 25010:** Utilizada como marco de referencia para asegurar mantenibilidad, seguridad y rendimiento.
- **OWASP Top 10:** Seguridad en la autenticación y el manejo de datos académicos sensibles.
- **Green Software:** Diseño de algoritmos optimizados para reducir el consumo innecesario de ciclos de CPU (eficiencia energética computacional).
- **WCAG 2.1:** Garantizando una interfaz accesible para todos los actores del sistema (docentes, estudiantes y administrativos).

## Instrucciones de instalación
```bash
# Clonar el repositorio
git clone https://github.com/Diegodxd-1/planner-UC.git

# Configurar el Backend
cd backend
npm install

# Configurar el Frontend
cd ../frontend
npm install
```

## Instrucciones de build
```bash
# Build de producción para el Frontend
cd frontend
npm run build
```

## Instrucciones de despliegue
[El despliegue se realizará en plataformas Cloud como Vercel (Frontend) y Render/Heroku (Backend)]

## Video explicativo
[Enlace al video de demostración (Pendiente - Máximo 5 minutos)]

## Documentación
La documentación oficial está organizada siguiendo las áreas de gestión del PMBOK en la carpeta `docs/`:
- [📁 Fase de Inicio](docs/inicio/) (Acta de constitución, Stakeholders, Visión)
- [📁 Fase de Planificación](docs/planificacion/)
- [📁 Fase de Ejecución](docs/ejecucion/)
- [📁 Seguimiento y Control](docs/seguimiento_control/)
- [📁 Fase de Cierre](docs/cierre/)
