# AGENTS.md

## 1. Proposito

Este documento define la constitucion operativa del sistema `Planner-UC`.

Su funcion es establecer principios, reglas globales y restricciones para cualquier agente, desarrollador o colaborador que implemente, mantenga o extienda el proyecto.

Este archivo tambien funciona como referencia principal de trabajo para agentes dentro del repositorio.

## 1.1 Vision operativa del proyecto

`Planner-UC` es un prototipo para planificacion academica universitaria y visualizacion de oferta horaria.

Stack actual:

- `frontend/`: Next.js + React + TypeScript + Supabase
- `backend/`: FastAPI + Python
- `solver`: OR-Tools con `CP-SAT`

Objetivo actual:

- gestionar datos academicos base desde el frontend
- proteger funcionalidades por autenticacion y rol
- resolver horarios desde el backend Python
- visualizar el horario generado desde una interfaz web

## 1.2 Estructura actual del repositorio

Carpetas raiz:

- `frontend/` aplicacion cliente y gestion administrativa
- `backend/` API y logica de resolucion
- `docs/` documentacion del proyecto
- `scripts/` utilitarios
- `otros/` material no central

No se debe inventar una nueva estructura raiz salvo solicitud explicita.

## 1.3 Fuentes principales de verdad

Cuando se trabaje en este proyecto, priorizar:

- `backend/app/scheduling_demo.py`
- `backend/app/scheduling_demo_data.py`
- `backend/app/main.py`
- `frontend/app/layout.tsx`
- `frontend/components/layout/app-shell.tsx`
- `frontend/app/schedule-generator/page.tsx`
- `frontend/README.md`
- `backend/README.md`
- `SPEC.md`

## 2. Principios del sistema

### 2.1 Separacion clara de responsabilidades

El sistema esta dividido en dos responsabilidades mayores:

- `frontend`
  - gestiona autenticacion
  - administra datos base del sistema
  - presenta interfaces de usuario
  - se integra con Supabase para persistencia

- `backend`
  - resuelve la generacion de horarios
  - contiene la logica de optimizacion
  - expone la solucion del solver mediante API

Ninguna capa debe absorber responsabilidades centrales de la otra sin justificacion explicita.

### 2.2 Persistencia centralizada en Supabase para gestion

La gestion de usuarios, cursos, aulas y otros datos administrativos debe persistirse en la capa de base de datos del frontend usando Supabase.

La logica de gestion no debe implementarse en el backend Python salvo que el alcance cambie de forma explicita.

### 2.3 Optimizacion como responsabilidad exclusiva del backend

La resolucion de horarios pertenece al backend Python.

El backend debe preservar su enfoque de optimizacion con restricciones y no degradarse a reglas manuales o heuristicas ad hoc salvo requerimiento explicito.

### 2.4 Seguridad por rol

Las funcionalidades administrativas deben protegerse por rol.

El administrador es el unico actor autorizado para:

- crear usuarios
- editar usuarios
- eliminar usuarios
- crear cursos
- editar cursos
- eliminar cursos
- crear aulas
- editar aulas
- eliminar aulas

### 2.5 Evolucion incremental

El sistema debe crecer en pasos pequeños, verificables y documentados.

Cada cambio funcional nuevo debe:

- conservar lo ya operativo
- mantener coherencia con la arquitectura actual
- actualizar documentacion relevante

### 2.6 Trazabilidad y consistencia documental

Toda funcionalidad implementada debe tener correspondencia con al menos uno de estos artefactos:

- `README.md`
- `frontend/README.md`
- `backend/README.md`
- `SPEC.md`
- migraciones SQL

## 3. Reglas globales

### 3.1 Reglas de arquitectura

1. El `frontend` usa `Next.js`, `React`, `TypeScript` y `Supabase`.
2. El `backend` usa `FastAPI`, `Python` y `OR-Tools CP-SAT`.
3. El `frontend` no debe reimplementar la logica de optimizacion del backend.
4. El `backend` no debe convertirse en panel administrativo de usuarios, cursos o aulas mientras el alcance actual se mantenga.
5. Los modulos CRUD deben vivir en el frontend y operar mediante rutas API internas de Next.js.

### 3.2 Reglas de seguridad

1. Toda operacion administrativa debe validar identidad y rol.
2. Ninguna ruta administrativa debe confiar solo en controles visuales del frontend.
3. La API debe validar permisos nuevamente del lado servidor.
4. El administrador no puede eliminar su propia cuenta desde la interfaz ni desde la API.
5. Las credenciales sensibles deben gestionarse por variables de entorno.

### 3.3 Reglas de datos

1. `courses`, `rooms` y `user_profiles` son fuentes de verdad para la gestion administrativa.
2. Las migraciones SQL son parte del sistema y deben mantenerse alineadas con la implementacion.
3. Las tablas deben usar restricciones e indices basicos para preservar integridad.
4. Toda insercion o actualizacion administrativa debe pasar por validaciones minimas de negocio.

### 3.4 Reglas de interfaz

1. Las vistas deben mostrar estados de `loading`, `success` y `error`.
2. La navegacion principal debe mantenerse consistente mediante sidebar compartido.
3. Las pantallas CRUD deben permitir crear, listar, editar y eliminar dentro del mismo modulo.
4. El sidebar no debe deformarse cuando el contenido principal crece.

