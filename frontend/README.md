# Frontend

Frontend del proyecto construido con `Next.js`, `React`, `TypeScript`, `Tailwind CSS` y `Supabase`.

Actualmente esta parte del sistema ya no solo visualiza el horario demo del backend. Tambien incorpora autenticacion, navegacion interna y modulos administrativos para gestionar datos academicos base.

## 1. Descripcion del sistema

Este frontend forma la capa de presentacion del sistema de planificacion academica.

Su objetivo es permitir que distintos tipos de usuario interactuen con la plataforma desde una interfaz web clara:

- iniciar sesion con usuarios autenticados en Supabase
- navegar entre modulos mediante sidebar
- visualizar el horario generado por el backend
- administrar cursos
- administrar aulas y aforo
- administrar usuarios con rol de `profesor` y `alumno`

En terminos funcionales, el frontend cubre hoy dos grandes frentes:

### a. Visualizacion del generador de horarios

La interfaz consume el endpoint del backend:

```text
http://localhost:8000/api/scheduling-demo
```

Y muestra:

- resumen del resultado del solver
- grilla semanal por dias y bloques
- secciones abiertas
- capacidad por curso
- filtros por curso y por dia

### b. Gestion administrativa

El administrador puede ingresar al panel y usar modulos CRUD para:

- `Cursos`
- `Aulas`
- `Usuarios`

Estos modulos se apoyan en rutas API internas de Next.js, que a su vez usan `Supabase` para persistencia y control de acceso.

## 2. Funcionalidades implementadas

### Autenticacion y acceso

- login con correo y contraseña
- carga de sesion actual
- proteccion de rutas privadas
- validacion de rol administrador para modulos de gestion

Archivos clave:

- [frontend/lib/auth/auth.ts](/e:/Me/2026-1/planner-UC/frontend/lib/auth/auth.ts)
- [frontend/lib/auth/auth-context.tsx](/e:/Me/2026-1/planner-UC/frontend/lib/auth/auth-context.tsx)
- [frontend/components/auth/protected-route.tsx](/e:/Me/2026-1/planner-UC/frontend/components/auth/protected-route.tsx)

### Navegacion interna

Se implemento un sidebar persistente con acceso a:

- `Dashboard`
- `Cursos`
- `Aulas`
- `Usuarios`
- `Schedule Generator`

Archivo clave:

- [frontend/components/layout/app-shell.tsx](/e:/Me/2026-1/planner-UC/frontend/components/layout/app-shell.tsx)

### CRUD de cursos

Permite:

- crear cursos
- listar cursos
- editar cursos
- eliminar cursos
- registrar datos utiles para el solver:
  - codigo
  - nombre
  - ciclo
  - bloques por semana
  - maximo de secciones
  - tipo

Archivos clave:

- [frontend/app/courses/page.tsx](/e:/Me/2026-1/planner-UC/frontend/app/courses/page.tsx)
- [frontend/app/api/courses/route.ts](/e:/Me/2026-1/planner-UC/frontend/app/api/courses/route.ts)
- [frontend/app/api/courses/[id]/route.ts](/e:/Me/2026-1/planner-UC/frontend/app/api/courses/[id]/route.ts)

### CRUD de aulas

Permite:

- crear aulas
- listar aulas
- editar aulas
- eliminar aulas
- registrar:
  - nombre
  - ubicacion
  - aforo
  - descripcion
  - estado activo/inactivo

Archivos clave:

- [frontend/app/rooms/page.tsx](/e:/Me/2026-1/planner-UC/frontend/app/rooms/page.tsx)
- [frontend/app/api/rooms/route.ts](/e:/Me/2026-1/planner-UC/frontend/app/api/rooms/route.ts)
- [frontend/app/api/rooms/[id]/route.ts](/e:/Me/2026-1/planner-UC/frontend/app/api/rooms/[id]/route.ts)

### Gestion de usuarios

El administrador puede:

- crear usuarios `profesor`
- crear usuarios `alumno`
- editar nombre, rol, estado y contraseña
- eliminar usuarios
- evitar eliminar su propia cuenta desde UI y API

