# 2. Declaración de Trabajo

## 2.1. Objeto del trabajo

Diseñar, implementar y validar un MVP web que permita administrar datos académicos básicos, generar una propuesta optimizada de oferta horaria y visualizar sus resultados.

## 2.2. Alcance del trabajo

### Incluido

- arquitectura separada entre frontend y backend;
- autenticación mediante Supabase;
- autorización administrativa por rol;
- gestión de cursos;
- gestión de aulas;
- gestión de usuarios profesor y alumno;
- restricciones de integridad en base de datos;
- motor de optimización mediante OR-Tools CP-SAT;
- endpoint de generación demo;
- visualización semanal del horario;
- filtros de visualización;
- pruebas automatizadas;
- análisis de calidad, seguridad, accesibilidad y usabilidad;
- documentación técnica y de cierre.

### Excluido

- integración con sistemas institucionales;
- despliegue productivo oficial;
- matrícula estudiante por estudiante;
- asignación de docentes dentro del solver;
- disponibilidad docente;
- prerrequisitos y créditos dentro del solver;
- historial persistente de ejecuciones;
- edición manual del horario;
- monitoreo productivo;
- soporte posterior a la entrega;
- capacitación presencial formal.

## 2.3. Productos entregables

| ID | Entregable | Descripción | Estado |
| --- | --- | --- | --- |
| EDT-01 | Aplicación frontend | Interfaz Next.js con autenticación, navegación y módulos administrativos. | Entregado |
| EDT-02 | Backend de optimización | API FastAPI con solver CP-SAT. | Entregado |
| EDT-03 | Persistencia administrativa | Migraciones y acceso a Supabase. | Entregado |
| EDT-04 | Visualizador de horario | Grilla semanal y resumen de la solución. | Entregado |
| EDT-05 | Pruebas frontend | Pruebas unitarias, integración y E2E. | Entregado |
| EDT-06 | Pruebas backend | Pruebas de API, solver, helpers y casos límite. | Entregado |
| EDT-07 | Documentación técnica | README, SPEC y ARC42. | Entregado |
| EDT-08 | Evidencias de calidad | SonarQube, OWASP, WCAG y SUS. | Entregado |
| EDT-09 | Documentación de cierre | Informes y registros administrativos. | Entregado en esta fase |
| EDT-10 | Integración de datos reales | Conexión entre Supabase y solver. | No incluido en el resultado actual |

## 2.4. Requisitos técnicos del trabajo

| Capa | Tecnología o regla |
| --- | --- |
| Frontend | Next.js, React y TypeScript |
| Persistencia y autenticación | Supabase |
| Backend | FastAPI y Python |
| Optimización | OR-Tools CP-SAT |
| Comunicación | API HTTP con respuesta JSON |
| Seguridad | Validación de identidad y rol en servidor |
| Versionamiento | Git y GitHub |
| Documentación | Markdown dentro del repositorio |

## 2.5. Criterios de aceptación del trabajo

El trabajo del MVP se considera aceptable cuando:

1. el frontend y el backend pueden iniciarse con las instrucciones documentadas;
2. un administrador autenticado puede gestionar cursos, aulas y usuarios;
3. las operaciones administrativas verifican permisos en servidor;
4. el administrador no puede eliminar su propia cuenta;
5. el backend genera una solución demo mediante CP-SAT;
6. el frontend visualiza la respuesta del endpoint;
7. las pruebas automatizadas principales finalizan sin fallos;
8. la documentación refleja las capacidades y limitaciones reales.

## 2.6. Validación del trabajo ejecutado

| Área | Resultado documentado |
| --- | --- |
| Build frontend | Correcto |
| Pruebas frontend | 25 suites y 66 pruebas aprobadas |
| Cobertura frontend | 82.09% de líneas |
| Pruebas backend | 39 pruebas aprobadas |
| Calidad global | SonarQube Quality Gate aprobado |
| Cobertura global SonarQube | 80.1% |
| Seguridad productiva npm | Cero vulnerabilidades reportadas |
| Accesibilidad | Cero violaciones Axe en ocho rutas |
| Usabilidad | SUS de 81.56/100 |

## 2.7. Proveedores y contratos

No se encontró evidencia de contratos comerciales con proveedores externos.

Las plataformas y herramientas utilizadas —GitHub, Supabase, SonarQube, Next.js, FastAPI y OR-Tools— se emplearon como servicios, herramientas o dependencias del desarrollo, pero no existe un contrato de adquisición o Statement of Work firmado con un proveedor dentro del repositorio.

Por esta razón:

- no aplica un cierre contractual con proveedores;
- no existen pagos contractuales que validar;
- no existen entregables externos pendientes de aceptación;
- las licencias y términos de uso de las herramientas deben revisarse antes de un despliegue institucional.

## 2.8. Responsabilidades

| Actor | Responsabilidad |
| --- | --- |
| Equipo de desarrollo | Implementar, probar y documentar el MVP. |
| Docente del curso | Supervisar y evaluar los entregables. |
| Coordinador académico | Validar utilidad y flujo funcional. |
| Administrador del sistema | Gestionar usuarios, cursos y aulas. |
| Equipo de operaciones futuro | Configurar entornos, secretos, Supabase y ejecución de servicios. |

## 2.9. Supuestos y restricciones del trabajo

### Supuestos

- existen datos representativos para el entorno demo;
- Supabase está configurado y disponible;
- los servicios se ejecutan en un entorno de desarrollo compatible;
- las variables de entorno se proporcionan de forma segura;
- el usuario operativo comprende conceptos básicos de administración académica.

### Restricciones

- alcance limitado a un MVP;
- tiempo académico de 16 semanas;
- uso de herramientas disponibles para el equipo;
- ausencia de integración institucional;
- falta de datos reales;
- sin soporte formal posterior a la entrega.

## 2.10. Cierre de la Declaración de Trabajo

El trabajo se considera **completo para el alcance técnico del MVP**, con aceptación condicionada a que las limitaciones documentadas no se interpreten como capacidades implementadas.

Las funciones avanzadas identificadas deben gestionarse como una nueva fase, con un alcance, cronograma, presupuesto y criterios de aceptación propios.
