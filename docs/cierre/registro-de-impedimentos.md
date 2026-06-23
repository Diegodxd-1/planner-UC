# 3. Registro de Impedimentos

## 3.1. Objetivo

Registrar obstáculos que redujeron o detuvieron temporalmente el avance del equipo, junto con su impacto y las medidas utilizadas para superarlos.

## 3.2. Registro

| ID | Periodo | Impedimento | Impacto | Acción aplicada | Evidencia | Estado |
| --- | --- | --- | --- | --- | --- | --- |
| IMP-01 | Junio de 2026 | SonarQube local no era accesible desde un runner hospedado. | Bloqueó la automatización del análisis. | Configurar un runner self-hosted. | Workflows y commits relacionados. | Resuelto |
| IMP-02 | Junio de 2026 | Los reportes de cobertura no llegaban a SonarQube. | La métrica aparecía en 0.0%. | Configurar LCOV y XML. | Cobertura final de 80.1%. | Resuelto |
| IMP-03 | Durante E2E | Una variable global impedía ejecutar Cypress. | Bloqueó las pruebas E2E. | Eliminar la variable en los scripts. | Cypress verificado. | Resuelto |
| IMP-04 | Desarrollo | Falta de datos académicos reales. | Impidió validar un escenario productivo. | Usar datos demo y declarar la limitación. | Datos demo versionados. | Abierto |
| IMP-05 | Sprints 1 y 2 | Tiempo insuficiente para el alcance completo. | Se postergaron funciones avanzadas. | Priorizar el MVP. | Backlogs y README. | Mitigado |
| IMP-06 | Junio de 2026 | Alta cantidad de issues y duplicación. | Aumentó el esfuerzo de cierre. | Refactorizar y ampliar pruebas. | Issues reducidos de 120 a cero. | Resuelto |
| IMP-07 | Junio de 2026 | Dependencias productivas vulnerables. | Bloqueó una evaluación segura. | Actualizar dependencias. | Cero vulnerabilidades productivas. | Resuelto |
| IMP-08 | Cierre | Documentos Scrum y costos desactualizados. | Dificultó medir cronograma y costo. | Reconstruir el estado en el cierre. | Informes y registros. | Mitigado parcialmente |

## 3.3. Resumen de impedimentos

| Estado | Cantidad |
| --- | ---: |
| Resuelto | 5 |
| Mitigado | 1 |
| Mitigado parcialmente | 1 |
| Abierto | 1 |
| Total | 8 |

## 3.4. Impedimentos abiertos

| Impedimento | Consecuencia | Próxima acción |
| --- | --- | --- |
| Falta de datos reales | El solver seguirá siendo demostrativo. | Conseguir un dataset anonimizado. |
| Gestión desactualizada | No habrá medición confiable de costo y cronograma. | Actualizar backlogs y costos. |
