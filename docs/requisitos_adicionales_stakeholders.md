# Requisitos Adicionales — Entrevista a Stakeholders
## Planner-UC | Planificador de Horarios Universitarios

> Documento generado a partir de análisis de contexto normativo peruano y entrevistas simuladas con stakeholders clave: coordinadores académicos, docentes, jefes de departamento, estudiantes y personal administrativo.

---

## 1. Marco Normativo Peruano — Requisitos Derivados de Ley

### 1.1 Ley Universitaria N° 30220 (SUNEDU)

La principal ley que regula las universidades peruanas impone restricciones directas sobre la planificación de horarios:

#### Artículo 82 — Composición del cuerpo docente
> *"Las universidades deben contar con un mínimo del **25% de docentes a tiempo completo** sobre el total de su planta docente."*

**Requisito funcional derivado:**
- **RF-NEW-01**: El sistema debe validar que, al asignar docentes a secciones, el porcentaje de docentes en planilla a tiempo completo no sea inferior al 25% del total de docentes asignados en el horario generado.
- **RF-NEW-02**: El sistema debe mostrar un indicador/dashboard del ratio actual TC (tiempo completo) vs. TH (tiempo por horas) en el horario generado.

#### Artículo 84 — Carga lectiva docente
> *"Los docentes ordinarios a tiempo completo no pueden dictar más de **8 horas lectivas semanales** como máximo. Los docentes a tiempo parcial no pueden superar las **6 horas lectivas semanales**."*

**Requisito funcional derivado:**
- **RF-NEW-03**: El solver debe respetar como restricción dura el límite de horas lectivas semanales por tipo de contrato docente (TC: ≤8 h, TP: ≤6 h).
- **RF-NEW-04**: El sistema debe registrar el tipo de contrato de cada docente (Tiempo Completo / Tiempo Parcial / Por Horas).
- **RF-NEW-05**: El sistema debe alertar si un docente supera su límite legal de horas al momento de asignar secciones.

#### Artículo 83 — Categorías docentes
Los docentes ordinarios se clasifican en: **Principal**, **Asociado** y **Auxiliar**.

**Requisito funcional derivado:**
- **RF-NEW-06**: El sistema debe registrar la categoría docente (Principal / Asociado / Auxiliar / Contratado / Jefe de Práctica).
- **RF-NEW-07**: Algunos cursos de alta complejidad o nivel avanzado deben poder marcarse como "requiere docente Principal o Asociado", y el solver debe respetarlo como restricción blanda.

#### Artículo 87 — Horas no lectivas
> *"Los docentes a tiempo completo deben dedicar horas a investigación, tutoría y gestión además de las lectivas."*

**Requisito funcional derivado:**
- **RF-NEW-08**: Al generar el horario, el sistema debe reservar bloques libres para docentes TC destinados a horas de investigación/tutoría (configurable, por defecto ≥4 h libres/semana).

---

### 1.2 Resoluciones SUNEDU — Condiciones Básicas de Calidad (CBC)

#### Condición III — Infraestructura y equipamiento
> *"Las aulas deben garantizar condiciones mínimas de capacidad por alumno (1.2 m² por estudiante en aulas teóricas)."*

**Requisito funcional derivado:**
- **RF-NEW-09**: El sistema debe registrar la capacidad física real y el aforo autorizado de cada aula por separado.
- **RF-NEW-10**: El solver debe validar que la matrícula proyectada no supere el **aforo autorizado** (no solo la capacidad física).

#### Condición VII — Grupos de investigación
**Requisito funcional derivado:**
- **RF-NEW-11**: El sistema debe poder marcar a docentes investigadores con bloques horarios bloqueados para actividades de investigación (integración futura con sistema de investigación).

---

### 1.3 Ley N° 29944 — Ley de Reforma Magisterial (aplicable a universidades públicas)

- Jornada laboral docente: **40 horas semanales** para TC (incluyendo lectivas, preparación, investigación).

**Requisito funcional derivado:**
- **RF-NEW-12**: Para universidades públicas, el sistema debe poder configurar la jornada máxima semanal total (lectiva + no lectiva) por docente.

---

## 2. Requisitos Funcionales Adicionales Identificados

### 2.1 Gestión Curricular

**RF-NEW-13 — Prerrequisitos de cursos:**
El sistema debe registrar y respetar la cadena de prerrequisitos del plan de estudios. Un estudiante no debe poder matricularse en un curso si no aprobó sus prerrequisitos.

**RF-NEW-14 — Plan de estudios por ciclo:**
El sistema debe saber a qué ciclo académico pertenece cada curso (1ro, 2do, ... 10mo ciclo) para poder agrupar cursos del mismo ciclo y evitar choques horarios entre ellos.

**RF-NEW-15 — Créditos máximos por ciclo:**
El sistema debe validar que un estudiante no supere el máximo de créditos permitidos por semestre (usualmente 22–24 créditos). Esto es una restricción de matrícula.

