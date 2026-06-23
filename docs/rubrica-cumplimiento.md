# Matriz de cumplimiento de rubrica

## 1. Repositorio GitHub, codigo funcional y documentacion tecnica

| Criterio | Evidencia en el repositorio | Estado |
| --- | --- | --- |
| Repositorio operativo | Rama `main`, historial de commits descriptivos, workflows GitHub Actions para CI y SonarQube. | Cumple |
| Codigo fuente completo y funcional | `frontend/` Next.js + Supabase, `backend/` FastAPI + OR-Tools, `docs/` con reportes tecnicos. | Cumple |
| Instrucciones de instalacion | `frontend/README.md`, `backend/README.md`, `frontend/sql/migrations/README.md`. | Cumple |
| Instrucciones de ejecucion | `frontend/README.md`, `backend/README.md`. | Cumple |
| Instrucciones de pruebas | `frontend/README.md`, `backend/README.md`, workflows `.github/workflows/ci.yml` y `.github/workflows/build.yml`. | Cumple |

## 2. Informe tecnico integral

| Apartado requerido | Documento principal | Evidencias |
| --- | --- | --- |
| Analisis SonarQube | `docs/sonarqube.md` | `docs/evidencias/sonarqube/` |
| Interpretacion de metricas | `docs/sonarqube.md` | Quality Gate, coverage, issues, duplicacion y deuda tecnica. |
| Analisis OWASP Top 10 2025 | `docs/owasp.md` | `docs/evidencias/owasp/` |
| Validacion WCAG | `docs/wcag.md` | `docs/evidencias/wcag/` |
| Evaluacion SUS | `docs/sus.md` | `docs/evidencias/sus/` |
| Hallazgos tecnicos y propuestas de mejora | `docs/sonarqube.md`, `docs/owasp.md`, `docs/wcag.md`, `docs/sus.md` | Matrices, riesgos residuales, checklist y mejoras implementadas/propuestas. |

## 3. Evidencias tecnicas verificables

| Tipo de evidencia | Ubicacion | Estado |
| --- | --- | --- |
| Capturas de dashboards SonarQube | `docs/evidencias/sonarqube/*.png`, `docs/evidencias/sonarqube/baseline-overall-before.jpeg` | Cumple |
| Reportes automaticos WCAG | `docs/evidencias/wcag/baseline/*.json`, `docs/evidencias/wcag/final/*.json` | Cumple |
| Capturas WCAG | `docs/evidencias/wcag/baseline/*.png`, `docs/evidencias/wcag/final/*.png` | Cumple |
| Evidencias de mitigacion OWASP | `docs/evidencias/owasp/` | Cumple |
| Resultados SUS | `docs/evidencias/sus/sus-resultados.csv`, `docs/evidencias/sus/sus-calculo.csv` | Cumple |
| Pruebas automatizadas | Frontend Jest, backend pytest, GitHub Actions | Cumple |
| Cobertura | SonarQube 80.1%, coverage frontend/backend y pruebas nuevas de helpers/CRUD | Cumple |

## 4. Cambios funcionales implementados para sustentar hallazgos

| Area | Mitigacion o mejora | Archivos principales |
| --- | --- | --- |
| SonarQube | Reduccion de duplicacion, correcciones de maintainability/reliability y coverage global superior a 80%. | Frontend/backend tests, `sonar-project.properties` y workflows. |
| OWASP | Setup protegido por token, CORS restringido, errores backend genericos, headers defensivos, validaciones JSON y dependencias productivas sin vulnerabilidades. | `backend/app/main.py`, `frontend/app/api/**`, `frontend/next.config.ts`, `frontend/package.json`. |
| WCAG | Contraste, semantica, navegacion por teclado, regiones scrollables y estados accesibles. | `frontend/components/layout/app-shell.tsx`, pantallas principales. |
| SUS | Mejoras de nomenclatura, carga informativa y ayuda contextual para contrasenas. | `frontend/components/layout/app-shell.tsx`, `frontend/components/auth/protected-route.tsx`, `frontend/app/users/page.tsx`. |

## 5. Validaciones locales finales

| Comando | Resultado |
| --- | --- |
| `npm run lint` | Correcto |
| `npm test -- --runInBand` | 25 suites, 66 tests passed |
| `npm run test:coverage -- --runInBand` | 25 suites, 66 tests passed; coverage frontend 82.09% lineas |
| `npm run build` | Correcto |
| `uv run pytest` | 39 tests passed |
| `uv run pytest --cov=app --cov-report=xml:coverage.xml` | 39 tests passed; XML generado para SonarQube |
| SonarScanner local | Quality Gate OK; coverage 80.1%; bugs 0; code smells 0; duplicacion 0.0% |
| `npm audit --omit=dev` | 0 vulnerabilidades productivas despues de mitigacion OWASP |

## 6. Evaluacion frente a nivel sobresaliente

El entregable queda alineado al nivel sobresaliente porque:

- integra analisis SonarQube, OWASP Top 10 2025, WCAG y SUS;
- contiene metricas, interpretacion tecnica, evidencia antes/despues y riesgo residual;
- incluye mitigaciones y mejoras verificables en codigo;
- incluye pruebas automatizadas reproducibles;
- conserva documentacion organizada por tema y evidencias trazables;
- mantiene el sistema funcional despues de las correcciones.

Riesgos residuales documentados:

- vulnerabilidades de dependencias de desarrollo sin impacto productivo directo;
- falta de MFA administrativo;
- logging sin alertas centralizadas;
- CSP aun parcial por compatibilidad con Next.js;
- mejoras futuras de filtros, permisos visibles y confirmaciones enriquecidas.
