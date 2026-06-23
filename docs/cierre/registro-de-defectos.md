# 4. Registro de Defectos

## 4.1. Objetivo

Documentar defectos técnicos detectados, su severidad, corrección y evidencia de validación.

## 4.2. Registro

| ID | Defecto | Severidad | Corrección | Validación | Estado |
| --- | --- | --- | --- | --- | --- |
| DEF-01 | Credencial administrativa hardcodeada. | Crítica | Variables de entorno y token de setup. | Security Rating de C a A. | Corregido |
| DEF-02 | Setup público sin secreto adicional. | Crítica | Exigir token y fallar cerrado. | Respuesta sin token documentada. | Corregido |
| DEF-03 | Administrador inactivo podía conservar acceso. | Alta | Exigir rol y perfil activo. | Pruebas de autenticación. | Corregido |
| DEF-04 | CORS demasiado amplio. | Alta | Restringir orígenes, métodos y headers. | Pruebas backend. | Corregido |
| DEF-05 | Exposición de errores internos del solver. | Alta | Mensaje genérico y logging servidor. | Pruebas del endpoint. | Corregido |
| DEF-06 | JSON inválido generaba excepciones no controladas. | Alta | Parseo controlado y HTTP 400. | Pruebas del helper. | Corregido |
| DEF-07 | Validación débil de correo y contraseña. | Alta | Reglas de formato y fortaleza. | Pruebas de usuarios. | Corregido |
| DEF-08 | Capacidad autorizada podía superar el aforo. | Alta | Validación contra capacidad total. | Pruebas de aulas. | Corregido |
| DEF-09 | Contraste insuficiente. | Media | Ajustes de color y foco. | Axe sin violaciones. | Corregido |
| DEF-10 | Regiones desplazables inaccesibles por teclado. | Media | `tabIndex`, roles y etiquetas. | Validación por teclado. | Corregido |
| DEF-11 | Landmarks y encabezados inconsistentes. | Media | Un `main` y un `h1` por vista. | Ocho rutas validadas. | Corregido |
| DEF-12 | Duplicación en CRUD y API. | Media | Helpers y componentes reutilizables. | Duplicación de 0.0% final. | Corregido |
| DEF-13 | Cobertura no importada en SonarQube. | Alta | Configurar LCOV y XML. | Cobertura de 80.1%. | Corregido |
| DEF-14 | Cypress bloqueado por variable global. | Alta | Limpiar variable en scripts. | Cypress verificado. | Corregido |
| DEF-15 | Vulnerabilidades productivas npm. | Crítica | Actualizar dependencias. | Cero vulnerabilidades finales. | Corregido |

## 4.3. Resumen

| Estado | Cantidad |
| --- | ---: |
| Corregidos | 15 |
| Total | 15 |