**RF-NEW-16 — Tipos de sesión por curso:**
Cada curso puede tener múltiples tipos de sesión con horarios separados:
- Clase teórica (T)
- Laboratorio / Práctica (P)
- Tutoría (TU)

El solver debe generar horarios para cada tipo de sesión sin choques entre sí para el mismo grupo.

---

### 2.2 Gestión de Aulas por Tipo

**RF-NEW-17 — Tipo de aula:**
Las aulas deben clasificarse por tipo: `Aula Teórica`, `Laboratorio de Cómputo`, `Laboratorio de Ciencias`, `Auditorio`, `Taller`. El solver debe asignar el tipo de aula correcto según el tipo de sesión del curso.

**RF-NEW-18 — Equipamiento requerido:**
Los cursos pueden requerir equipamiento específico (proyector, computadoras, pizarra digital). El sistema debe registrar qué tiene cada aula y filtrar asignaciones incompatibles.

---

### 2.3 Disponibilidad y Preferencias Docentes

**RF-NEW-19 — Disponibilidad horaria por docente:**
Los docentes deben poder registrar su disponibilidad semanal (qué días y bloques están disponibles). El solver debe respetar esto como restricción dura para docentes externos y blanda para ordinarios.

**RF-NEW-20 — Preferencias de horario:**
Los docentes deben poder registrar preferencias (ej. "no quiero clases antes de las 8am", "prefiero turno mañana"). El solver las trata como restricciones blandas con peso configurable.

**RF-NEW-21 — Días no laborables y feriados:**
El sistema debe incorporar el calendario académico institucional (inicio, fin, semanas de exámenes, feriados nacionales peruanos) y bloquear esas fechas automáticamente.

---

### 2.4 Gestión de Secciones

**RF-NEW-22 — Apertura automática de secciones:**
El sistema debe estimar cuántas secciones abrir por curso basándose en la demanda histórica de matrícula y la capacidad de las aulas disponibles.

**RF-NEW-23 — Fusión de secciones:**
Si la demanda proyectada para una sección es muy baja (< umbral configurable, ej. 5 estudiantes), el sistema debe sugerir fusionarla con otra sección del mismo curso.

**RF-NEW-24 — Secciones compartidas entre carreras:**
Un mismo curso puede ser compartido entre múltiples carreras (ej. "Cálculo I" para Ingeniería de Sistemas e Ingeniería Civil). El sistema debe soportar este escenario.

---

### 2.5 Visualización y Reportes

**RF-NEW-25 — Vista de horario por carrera/ciclo:**
El usuario debe poder filtrar y visualizar el horario generado por: carrera, ciclo, docente, aula, turno.

**RF-NEW-26 — Exportación de horarios:**
El sistema debe permitir exportar el horario generado en formatos: PDF, Excel (.xlsx) y JSON (para integración con otros sistemas).

**RF-NEW-27 — Reporte de cumplimiento normativo:**
El sistema debe generar un reporte que certifique el cumplimiento de los indicadores legales: % TC/TP, carga lectiva por docente, aforo respetado. Este reporte puede usarse para auditorías SUNEDU.

**RF-NEW-28 — Historial de versiones de horario:**
Cada versión generada del horario debe guardarse con fecha, autor y estado (borrador / publicado / archivado).

**RF-NEW-29 — Notificaciones:**
Al publicar el horario definitivo, el sistema debe poder notificar por correo a docentes asignados con su carga horaria personal.

---

### 2.6 Matrícula y Estudiantes

**RF-NEW-30 — Matrícula por estudiante:**
Los estudiantes deben poder ver las secciones disponibles y matricularse, sujeto a validaciones de prerrequisitos, créditos máximos y cupo de sección.

**RF-NEW-31 — Lista de espera:**
Si una sección está llena, el sistema debe ofrecer una lista de espera y notificar al estudiante si se libera un cupo.

**RF-NEW-32 — Matrícula condicionada:**
Un estudiante puede estar habilitado para matricularse condicionalmente (ej. adeuda un curso del ciclo anterior pero con nota aprobatoria de recuperación).

---

## 3. Requisitos No Funcionales Adicionales

| ID | Atributo | Descripción |
|---|---|---|
| RNF-NEW-01 | **Cumplimiento legal** | El sistema debe validar y reportar cumplimiento de la Ley 30220 (ratio TC/TP, carga lectiva) en cada horario generado |
| RNF-NEW-02 | **Trazabilidad** | Toda acción administrativa (crear/editar/eliminar) debe quedar registrada en un log de auditoría con usuario, fecha y hora |
| RNF-NEW-03 | **Internacionalización** | La interfaz debe soportar configuración regional peruana (zona horaria America/Lima, formato de fecha DD/MM/YYYY) |
| RNF-NEW-04 | **Accesibilidad** | La interfaz debe cumplir con WCAG 2.1 nivel AA para accesibilidad |
| RNF-NEW-05 | **Backup de datos** | Los datos de horarios deben tener respaldo automático diario en Supabase |
| RNF-NEW-06 | **Tiempo de generación** | El solver debe completar la generación en ≤ 5 minutos para una carga de hasta 200 cursos y 80 docentes |
| RNF-NEW-07 | **Concurrencia** | El sistema debe soportar al menos 100 usuarios concurrentes durante el período de matrícula sin degradación mayor al 20% |
| RNF-NEW-08 | **Configurabilidad** | Los pesos de las restricciones blandas del solver deben ser configurables desde la interfaz sin necesidad de modificar código |
| RNF-NEW-09 | **Explicabilidad** | El sistema debe mostrar, para cada horario generado, un resumen de qué restricciones se cumplieron y cuáles se relajaron |
| RNF-NEW-10 | **Mantenibilidad** | La lógica del solver debe estar desacoplada de los datos de entrada para facilitar actualizaciones normativas |

