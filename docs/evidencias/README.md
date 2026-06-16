# Comentarios de evidencias no visuales

Este indice documenta las evidencias que no son capturas de pantalla. Los
archivos originales se conservan sin comentarios internos para mantenerlos como
JSON, CSV o logs validos y reproducibles.

## OWASP

| Evidencia | Comentario tecnico |
| --- | --- |
| `owasp/setup-post-without-token.json` | Respuesta real de `POST /api/setup` sin `x-setup-token`. Demuestra que el endpoint falla cerrado cuando no se entrega el secreto de configuracion inicial. |
| `owasp/security-headers.json` | Cabeceras HTTP reales obtenidas desde el frontend. Evidencia mitigaciones de configuracion segura como anti-framing, MIME sniffing, referrer policy y permisos del navegador. |
| `owasp/npm-audit.json` | Auditoria npm completa antes de correcciones. Se usa como linea base para identificar vulnerabilidades de dependencias productivas y de desarrollo. |
| `owasp/npm-audit-after.json` | Auditoria npm completa despues de correcciones. Permite comparar el estado final y documentar riesgos residuales de dependencias de desarrollo. |
| `owasp/npm-audit-production.json` | Auditoria npm productiva antes de mitigacion. Aisla vulnerabilidades que afectaban dependencias instaladas en runtime. |
| `owasp/npm-audit-production-after.json` | Auditoria npm productiva despues de mitigacion. Evidencia que el paquete productivo queda sin vulnerabilidades reportadas por `npm audit --omit=dev`. |
| `owasp/frontend-dev.log` | Log del servidor Next.js usado durante la captura de evidencias. Permite verificar que el frontend estuvo levantado localmente para ejecutar validaciones. |
| `owasp/frontend-dev.err.log` | Salida de error del servidor Next.js durante la captura. Sirve para auditar advertencias o fallos del proceso local. |
| `owasp/validation-summary.json` | Resumen automatizado de validaciones OWASP: estado de endpoint setup, cabeceras, auditorias y controles principales. |

## WCAG

| Evidencia | Comentario tecnico |
| --- | --- |
| `wcag/baseline/axe-baseline.json` | Resultado automatico inicial de axe antes de correcciones WCAG. Sirve como linea base de incumplimientos detectados automaticamente. |
| `wcag/baseline/summary.json` | Resumen inicial de paginas evaluadas, hallazgos y conteos de accesibilidad antes de mejoras. |
| `wcag/final/axe-final.json` | Resultado automatico final de axe despues de aplicar correcciones WCAG. Se usa para comparar contra la linea base. |
| `wcag/final/keyboard-final.json` | Validacion funcional de navegacion por teclado despues de correcciones. Evidencia que los flujos principales pueden recorrerse sin mouse. |
| `wcag/final/summary.json` | Resumen final de accesibilidad con paginas evaluadas, hallazgos residuales y estado de cumplimiento documentado. |

## SUS

| Evidencia | Comentario tecnico |
| --- | --- |
| `sus/formulario-sus.md` | Instrumento SUS aplicado a participantes. Incluye las preguntas usadas para recolectar percepcion de usabilidad. |
| `sus/sus-resultados.csv` | Base de respuestas recolectadas por participante. Es la fuente primaria para calcular el puntaje SUS. |
| `sus/sus-calculo.csv` | Transformacion numerica de respuestas SUS y calculo de puntaje. Permite auditar la formula aplicada. |
| `sus/sus-resumen.json` | Resumen estructurado del resultado SUS, interpretacion cuantitativa y nivel de aceptabilidad. |

## Criterio de uso

Estas evidencias respaldan los reportes:

- `docs/owasp.md`
- `docs/wcag.md`
- `docs/sus.md`
- `docs/rubrica-cumplimiento.md`

Cuando se actualice una evidencia no visual, tambien debe actualizarse este
indice si cambia su significado, metodo de generacion o interpretacion.