### 3.5 Reglas de documentacion

1. Todo cambio estructural relevante debe reflejarse en README o SPEC.
2. Toda nueva tabla persistente debe incluir migracion SQL.
3. Toda nueva capacidad administrativa debe quedar reflejada en el README del frontend.

## 4. Restricciones duras

Estas restricciones no deben romperse salvo redefinicion formal del alcance.

1. El backend Python es responsable de la resolucion de horarios.
2. El frontend Next.js es responsable de autenticacion y gestion administrativa.
3. La proteccion por rol administrador es obligatoria para CRUD administrativos.
4. No se debe permitir auto-eliminacion del administrador autenticado.
5. No se debe eliminar codigo funcional sin reemplazo equivalente y validado.
6. No se debe alterar casualmente el contrato del endpoint de horarios sin actualizar consumidor y documentacion.
7. No se deben introducir dependencias o infraestructura nueva sin necesidad clara.
8. No se deben exponer claves administrativas en cliente.

## 5. Restricciones blandas

Estas reglas deben respetarse por defecto, pero pueden adaptarse con justificacion tecnica.

1. Preferir cambios pequenos y graduales sobre refactors amplios.
2. Mantener lenguaje claro y nombres consistentes entre frontend, backend y documentacion.
3. Reutilizar layout, componentes y patrones de validacion donde sea posible.
4. Favorecer legibilidad sobre cleverness.
5. Mantener la UI administrativa coherente entre modulos.
6. Priorizar consistencia de datos antes que complejidad visual.

## 6. Alcance actual reconocido por esta constitucion

El sistema soporta hoy:

- autenticacion con Supabase
- dashboard y navegacion interna
- CRUD de cursos
- CRUD de aulas
- gestion de usuarios profesor/alumno
- visualizacion del horario demo del backend

Todavia no soporta de forma completa:

- integracion real del solver con cursos y aulas persistidos
- matricula estudiante por estudiante
- asignacion de docentes al solver
- configuracion avanzada de restricciones desde UI
- generacion de horarios en tiempo real sobre datos reales persistidos

## 7. Criterio de cumplimiento

Se considera que un cambio respeta esta constitucion si:

- conserva la separacion frontend gestion / backend solver
- mantiene seguridad por rol
- respeta las restricciones duras
- actualiza documentacion cuando cambia comportamiento
- no rompe el flujo operativo actual del sistema

## 8. Estrategia de desarrollo

El trabajo debe realizarse de forma incremental.

Reglas practicas:

1. entender el comportamiento actual antes de cambiarlo
2. identificar el cambio minimo correcto
3. implementar una mejora significativa a la vez
4. verificar localmente cuando sea posible
5. actualizar documentacion si cambia el comportamiento

Evitar mezclar grandes refactors de frontend y backend en una sola iteracion salvo necesidad real.

## 9. Reglas por capa

### 9.1 Backend

Usar y preservar:

- `FastAPI`
- archivos Python modulares
- separacion clara entre construccion de datos, optimizacion y exposicion por API

Al editar la logica del solver:

- mantener restricciones explicitas
- mantener la funcion objetivo entendible
- preferir helpers legibles sobre bloques densos
- no reemplazar `CP-SAT` por heuristicas manuales salvo solicitud explicita

### 9.2 Frontend

Usar y preservar:

- componentes funcionales
- estados claros de carga, exito y error
- rutas API internas para CRUD administrativos
- interfaz entendible para gestion y visualizacion

Evitar:

- logica de negocio escondida en helpers puramente visuales
- complejidad de estado innecesaria
- cambios de contrato API sin alinear consumidor y documentacion

## 10. Reglas de documentacion

Cuando cambie el comportamiento del sistema, actualizar lo que corresponda:

- `README.md`
- `frontend/README.md`
- `backend/README.md`
- `SPEC.md`
- migraciones SQL si cambia persistencia

La documentacion debe permanecer breve, util y coherente con la implementacion.

## 11. Validacion

Antes de considerar terminado un cambio, validar lo que aplique:

- el backend sigue iniciando
- el frontend sigue iniciando
- el build del frontend sigue compilando
- las rutas API internas afectadas responden
- `/api/scheduling-demo` sigue respondiendo si no fue parte del cambio
- la documentacion sigue alineada con el comportamiento real

## 12. Prompt base para otro agente

Usar esta idea al delegar trabajo:

> Trabaja sobre Planner-UC respetando la separacion actual: `frontend` en Next.js + Supabase para autenticacion y gestion administrativa, `backend` en FastAPI + OR-Tools CP-SAT para resolucion de horarios. Realiza el cambio minimo seguro, evita refactors ajenos al objetivo, protege permisos por rol y manten la documentacion alineada.

## 13. Definicion de terminado

Una tarea se considera terminada cuando:

- el cambio solicitado esta implementado
- el comportamiento existente fuera del alcance se conserva
- las validaciones relevantes pasan o se reportan claramente
- la documentacion afectada fue actualizada
- el sistema sigue siendo entendible para futuros colaboradores