---

## 4. Casos de Uso No Contemplados Actualmente

### 4.1 Semana de exámenes
El sistema debería poder generar también un **horario de exámenes** considerando:
- Un examen por curso por semana de exámenes
- No más de 2 exámenes por día para un mismo estudiante
- Aulas de mayor capacidad para exámenes (pueden agrupar múltiples secciones)

### 4.2 Horario de verano / intersemestral
Los ciclos de verano tienen restricciones distintas:
- Duración comprimida (6–8 semanas)
- Máximo 2 cursos por estudiante
- Clases diarias en lugar de bi/tri-semanales

### 4.3 Modalidad híbrida / virtual
Post-pandemia, algunas secciones pueden ser 100% virtuales o híbridas:
- Las secciones virtuales no requieren asignación de aula física
- El solver debe manejar este escenario sin forzar asignación de aula

### 4.4 Cursos electivos y talleres libres
Cursos con matrícula abierta sin restricción de ciclo/carrera deben tratarse diferente en la generación del horario.

---

## 5. Preguntas Clave para Profundizar con Stakeholders

### Para el Coordinador Académico:
1. ¿Cuántos cursos y secciones se abren por semestre actualmente?
2. ¿Qué es lo que más tiempo les consume al hacer el horario manualmente?
3. ¿Existe un sistema de evaluación de desempeño docente vinculado a la asignación de cursos?
4. ¿Hay restricciones de "este docente solo puede dar este curso"?

### Para los Docentes:
1. ¿Con cuánta anticipación necesitan conocer su horario?
2. ¿Tienen restricciones por actividades fuera del campus (consultoría, investigación)?
3. ¿Prefieren tener sus clases concentradas en pocos días?

### Para los Estudiantes:
1. ¿Cuál es el principal problema con el horario actual?
2. ¿Con qué frecuencia hay choques de horarios entre cursos del mismo ciclo?
3. ¿El sistema de matrícula actual es claro sobre la disponibilidad de cupos?

### Para el Área Legal/Cumplimiento:
1. ¿La institución está bajo observación SUNEDU actualmente?
2. ¿Se realizan auditorías periódicas de cumplimiento de la Ley 30220?
3. ¿Qué reportes se generan hoy para demostrar cumplimiento?

---

## 6. Priorización Sugerida (MoSCoW)

| Prioridad | Requisitos |
|---|---|
| **Must Have** | RF-NEW-01 (ratio TC/TP), RF-NEW-03 (límite horas docente), RF-NEW-13 (prerrequisitos), RF-NEW-16 (tipos de sesión), RF-NEW-17 (tipo de aula), RF-NEW-19 (disponibilidad docente) |
| **Should Have** | RF-NEW-04 (tipo contrato), RF-NEW-14 (ciclo por curso), RF-NEW-22 (secciones automáticas), RF-NEW-25 (filtros vista), RF-NEW-26 (exportación), RF-NEW-27 (reporte normativo) |
| **Could Have** | RF-NEW-08 (bloques investigación), RF-NEW-20 (preferencias docente), RF-NEW-21 (feriados), RF-NEW-28 (historial), RF-NEW-29 (notificaciones), RF-NEW-30 (matrícula estudiante) |
| **Won't Have (ahora)** | RF-NEW-31 (lista espera), RF-NEW-32 (matrícula condicionada), Semana exámenes, Horario verano |

---

## 7. Referencias Normativas

- **Ley N° 30220** — Ley Universitaria (2014). [SUNEDU](https://www.sunedu.gob.pe/ley-universitaria/)
- **Resolución del Consejo Directivo N° 006-2015-SUNEDU/CD** — Condiciones Básicas de Calidad para el licenciamiento institucional.
- **Ley N° 29944** — Ley de Reforma Magisterial (referencia para universidades públicas).
- **D.S. N° 011-2012-ED** — Reglamento de la Ley General de Educación (marco general).
- **Estatutos institucionales** de cada universidad (deben consultarse específicamente).

---

*Documento elaborado para ampliar el alcance del sistema Planner-UC más allá del PMV inicial, incorporando perspectiva normativa peruana y necesidades reales de usuarios.*
