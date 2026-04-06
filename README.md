# Sistema de Generación Óptima de Horarios Académicos (SGO-HA)

## Tabla de Contenido
- [Integrantes del equipo](#integrantes-del-equipo)
- [Problemática abordada](#problemática-abordada)
- [Justificación del PMV](#justificación-del-pmv)
- [Tecnologías utilizadas](#tecnologías-utilizadas)
- [Arquitectura del sistema](#arquitectura-del-sistema)
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
La planificación de horarios académicos en universidades con currículo flexible es una tarea de alta complejidad que involucra múltiples variables: disponibilidad docente, asignación de aulas, cruces de secciones y prerrequisitos. Actualmente, este proceso manual o semi-automatizado genera errores frecuentes, solapamientos y un uso ineficiente de los recursos institucionales, afectando tanto a la gestión administrativa como a la experiencia del estudiante.

## Justificación del PMV
El Producto Mínimo Viable (PMV) busca automatizar la generación de horarios mediante un sistema que valide las restricciones principales en tiempo real. Al centralizar la gestión de datos académicos y aplicar algoritmos de validación, se reduce el error humano, se optimiza el tiempo de los coordinadores y se garantiza una planificación académica libre de conflictos.

## Tecnologías utilizadas
- **Frontend:** React.js
- **Backend:** Node.js & Express
- **Base de Datos:** MongoDB
- **Control de Versiones:** Git & GitHub (Flujo de trabajo basado en ramas)
- **Documentación:** Markdown & Estándares PMBOK

## Arquitectura del sistema
El sistema emplea una **Arquitectura por Capas**, separando la interfaz de usuario (Frontend), la lógica de negocio (Backend API) y el almacenamiento persistente (Capa de Datos). Esta separación asegura la mantenibilidad y escalabilidad del PMV.

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
