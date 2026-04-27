# Frontend

Frontend del proyecto construido con `Next.js`, `React` y `TypeScript`.

Actualmente esta parte del proyecto se encarga de mostrar visualmente el horario generado por el backend.

## Que hace hoy el frontend

La interfaz actual:

- consume la API `http://localhost:8000/api/scheduling-demo`
- muestra un resumen general del resultado del modelo
- dibuja una grilla semanal con bloques por dia y hora
- colorea cada seccion para distinguirla visualmente
- permite filtrar por curso
- permite filtrar por dias
- muestra tarjetas con capacidad por curso
- muestra una lista de secciones activas

En otras palabras:

- el backend calcula la oferta horaria
- el frontend la presenta de forma visual y facil de revisar

## Archivo principal

La vista principal esta en:

- [frontend/app/page.tsx](/e:/Me/2026-1/planner-UC/frontend/app/page.tsx)

La configuracion general del layout esta en:

- [frontend/app/layout.tsx](/e:/Me/2026-1/planner-UC/frontend/app/layout.tsx)

## Tecnologias usadas

- `Next.js`
- `React`
- `TypeScript`
- `CSS` con estilos globales del proyecto

Dependencias principales definidas en [package.json](/e:/Me/2026-1/planner-UC/frontend/package.json).

## Requisito importante

Para que el frontend muestre informacion real, el backend debe estar corriendo en:

```text
http://localhost:8000
```

Y especificamente debe responder este endpoint:

```text
http://localhost:8000/api/scheduling-demo
```

Si el backend no esta levantado, el frontend mostrara un mensaje de error de conexion.

## Como correr el frontend

Desde la carpeta `frontend`, instala dependencias si hace falta:

```powershell
npm install
```

Luego inicia el servidor de desarrollo:

```powershell
npm run dev
```

La aplicacion quedara disponible en:

```text
http://localhost:3000
```

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

## Flujo actual de funcionamiento

El flujo actual es este:

1. El backend genera una solucion de horario.
2. El frontend hace una peticion a `/api/scheduling-demo`.
3. Recibe un JSON con resumen, secciones y capacidades.
4. Convierte esa respuesta en una grilla semanal y paneles visuales.

## Estructura visual actual

La pagina principal muestra:

- encabezado con estado de conexion
- datos generales de carrera, alumnos y secciones
- resumen de cursos abiertos y demanda
- grilla semanal por dias y bloques
- filtros por curso y por dias
- resumen de capacidad por curso
- panel lateral con secciones activas

## Que no hace todavia el frontend

Por ahora esta vista no:

- crea horarios desde el navegador
- edita restricciones del modelo
- lanza optimizacion manual con parametros dinamicos
- guarda configuraciones del usuario
- maneja autenticacion

Actualmente su funcion principal es visualizar el resultado del demo del backend.

## Comandos utiles

Desde `frontend`:

```powershell
npm run dev
```

Inicia el entorno de desarrollo.

```powershell
npm run build
```

Genera la version de produccion.

```powershell
npm run start
```

Levanta la aplicacion ya construida.

```powershell
npm run lint
```

Ejecuta validaciones de codigo con ESLint.

## Resumen corto

Este frontend actualmente sirve para visualizar el horario semanal generado por el backend.

No resuelve el algoritmo de horarios.
Su trabajo es consumir la respuesta del backend y presentarla como una interfaz clara, filtrable y entendible.
