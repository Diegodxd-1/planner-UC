# 3. Documentación de Capacitación

## 3.1. Objetivo

Proporcionar una guía básica para que administradores, usuarios y personal técnico puedan comprender, ejecutar y mantener el MVP.

El Acta de Constitución excluyó la capacitación formal a usuarios finales. Por ello, esta sección funciona como material de transferencia de conocimiento y autoaprendizaje, no como evidencia de una sesión presencial impartida.

## 3.2. Audiencias

| Audiencia | Contenido requerido |
| --- | --- |
| Administrador académico | Login, gestión de usuarios, cursos y aulas. |
| Profesor o alumno | Acceso y consulta de módulos permitidos. |
| Coordinador académico | Interpretación del horario generado. |
| Equipo técnico | Instalación, configuración, pruebas y mantenimiento. |

## 3.3. Conceptos esenciales

### Frontend

La aplicación web:

- autentica usuarios;
- protege rutas según identidad y rol;
- administra información académica;
- consume el resultado del backend;
- muestra estados de carga, éxito y error.

### Backend

El backend:

- expone una API FastAPI;
- construye datos demo;
- formula el problema mediante CP-SAT;
- aplica restricciones;
- devuelve la solución en JSON.

### Supabase

Supabase se utiliza para:

- autenticación;
- perfiles y roles;
- persistencia de cursos;
- persistencia de aulas;
- operaciones administrativas del frontend.

Los datos de Supabase todavía no alimentan directamente al solver.

## 3.4. Requisitos de instalación

### Software

- Node.js 18 o superior;
- npm;
- Python 3.11 o superior;
- `uv`;
- proyecto Supabase configurado;
- Git.

### Variables de entorno del frontend

El archivo `frontend/.env.local` debe proporcionar, según la configuración vigente:

```env
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=...
SUPABASE_SERVICE_ROLE_KEY=...
INITIAL_ADMIN_EMAIL=...
INITIAL_ADMIN_PASSWORD=...
INITIAL_ADMIN_SETUP_TOKEN=...
```

Reglas:

- no versionar valores reales;
- no exponer `SUPABASE_SERVICE_ROLE_KEY` al cliente;
- proteger y rotar el token de setup;
- utilizar secretos diferentes por entorno.

## 3.5. Instalación del frontend

Desde la carpeta `frontend`:

```powershell
npm install
npm run dev
```

La aplicación estará disponible normalmente en:

```text
http://localhost:3000
```

Para validar una compilación:

```powershell
npm run build
```

## 3.6. Instalación del backend

Desde la carpeta `Backend`:

```powershell
uv sync
uv run uvicorn app.main:app --reload
```

El backend estará disponible normalmente en:

```text
http://127.0.0.1:8000
```

Endpoint principal:

```text
GET /api/scheduling-demo
```

## 3.7. Configuración de Supabase

Las migraciones se encuentran en:

```text
frontend/sql/migrations/
```

Deben ejecutarse en orden numérico para crear:

- roles;
- perfiles;
- políticas RLS;
- cursos;
- aulas;
- campos adicionales del MVP.

Antes de habilitar el sistema se debe verificar:

1. que las migraciones finalizaron correctamente;
2. que las políticas RLS están activas;
3. que la cuenta inicial utiliza datos seguros;
4. que las claves de servidor no aparecen en el cliente;
5. que el administrador inicial puede autenticarse.

## 3.8. Capacitación para el administrador

### Inicio de sesión

1. Abrir `http://localhost:3000/login`.
2. Ingresar correo y contraseña.
3. Confirmar que el dashboard muestre el usuario y su rol.
4. Si el acceso falla, validar credenciales, estado del perfil y configuración de Supabase.

### Gestión de cursos

El módulo permite:

- crear cursos;
- consultar cursos;
- editar sus datos;
- eliminar registros;
- definir código, nombre, ciclo, bloques por semana y máximo de secciones.

Antes de guardar:

- usar códigos únicos;
- completar los campos obligatorios;
- verificar que los valores numéricos sean válidos;
- confirmar que el ciclo y tipo correspondan al curso.

### Gestión de aulas

El módulo permite:

- crear aulas;
- definir ubicación y tipo;
- registrar capacidad física;
- registrar aforo autorizado;
- activar o desactivar el aula;
- editar y eliminar registros.

El aforo autorizado no debe superar la capacidad física.

### Gestión de usuarios

El administrador puede:

- crear profesores y alumnos;
- editar nombre, rol, estado y contraseña;
- activar o desactivar perfiles;
- eliminar usuarios.

Controles importantes:

- solo el administrador puede realizar estas operaciones;
- no se permite la autoeliminación;
- las contraseñas deben cumplir las reglas de seguridad;
- un usuario inactivo no debe conservar acceso administrativo.

## 3.9. Capacitación sobre el generador de horarios

### Uso