Archivos clave:

- [frontend/app/users/page.tsx](/e:/Me/2026-1/planner-UC/frontend/app/users/page.tsx)
- [frontend/app/api/users/route.ts](/e:/Me/2026-1/planner-UC/frontend/app/api/users/route.ts)
- [frontend/app/api/users/[id]/route.ts](/e:/Me/2026-1/planner-UC/frontend/app/api/users/[id]/route.ts)

### Visualizacion del horario

La vista del generador permite:

- consumir datos del backend
- mostrar el horario semanal
- visualizar demanda, capacidad y secciones
- aplicar filtros de lectura

Archivo clave:

- [frontend/app/schedule-generator/page.tsx](/e:/Me/2026-1/planner-UC/frontend/app/schedule-generator/page.tsx)

## 3. Instrucciones de instalacion

## Requisitos

- `Node.js` 18 o superior
- `npm`
- proyecto Supabase configurado
- backend del proyecto disponible en `http://localhost:8000`

## Variables de entorno

El frontend requiere un archivo `.env.local` dentro de `frontend` con variables como estas:

```env
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=...
SUPABASE_SERVICE_ROLE_KEY=...
```

Notas:

- `NEXT_PUBLIC_SUPABASE_URL` y `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` se usan en cliente y servidor
- `SUPABASE_SERVICE_ROLE_KEY` se usa en rutas API administrativas de Next.js

## Instalacion de dependencias

Desde la carpeta `frontend`:

```powershell
npm install
```

## Levantar el frontend

Desde `frontend`:

```powershell
npm run dev
```

La aplicacion quedara disponible en:

```text
http://localhost:3000
```

## Build de produccion

```powershell
npm run build
```

## Ejecutar build compilado

```powershell
npm run start
```

## Tests y validaciones

```powershell
npm run lint
```

```powershell
npm run test
```

## Configuracion de base de datos

El frontend incluye migraciones SQL para Supabase en:

- [frontend/sql/migrations](/e:/Me/2026-1/planner-UC/frontend/sql/migrations)

Migraciones actuales:

1. `001_create_roles.sql`
2. `002_setup_rls_policies.sql`
3. `003_create_courses.sql`
4. `004_create_rooms.sql`

Estas migraciones crean:

- roles
- perfiles de usuario
- politicas RLS
- tabla de cursos
- tabla de aulas

## Como correr frontend y backend juntos

### 1. Levantar backend

Desde la carpeta `backend`:

```powershell
uv run uvicorn app.main:app --reload
```

Backend disponible en:

```text
http://localhost:8000
```

### 2. Levantar frontend

Desde la carpeta `frontend`:

```powershell
npm run dev
```

Frontend disponible en:

```text
http://localhost:3000
```

## 4. Arquitectura

El frontend sigue una arquitectura por capas ligera basada en `App Router` de Next.js.

### Capas principales

#### a. Capa de presentacion

Contiene paginas y componentes visuales:

- `frontend/app/*`
- `frontend/components/*`

Ejemplos:

- [frontend/app/dashboard/page.tsx](/e:/Me/2026-1/planner-UC/frontend/app/dashboard/page.tsx)
- [frontend/app/courses/page.tsx](/e:/Me/2026-1/planner-UC/frontend/app/courses/page.tsx)
- [frontend/app/rooms/page.tsx](/e:/Me/2026-1/planner-UC/frontend/app/rooms/page.tsx)
- [frontend/app/users/page.tsx](/e:/Me/2026-1/planner-UC/frontend/app/users/page.tsx)
- [frontend/app/schedule-generator/page.tsx](/e:/Me/2026-1/planner-UC/frontend/app/schedule-generator/page.tsx)

#### b. Capa de autenticacion y autorizacion

Se encarga de:

- manejar sesion
- cargar usuario actual
- proteger rutas
- validar rol administrador

Archivos:

- [frontend/lib/auth/auth.ts](/e:/Me/2026-1/planner-UC/frontend/lib/auth/auth.ts)
- [frontend/lib/auth/auth-context.tsx](/e:/Me/2026-1/planner-UC/frontend/lib/auth/auth-context.tsx)
- [frontend/lib/auth/server-auth.ts](/e:/Me/2026-1/planner-UC/frontend/lib/auth/server-auth.ts)

