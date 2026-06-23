# 2. Registro de Incidentes o Problemas

## 2.1. Objetivo

Documentar problemas reales ocurridos durante la ejecución, su prioridad, las acciones correctivas y su estado al cierre.

Este registro fue consolidado a partir de reportes técnicos, evidencias y commits. No reemplaza un sistema histórico de tickets, que no estuvo disponible durante todo el proyecto.

## 2.2. Registro

| ID | Fecha | Incidente o problema | Prioridad | Responsable | Acción correctiva | Evidencia | Estado |
| --- | --- | --- | --- | --- | --- | --- | --- |
| INC-01 | Junio de 2026 | SonarQube mostraba 0.0% de cobertura aunque existían pruebas. | Alta | Calidad / DevOps | Importar reportes Jest y pytest-cov. | Cobertura global de 80.1%. | Cerrado |
| INC-02 | 14 de junio de 2026 | El workflow falló por la importación de la configuración Jest. | Alta | Frontend / DevOps | Corregir la importación en CI. | Commit `2e256da`; pruebas posteriores aprobadas. | Cerrado |
| INC-03 | 14 de junio de 2026 | El runner hospedado no podía acceder al SonarQube local. | Alta | DevOps | Utilizar un runner self-hosted. | Análisis final ejecutado. | Cerrado |
| INC-04 | Durante E2E | Cypress fallaba por `ELECTRON_RUN_AS_NODE=1`. | Alta | Frontend / QA | Limpiar la variable antes de ejecutar Cypress. | Cypress verificado y pruebas E2E aprobadas. | Cerrado |
| INC-05 | Junio de 2026 | Existía una credencial administrativa hardcodeada. | Crítica | Seguridad / Frontend | Mover secretos al entorno y proteger el setup. | Issue de seguridad eliminado. | Cerrado |
| INC-06 | Junio de 2026 | CORS del backend demasiado amplio. | Alta | Backend | Restringir orígenes, métodos y headers. | Pruebas y reporte OWASP. | Cerrado |
| INC-07 | Junio de 2026 | El backend devolvía detalles internos del solver. | Alta | Backend | Responder mensajes genéricos y registrar el detalle. | Pruebas del endpoint. | Cerrado |
| INC-08 | Junio de 2026 | Tres vulnerabilidades productivas en npm. | Alta | Frontend / Seguridad | Actualizar dependencias. | Auditoría final con cero vulnerabilidades. | Cerrado |
| INC-09 | Junio de 2026 | La línea base WCAG presentó ocho violaciones. | Alta | Frontend / UX | Corregir contraste, foco, landmarks y ARIA. | Axe final: cero violaciones. | Cerrado |
| INC-10 | Junio de 2026 | Duplicación entre rutas y pantallas CRUD. | Media | Frontend | Extraer helpers y componentes reutilizables. | Duplicación de 6.1% a 0.0%. | Cerrado |
| INC-11 | Junio de 2026 | JSON inválido podía provocar errores 500. | Alta | Frontend API | Parseo controlado y respuesta 400. | Pruebas del helper. | Cerrado |

## 2.3. Resumen

| Estado | Cantidad |
| --- | ---: |
| Cerrados | 11 |
| Total | 11 |