1. Confirmar que el backend esté activo.
2. Ingresar al módulo `Generador de horarios`.
3. Esperar la respuesta del endpoint.
4. Revisar el resumen de demanda y secciones.
5. Aplicar filtros por curso o día.
6. Consultar la grilla semanal.

### Interpretación

Cada sección muestra:

- curso;
- número de sección;
- aula;
- capacidad;
- bloques asignados.

El resumen permite identificar:

- demanda total;
- demanda no cubierta;
- capacidad excedente;
- secciones abiertas.

### Limitaciones

El resultado:

- utiliza datos demo;
- no matricula estudiantes individualmente;
- no asigna docentes;
- no valida disponibilidad docente;
- no considera prerrequisitos;
- no se guarda como historial;
- no permite edición manual.

## 3.10. Ejecución de pruebas

### Frontend

```powershell
cd frontend
npm run lint
npm test
npm run test:coverage
```

### Backend

```powershell
cd Backend
uv run pytest
uv run pytest --cov=app --cov-report=term-missing --cov-report=html
```

### Cypress

Con el frontend activo y el entorno E2E configurado:

```powershell
cd frontend
npm run cypress:verify
npm run cypress:run
```

El bypass de autenticación E2E solo debe utilizarse en pruebas y nunca en producción.

## 3.11. Solución de problemas frecuentes

| Problema | Causa probable | Acción |
| --- | --- | --- |
| El frontend no inicia | Dependencias ausentes o variables inválidas | Ejecutar `npm install` y revisar `.env.local`. |
| El backend no inicia | Dependencias Python no sincronizadas | Ejecutar `uv sync`. |
| El horario muestra error | Backend detenido o endpoint inaccesible | Iniciar FastAPI y verificar el puerto 8000. |
| El usuario no puede entrar | Credenciales inválidas o perfil inactivo | Revisar Supabase Auth y `user_profiles`. |
| Un módulo administrativo no aparece | Usuario sin rol administrador | Verificar el rol almacenado. |
| Una operación devuelve 401 o 403 | Sesión inválida o permisos insuficientes | Renovar sesión y revisar autorización. |
| Cypress falla con opciones desconocidas | Variable `ELECTRON_RUN_AS_NODE` | Utilizar los scripts npm del proyecto. |
| SonarQube muestra cobertura 0% | Reportes no generados o rutas incorrectas | Generar LCOV/XML antes del scanner. |
| El aforo autorizado es rechazado | Supera la capacidad física | Corregir el valor del aula. |

## 3.12. Mantenimiento y transferencia

El equipo que continúe el proyecto debe:

1. conservar la separación entre gestión y solver;
2. mantener las migraciones SQL versionadas;
3. actualizar pruebas cuando cambien contratos;
4. no exponer claves administrativas;
5. mantener la validación de rol en servidor;
6. actualizar README y SPEC cuando cambie el comportamiento;
7. registrar riesgos, incidentes y defectos durante cada iteración;
8. validar calidad, seguridad y accesibilidad antes de liberar;
9. documentar cualquier cambio en las entradas o salidas del solver.

## 3.13. Ruta recomendada para una futura capacitación formal

| Sesión | Contenido | Duración sugerida |
| --- | --- | ---: |
| 1 | Objetivo, arquitectura y limitaciones | 30 min |
| 2 | Login y administración de usuarios | 30 min |
| 3 | Gestión de cursos y aulas | 45 min |
| 4 | Generador e interpretación del horario | 45 min |
| 5 | Instalación, pruebas y mantenimiento | 60 min |

La capacitación debe finalizar con:

- ejercicio práctico;
- lista de asistencia;
- preguntas y respuestas;
- encuesta de comprensión;
- acta de transferencia firmada.

---

# 4. Conclusión general

La revisión del Acta confirma que Planner-UC alcanzó un MVP funcional y técnicamente validado, aunque no cumplió la totalidad de la visión institucional original.

La Declaración de Trabajo queda cerrada para el alcance implementado y no requiere cierre contractual con proveedores. Las capacidades pendientes deben tratarse como una nueva fase.

La documentación de capacitación permite transferir el conocimiento básico del sistema, pero no constituye evidencia de capacitación formal impartida. Para una entrega institucional será necesario ejecutar y registrar sesiones reales con usuarios y personal de operaciones.

# 5. Fuentes consultadas

- `docs/inicio/Project Charter.md`
- `docs/inicio/Declaración de la visión del proyecto.md`
- `docs/inicio/Lista preliminar de requerimientos funcionales y no funcionales.md`
- `docs/planificacion/Backlog Detallado del Proyecto (Hoja 1).md`
- `SPEC.md`
- `docs/ARC42.md`
- `frontend/README.md`
- `Backend/README.md`
- `docs/rubrica-cumplimiento.md`
- `docs/sonarqube.md`
- `docs/owasp.md`
- `docs/wcag.md`
- `docs/sus.md`
- `docs/evidencias/`