#### c. Capa API interna

Next.js expone endpoints internos bajo `app/api` para desacoplar la UI de la base de datos y centralizar permisos.

Rutas disponibles:

- `/api/setup`
- `/api/courses`
- `/api/courses/[id]`
- `/api/rooms`
- `/api/rooms/[id]`
- `/api/users`
- `/api/users/[id]`

#### d. Capa de persistencia

La persistencia se maneja con `Supabase`:

- cliente navegador
- cliente servidor
- cliente administrador con `service role`

Archivos:

- [frontend/utils/supabase/client.ts](/e:/Me/2026-1/planner-UC/frontend/utils/supabase/client.ts)
- [frontend/utils/supabase/server.ts](/e:/Me/2026-1/planner-UC/frontend/utils/supabase/server.ts)
- [frontend/utils/supabase/admin.ts](/e:/Me/2026-1/planner-UC/frontend/utils/supabase/admin.ts)

### Relacion con el backend

Hoy existen dos flujos:

1. `Flujo administrativo`
   - el frontend habla con sus rutas API internas
   - las rutas internas leen/escriben en Supabase

2. `Flujo de visualizacion del horario`
   - el frontend consume directamente `http://localhost:8000/api/scheduling-demo`
   - el backend devuelve la solucion demo del solver

## 5. Evidencia de integracion de funcionalidades

Actualmente ya existe integracion entre multiples piezas del sistema:

- autenticacion con Supabase
- sesion global con `AuthContext`
- proteccion de rutas con `ProtectedRoute`
- layout compartido con sidebar
- CRUD administrativos protegidos por rol
- vistas de lectura del horario provenientes del backend

Ejemplos claros de integracion:

- un administrador inicia sesion y accede a `Cursos`, `Aulas` y `Usuarios`
- las pantallas llaman a rutas `app/api/*`
- esas rutas validan que el usuario sea administrador
- luego usan `adminClient` para interactuar con Supabase
- el `schedule-generator` consume el backend Python para representar el resultado del solver

## 6. Evidencia de evolucion del sistema

El frontend evoluciono desde una vista simple de visualizacion hacia un panel mas completo.

### Etapa inicial

El frontend originalmente:

- mostraba el horario demo del backend
- no tenia autenticacion
- no tenia CRUD administrativos
- no gestionaba usuarios ni datos academicos base

### Etapa actual

Ahora el frontend:

- maneja login y sesion
- diferencia roles
- incluye dashboard y sidebar persistente
- incorpora CRUD de cursos
- incorpora CRUD de aulas
- incorpora gestion de usuarios profesor/alumno
- protege operaciones sensibles en UI y API

### Evolucion tecnica concreta

- se agrego `Supabase` como capa de autenticacion y persistencia
- se agregaron migraciones SQL versionadas
- se agregaron rutas API internas en Next.js
- se incorporo un shell visual reutilizable
- se fortalecio el control de acceso por rol

## 7. Estructura principal del frontend

```text
frontend/
├── app/
│   ├── api/
│   │   ├── courses/
│   │   ├── rooms/
│   │   ├── users/
│   │   └── setup/
│   ├── courses/
│   ├── dashboard/
│   ├── login/
│   ├── rooms/
│   ├── schedule-generator/
│   ├── setup/
│   └── users/
├── components/
│   ├── auth/
│   └── layout/
├── lib/
│   └── auth/
├── sql/
│   └── migrations/
├── types/
└── utils/
    └── supabase/
```

## 8. Resumen corto

Este frontend ya no es solo una vista del solver.

Ahora funciona como panel web del sistema, con:

- autenticacion
- rutas protegidas
- gestion academica
- gestion de usuarios
- gestion de aulas
- visualizacion del horario generado por el backend

El siguiente paso natural del proyecto seria conectar los CRUD de `cursos` y `aulas` directamente con el backend del generador, para reemplazar progresivamente la data demo hardcodeada.
