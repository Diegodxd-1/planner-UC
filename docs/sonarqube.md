# Reporte SonarQube

## 6. Actividades Tecnicas Detalladas

## 6.1. Evaluacion de Calidad de Codigo mediante SonarQube

### a. Configuracion

Para evaluar la calidad del codigo del proyecto `Planner-UC`, se configuro SonarQube como herramienta de analisis estatico sobre el repositorio GitHub del proyecto.

La configuracion aplicada fue la siguiente:

| Elemento | Configuracion |
| --- | --- |
| Herramienta | SonarQube |
| Servidor | `http://localhost:9000` |
| Proyecto | `planner-UC` |
| Project Key | `NawaCruz_planner-UC_a2b871bd-c741-4d0d-bb03-9735c53c1ec8` |
| Repositorio | `https://github.com/NawaCruz/planner-UC` |
| Rama analizada | `main` |
| Fecha del analisis | `2026-06-14 00:17:06 -0500` |
| Lineas de codigo analizadas | `7482` |
| Quality Gate | `OK` |

La integracion con GitHub Actions se realizo mediante el workflow `.github/workflows/build.yml`. El analisis se ejecuta automaticamente en cada `push` a la rama `main`.

Debido a que SonarQube se encuentra instalado localmente, el workflow fue configurado para ejecutarse en un runner self-hosted de GitHub Actions:

```yaml
runs-on: [self-hosted, Windows, X64]
```

El runner local utilizado fue `LAPTOP-67NAHUVR`. Esta configuracion fue necesaria porque un runner hospedado por GitHub no puede acceder a `localhost:9000` de la maquina local.

Adicionalmente, se configuro descarga y ejecucion explicita de SonarScanner CLI desde el workflow, para evitar fallos de compatibilidad con `Expand-Archive` en Windows PowerShell 5.1.

Evidencia tecnica del workflow ejecutado:

| Evidencia | Resultado |
| --- | --- |
| Workflow | `Build` |
| Job | `Build and analyze` |
| Runner | `LAPTOP-67NAHUVR` |
| Resultado | `success` |
| URL del run | `https://github.com/NawaCruz/planner-UC/actions/runs/27489210771` |

### b. Analisis Estatico

Se ejecuto un analisis completo del codigo fuente del Frontend y Backend. El resultado consolidado del proyecto fue:

| Metrica | Resultado | Interpretacion |
| --- | ---: | --- |
| Bugs | `0` | No se detectaron defectos clasificados como bugs por SonarQube. |
| Vulnerabilities | `1` | Existe una vulnerabilidad mayor asociada a una contrasena hardcodeada. |
| Code Smells | `110` | Hay problemas de mantenibilidad que deben priorizarse gradualmente. |
| Duplicacion de codigo | `6.1%` | La duplicacion supera el umbral ideal en algunos modulos del frontend. |
| Maintainability Rating | `A` | La mantenibilidad general es aceptable, aunque existe deuda tecnica acumulada. |
| Reliability Rating | `A` | La confiabilidad es favorable por ausencia de bugs detectados. |
| Security Rating | `C` | La calificacion de seguridad se ve afectada por la vulnerabilidad encontrada. |
| Technical Debt | `434 min` | Se estima una deuda tecnica aproximada de 7 horas y 14 minutos. |
| Cobertura de pruebas | `0.0%` | SonarQube no recibio reportes de cobertura en el analisis ejecutado. |

Distribucion de issues abiertos:

| Clasificacion | Cantidad |
| --- | ---: |
| Total de issues abiertos | `111` |
| Code Smells | `110` |
| Vulnerabilities | `1` |
| Bugs | `0` |
| Severidad critica | `5` |
| Severidad mayor | `25` |
| Severidad menor | `81` |

Reglas con mayor recurrencia:

| Regla | Cantidad | Lectura tecnica |
| --- | ---: | --- |
| `typescript:S6759` | `22` | Reglas asociadas a buenas practicas de componentes React/TypeScript. |
| `typescript:S7764` | `20` | Uso recomendado de `globalThis` en lugar de `global`. |
| `typescript:S4325` | `15` | Aserciones de tipo innecesarias. |
| `typescript:S6551` | `11` | Simplificaciones o mejoras de expresividad en TypeScript. |
| `typescript:S3358` | `9` | Expresiones condicionales anidadas que reducen legibilidad. |

### c. Interpretacion Tecnica

El resultado general del analisis es aceptable porque el Quality Gate se encuentra en estado `OK` y no se detectaron bugs. Sin embargo, el reporte evidencia tres frentes tecnicos que deben abordarse para mejorar la calidad integral del sistema.

Primero, la seguridad presentaba una vulnerabilidad mayor en la linea base:

| Archivo | Linea | Regla | Hallazgo | Esfuerzo |
| --- | ---: | --- | --- | ---: |
| `frontend/app/api/setup/route.ts` | `34` | `typescript:S2068` | Contrasena potencialmente hardcodeada | `30 min` |

Este hallazgo afectaba el `Security Rating`, que se encontraba en `C`. El problema se relacionaba con el uso de credenciales de configuracion inicial dentro del codigo fuente. La correccion aplicada movio la contrasena inicial a variables de entorno y documento las variables `INITIAL_ADMIN_EMAIL` e `INITIAL_ADMIN_PASSWORD` en `frontend/README.md`.

Segundo, la mantenibilidad concentra la mayor cantidad de observaciones. Aunque el `Maintainability Rating` global es `A`, existen `110` code smells y `434 min` de deuda tecnica. Los principales patrones detectados son complejidad cognitiva, convenciones de nombres, aserciones innecesarias, condicionales anidados y repeticion de estructuras en modulos CRUD.

Tercero, la cobertura aparece como `0.0%` porque el analisis de SonarQube no recibio reportes de cobertura del frontend ni del backend. Esto no significa necesariamente que no existan pruebas en el repositorio; significa que el workflow de SonarQube aun no esta publicando archivos de cobertura hacia el scanner.

Componentes criticos por cantidad de code smells y deuda:

| Componente | Code Smells | Deuda | Duplicacion | Lineas |
| --- | ---: | ---: | ---: | ---: |
| `frontend/app/users/page.tsx` | `12` | `60 min` | `15.4%` | `693` |
| `frontend/app/courses/page.tsx` | `10` | `47 min` | `18.4%` | `637` |
| `frontend/app/rooms/page.tsx` | `10` | `47 min` | `19.3%` | `606` |
| `frontend/lib/auth/auth-context.tsx` | `9` | `30 min` | `0.0%` | `169` |
| `frontend/app/schedule-generator/page.tsx` | `8` | `37 min` | `0.0%` | `585` |
| `frontend/app/api/users/route.ts` | `7` | `35 min` | `8.2%` | `158` |

La concentracion de deuda en `users`, `courses` y `rooms` es coherente con la estructura actual del sistema: son modulos CRUD administrativos con formularios, validaciones, estados de carga, listado, edicion y eliminacion dentro de una misma pantalla. Esta concentracion sugiere que las mejoras deben priorizar extraccion de componentes reutilizables, helpers de validacion y reduccion de duplicacion entre pantallas administrativas, sin cambiar la separacion arquitectonica definida para el proyecto.

### d. Evidencias Obligatorias

#### 1. Capturas de dashboard

Evidencia pendiente de adjuntar como imagen dentro de `docs/`:

| Captura requerida | Estado |
| --- | --- |
| Dashboard principal de SonarQube | Pendiente |
| Vista de issues abiertos | Pendiente |
| Vista del Quality Gate | Pendiente |
| Vista de componentes criticos | Pendiente |

Dashboard local:

```text
http://localhost:9000/dashboard?id=NawaCruz_planner-UC_a2b871bd-c741-4d0d-bb03-9735c53c1ec8
```

#### 2. Metricas antes y despues de correcciones

Linea base actual:

| Metrica | Antes de correcciones |
| --- | ---: |
| Bugs | `0` |
| Vulnerabilities | `1` |
| Code Smells | `110` |
| Duplicacion de codigo | `6.1%` |
| Maintainability Rating | `A` |
| Reliability Rating | `A` |
| Security Rating | `C` |
| Technical Debt | `434 min` |
| Cobertura de pruebas | `0.0%` |

Metricas despues de correcciones verificadas por SonarQube el `2026-06-14`:

| Metrica | Despues de correcciones | Variacion esperada |
| --- | ---: | --- |
| Bugs | `0` | Se mantiene en `0` |
| Vulnerabilities | `0` | Se reduce de `1` a `0` |
| Code Smells | `0` | Se reduce de `110` a `0` |
| Duplicacion de codigo | `6.4%` | Queda pendiente reducir duplicacion en modulos CRUD |
| Maintainability Rating | `A` | Se mantiene en `A` |
| Reliability Rating | `A` | Se mantiene en `A` |
| Security Rating | `A` | Mejora de `C` a `A` |
| Technical Debt | `0 min` | Se reduce desde `434 min` |
| Cobertura de pruebas | `0.0%` | Queda pendiente integrar reportes de cobertura al scanner |

Distribucion de issues despues de correcciones:

| Clasificacion | Cantidad |
| --- | ---: |
| Total de issues abiertos | `0` |
| Code Smells | `0` |
| Vulnerabilities | `0` |
| Bugs | `0` |
| Severidad critica | `0` |
| Severidad mayor | `0` |
| Severidad menor | `0` |

#### 3. Reporte tecnico de analisis

El analisis SonarQube confirma que el proyecto se encuentra en un estado funcionalmente aceptable para continuar evolucionando, pero requiere correcciones tecnicas verificables en seguridad, mantenibilidad y trazabilidad de pruebas.

Correcciones tecnicas aplicadas:

1. Eliminacion de la contrasena hardcodeada detectada en `frontend/app/api/setup/route.ts`.
2. Reduccion de complejidad cognitiva en `Backend/app/scheduling_demo.py` y `Backend/app/scheduling_demo_data.py`.
3. Normalizacion de validaciones y conversiones en rutas API administrativas de usuarios.
4. Simplificacion de condicionales anidados en rutas y pantallas del frontend.
5. Ajustes de convenciones TypeScript/React reportadas por SonarQube, incluyendo `globalThis`, props `Readonly`, keys estables y memoizacion del contexto de autenticacion.
6. Verificacion local con `npm run lint`, `npm run build`, `npm test -- --runInBand`, `python -m compileall` y SonarScanner CLI.

#### 4. Evidencia de reduccion de deuda tecnica

Evidencia verificada en la iteracion de correccion:

| Indicador | Antes | Despues | Resultado |
| --- | ---: | ---: | --- |
| Vulnerabilidades | `1` | `0` | Vulnerabilidad eliminada |
| Code Smells | `110` | `0` | Reduccion de `110` hallazgos |
| Issues abiertos | `111` | `0` | Reduccion de `111` issues |
| Severidad critica | `5` | `0` | Sin issues criticos abiertos |
| Security Rating | `C` | `A` | Seguridad normalizada |
| Technical Debt | `434 min` | `0 min` | Reduccion de `434 min` |

Queda pendiente adjuntar capturas del dashboard actualizado y publicar reportes de cobertura hacia SonarQube.

## Pendiente

Los puntos `6.2`, `6.3`, `6.4` y `6.5` se desarrollaran en secciones separadas cuando se aborden OWASP Top 10 2025, WCAG, SUS y testing automatizado.
