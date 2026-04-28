# Explicación Detallada: Cómo scheduling_demo.py Usa OR-Tools CP-SAT

Este documento desglosa el código de `scheduling_demo.py` línea por línea, explicando:

- Qué parte de OR-Tools se usa
- Qué algoritmo o técnica está en juego
- Por qué se hace así
- Cómo se relaciona con CP-SAT

## Estructura General del Archivo

El archivo tiene dos funciones principales:

1. `_build_schedule_solution()` - **La función core que usa CP-SAT**
2. `solve_student_timetable_demo()` - Wrapper que formatea la salida

## Sección 1: Carga y Preparación de Datos

### Código

```python
def _build_schedule_solution() -> dict:
    data = build_demo_data()
    career_name: str = data["career_name"]
    time_slots: tuple[str, ...] = data["time_slots"]
    rooms: tuple[Room, ...] = data["rooms"]
    courses: tuple[Course, ...] = data["courses"]
    students: tuple[Student, ...] = data["students"]
    patterns_by_blocks: dict[int, tuple[tuple[str, ...], ...]] = data["patterns_by_blocks"]
    course_catalog: dict[str, dict[str, object]] = data["course_catalog"]
```

### Qué es esto en OR-Tools

**No es parte de OR-Tools directamente**, pero es crucial para preparar el problema antes de pasárselo al solver.

### Algoritmo: Procesamiento previo (Pre-processing)

1. **Validación de entrada**: Extraes los datos que necesitas
2. **Normalización**: Todos los datos están en formato consistente (tuplas, diccionarios)
3. **Acceso rápido**: Los diccionarios te permiten búsquedas O(1) después

Esto es importante porque:

- CP-SAT necesita datos limpios y organizados
- Un problema mal estructurado hace ineficiente la búsqueda del solver

---

## Sección 2: Construcción de Estructuras Lookup (Índices)

### Código

```python
room_capacity = {room.name: room.capacity for room in rooms}
course_map = {course.code: course for course in courses}
demand_by_course = {
    course.code: sum(1 for student in students if course.code in student.unlocked_courses)
    for course in courses
}
```

### Qué es esto en OR-Tools

**Ninguno de esto usa OR-Tools**, pero es parte de la **estrategia de modelado**.

### Algoritmo: Hash Table / Dictionary Lookup

1. **Acceso O(1)**: En lugar de iterar todo cada vez
2. **Agregación de demanda**: Estás contando cuántos estudiantes necesitan cada curso

Por ejemplo:

```
Demanda de "CS101" = 150 estudiantes
Demanda de "MATH201" = 120 estudiantes
```

**Importancia para CP-SAT**:

- CP-SAT necesita saber la demanda para construir restricciones
- Sin esta pre-agregación, sería lento hacer todo dentro del solver

---

## Sección 3: Cálculo de Pesos de Preferencia

### Código

```python
slot_preference_weight = {}
for slot in time_slots:
    _, hour_range = slot.split(" ", 1)
    start_hour = hour_range.split("-", 1)[0]
    slot_preference_weight[slot] = {
        "07:00": 6,
        "08:40": 4,
        "10:20": 2,
        "12:00": 0,
        "14:00": 0,
        "15:40": 2,
        "17:20": 4,
        "19:00": 6,
    }[start_hour]
```

### Qué es esto en OR-Tools

**Esto define la función objetivo** que CP-SAT va a minimizar.

### Algoritmo: Construcción de Función Objetivo (Objective Function Building)

1. **Extracción de hora**: Parseas el string del slot para obtener la hora
2. **Mapeo de preferencia**: Asignas un peso a cada hora
   - 07:00 y 19:00 (extremos): peso 6 (menos deseables)
   - 10:20 y 15:40 (intermedios): peso 2
   - 12:00 y 14:00 (mediodía): peso 0 (ideales)

### Por qué funciona esto

```
Interpretación:
- Si abres una sección a las 07:00, el solver suma 6 al costo total
- Si abres una sección a las 12:00, suma 0
- El solver minimiza el costo total
- Resultado: prefiere 12:00 sobre 07:00
```

**Algoritmo detrás**: Weighted Optimization

- Cada alternativa tiene un costo
- CP-SAT busca minimizar costo total
- Es como una búsqueda dirigida hacia soluciones mejores

---

### Código

```python
pattern_preference_weight = {
    pattern: _pattern_convenience_penalty(pattern)
    for patterns in patterns_by_blocks.values()
    for pattern in patterns
}
```

### Qué es esto

Calcula una penalización para cada patrón horario (combinación de días/horas).

### La función `_pattern_convenience_penalty()`

```python
def _pattern_convenience_penalty(pattern: tuple[str, ...]) -> int:
    slots_by_day: dict[str, list[int]] = {}

    for slot in pattern:
        day, _ = slot.split(" ", 1)
        slots_by_day.setdefault(day, []).append(_slot_start_minutes(slot))
```

**Algoritmo: Agrupación y Análisis de Gaps**

1. **Agrupación**: Agrupar los slots por día

   ```
   Lunes:    [420, 510]          (07:00, 08:30)
   Miércoles: [1020]             (17:00)
   ```

2. **Conteo de días**:

   ```python
   unique_days = len(slots_by_day)
   penalty = (unique_days - 1) * 40
   ```

   - Si está en 1 día: penalty = 0
   - Si está en 2 días: penalty = 40
   - Si está en 3 días: penalty = 80

   **Interpretación**: Penalizas distribuciones fragmentadas

3. **Análisis de gaps**:

   ```python
   for index in range(1, len(day_slots)):
       gap_minutes = day_slots[index] - day_slots[index - 1]
       if gap_minutes == 100:
           continue
       penalty += 12 + max(0, (gap_minutes - 100) // 10)
   ```

   **Algoritmo: Gap Detection**
   - `100 minutos` = 1 bloque de 90 min + 10 min descanso = ideal
   - Gap más grande = más penalización
   - Ejemplo: gap de 200 minutos = penalty 12 + 10 = 22

   **Importancia**: Favorece horarios compactos para estudiantes

---

## Sección 4: Creación del Modelo CP-SAT

### Código

```python
model = cp_model.CpModel()
```

### Qué es esto

**Esta es la puerta de entrada a OR-Tools CP-SAT.**

El modelo es el contenedor donde:

- Defines variables
- Añades restricciones
- Especificas la función objetivo

Internamente, CP-SAT:

1. Convierte tu modelo a una representación interna
2. Aplica simplificaciones
3. Prepara estructuras para el solver

**Algoritmos internos (transparentes para ti)**:

- Análisis de la estructura del problema
- Identificación de patrones que pueden optimizarse

---

## Sección 5: Creación de Variables de Decisión

### Código

```python
section_vars: dict[tuple[str, int, str, tuple[str, ...]], cp_model.IntVar] = {}

candidate_sections: list[tuple[str, int, str, tuple[str, ...]]] = []
sections_by_course: dict[str, list[tuple[str, int, str, tuple[str, ...]]]] = {
    course.code: [] for course in courses
}
```

### Qué es esto en OR-Tools

**Declaración de variables de decisión booleanas.**

Cada variable representa: "¿Abrimos esta sección específica?"

### El Loop Principal de Creación de Variables

```python
for course in courses:
    patterns = patterns_by_blocks[course.blocks_per_week]
    for section_number in range(1, course.max_sections + 1):
        for room in rooms:
            for pattern in patterns:
                section_key = (course.code, section_number, room.name, pattern)
```

**Análisis Combinatorio**:

Si tienes:

- 20 cursos
- 3 secciones máximo por curso
- 5 aulas
- 8 patrones horarios por tipo de curso

Total de variables = 20 × 3 × 5 × (promedio 5) = **1,500 variables booleanas**

### Creación de Variables

```python
section_label = (
    f"{course.code}_sec{section_number}_{room.name}_{'_'.join(pattern)}"
    .replace(" ", "_")
    .replace(":", "")
)
section_vars[section_key] = model.NewBoolVar(f"open_{section_label}")
```

**Qué sucede aquí**:

1. **Etiquetado**: Cada variable tiene un nombre único para debugging

   ```
   open_CS101_sec1_AulaA_Lun07:00_Mie10:20
   ```

2. **Creación en el modelo**: `model.NewBoolVar()` registra la variable en CP-SAT
   - CP-SAT crea estructuras internas
   - Prepara la variable para restricciones

**Algoritmo subyacente (interno de OR-Tools)**:

- SAT encoding: Cada booleano se representa como cláusulas lógicas
- Preparación para propagación de restricciones

---

## Sección 6: Restricción 1 - No Superposición en Aulas

### Código

```python
for slot in pattern:
    sections_by_room_slot.setdefault((room.name, slot), []).append(section_key)

for sections in sections_by_room_slot.values():
    model.Add(sum(section_vars[section] for section in sections) <= 1)
```

### Qué es esto

**Primera restricción importante**: En cada aula y cada bloque de tiempo, máximo 1 sección.

### Algoritmo: Constraint Propagation (Propagación de Restricciones) eliminar opciones inválidas lo antes posible sin probarlas todas

Ejemplo:

CS101 + CS102 ≤ 1

Si:

CS101 = 1

Entonces:

CS102 = 0

**Cómo funciona internamente**:

1. **Indexación por (aula, slot)**:

   ```
   ("AulaA", "Lun 07:00") -> [CS101_sec1_AulaA, CS102_sec1_AulaA, ...]
   ```

2. **Restricción lineal**:

   ```
   CS101_sec1_AulaA + CS102_sec1_AulaA + ... <= 1
   ```

   Esto significa: "Como máximo una de estas secciones puede ser 1"

3. **Propagación**:
   - Si CS101_sec1_AulaA = 1, entonces todas las otras = 0
   - CP-SAT lo hace automáticamente sin explorar combinaciones inválidas

   **Impacto**: Reduce el espacio de búsqueda dramáticamente

**Análogo en lógica SAT**:

```
¬(CS101 AND CS102)
¬(CS101 AND CS103)
...
```

---

## Sección 7: Restricción 2 - Máximo de Secciones por Curso

### Código

```python
for course in courses:
    model.Add(
        sum(section_vars[section] for section in sections_by_course[course.code])
        <= course.max_sections
    )
```

### Qué es esto

**Límite de capacidad administrativa**: Un curso no puede abrir más secciones de lo permitido.

### Algoritmo: Aggregation Constraint Ajusta los rangos posibles de una variable

Ejemplo:

x + y ≤ 10
x ≥ 7

Entonces:

y ≤ 3

1. **Suma lineal**:

   ```
   CS101_sec1_AulaA + CS101_sec1_AulaB + ... + CS101_sec3_AulaF <= 3
   ```

2. **Semántica**: Total de secciones de CS101 no excede 3

3. **CP-SAT internamente**:
   - Usa técnicas de **bound tightening**
   - Detecta si es imposible abrir todas las secciones
   - Propaga esos límites a otras restricciones

**Ejemplo de propagación**:

```
Si máximo 3 secciones de CS101 y demanda requiere 4,
entonces alguna otra sección debe reducirse o la demanda no se cubre.
CP-SAT lo detecta sin explorar todas las combinaciones.
```

---

## Sección 8: Restricción 3 - Consistencia de Numeración

### Código

```python
for course in courses:
    for section_number in range(2, course.max_sections + 1):
        previous_sections = sections_by_course_number[(course.code, section_number - 1)]
        current_sections = sections_by_course_number[(course.code, section_number)]
        model.Add(
            sum(section_vars[section] for section in current_sections)
            <= sum(section_vars[section] for section in previous_sections)
        )
```

### Qué es esto

**Restricción de lógica de negocio**: No puedes abrir sección 2 si no abriste sección 1.

### Algoritmo: Implicación Lógica
estos caminos están prohibidos, estos están permitidos… decide tú

**Forma lógica**:

```
Si (alguna_sec2 = 1) entonces (alguna_sec1 = 1)
```

**Implementación lineal**:

```
open_CS101_sec2 + open_CS101_sec2 + ... <= open_CS101_sec1 + open_CS101_sec1 + ...
```

**CP-SAT propaga así**:

1. Si sec2 = 1, el solver sabe que sec1 debe ser >= 1
2. Si sec1 = 0, el solver sabe que sec2 = 0
3. Automáticamente descarta combinaciones inválidas

**Complejidad que evita**:

- Sin esta restricción: 2^1500 combinaciones posibles
- Con esta restricción: Se elimina un factor exponencial

---

## Sección 9: Restricción 4 - Univocidad de Secciones

### Código

```python
for sections in sections_by_course_number.values():
    model.Add(sum(section_vars[section] for section in sections) <= 1)
```

### Qué es esto

**Restricción lógica**: La misma sección numerada de un curso no puede existir en múltiples aulas/patrones simultáneamente.

### Algoritmo: Exclusión Mutua (Mutex)

CS101_sec1_AulaA_LunMie
CS101_sec1_AulaB_MarJue
CS101_sec1_AulaC_Vie
A + B + C ≤ 1
Estás obligando a que cada sección tenga una sola forma válida de existir (o no existir)
**Lógica**:

```
CS101_sec1 puede ser:
- En AulaA con patrón Lun-Mie
- O en AulaB con patrón Mar-Jue
- O no abrirse
Pero NO en dos variantes a la vez.
```

**Restricción**:

```
CS101_sec1_AulaA_LunMie + CS101_sec1_AulaB_MarJue + ... <= 1
```

**Por qué es importante**:

- Evita inconsistencias en la base de datos
- Simplifica la matrícula estudiantil

---

## Sección 10: Cálculo de Capacidad y Demanda No Cubierta

### Código

```python
uncovered_demand_vars: dict[str, cp_model.IntVar] = {}
excess_capacity_vars: dict[str, cp_model.IntVar] = {}

for course in courses:
    served_capacity = sum(
        room_capacity[room_name] * section_vars[(course.code, section_number, room_name, pattern)]
        for section_number in range(1, course.max_sections + 1)
        for room_name in room_capacity
        for pattern in patterns_by_blocks[course.blocks_per_week]
    )
    uncovered = model.NewIntVar(0, demand_by_course[course.code], f"uncovered_{course.code}")
    uncovered_demand_vars[course.code] = uncovered
    model.Add(uncovered >= demand_by_course[course.code] - served_capacity)
```

### Qué es esto

**Cálculo de métricas de calidad para optimización**.

### Algoritmo: Slack Variables (Variables de Holgura) Este algoritmo mide cuántos estudiantes no tienen cupo y permite al solver reducir ese problema abriendo más secciones.

Una **slack variable** es una variable auxiliar que mide cuánto se desvía de un objetivo.

**Flujo lógico**:

1. **Capacidad servida**:

   ```
   served_capacity = sum(capacidad_aula * (sección abierta))
   ```

   Ejemplo:

   ```
   CS101: AulaA(30) + AulaB(40) = 70 capacidad total si abres ambas
   ```

2. **Demanda no cubierta**:

   ```
   uncovered >= 100 (demanda) - 70 (capacidad)
   uncovered >= 30
   ```

   Esto significa: "Como mínimo 30 estudiantes se quedan sin cupo"

3. **Variable entera auxiliar**:

   ```python
   uncovered = model.NewIntVar(0, demand_by_course[course.code], ...)
   ```

   CP-SAT puede ajustar `uncovered` para que satisfaga la restricción

**Importancia**:

- `uncovered` se usa luego en la función objetivo
- El solver minimiza este valor
- Resultado: Se abre la capacidad suficiente para cubrir demanda

---

## Sección 11: Variables de Decisión de Cursos Abiertos

### Código

```python
course_open_vars: dict[str, cp_model.IntVar] = {}

for course in courses:
    course_open = model.NewBoolVar(f"course_open_{course.code}")
    course_open_vars[course.code] = course_open
    model.Add(
        sum(section_vars[section] for section in sections_by_course[course.code]) >= course_open
    )
    model.Add(
        sum(section_vars[section] for section in sections_by_course[course.code])
        <= course.max_sections * course_open
    )
```

### Qué es esto

**Variables indicadoras**: Saber si un curso está "abierto" o no.

### Algoritmo: Linearización de Lógica Booleana
Estás obligando a que course_open sea 1 si y solo si el curso tiene al menos una sección abierta.
**Objetivo**:

- Si alguna sección de CS101 está abierta, entonces `course_open_CS101 = 1`
- Si ninguna sección de CS101 está abierta, entonces `course_open_CS101 = 0`

**Implementación lineal** (no se puede hacer directamente):

Restricción 1:

```
num_secciones_CS101 >= course_open_CS101
```

- Si course_open = 1, necesitas al menos 1 sección

Restricción 2:

```
num_secciones_CS101 <= max_sections * course_open_CS101
```

- Si course_open = 0, no puedes tener secciones

**Ejemplo**:

```
Secciones abiertas = 2
Max sections = 3

Restricción 1: 2 >= course_open  → course_open puede ser 0 o 1
Restricción 2: 2 <= 3 * course_open → course_open >= 0.67, entonces = 1

Resultado: course_open = 1
```

---

## Sección 12: Función Objetivo - El Corazón de la Optimización

### Código

```python
total_open_sections = sum(section_vars.values())

total_opened_course_codes = sum(course_open_vars.values())
total_uncovered_demand = sum(uncovered_demand_vars.values())
total_excess_capacity = sum(excess_capacity_vars.values())
total_schedule_penalty = sum(
    sum(slot_preference_weight[slot] for slot in pattern) * section_vars[section_key]
    for section_key in candidate_sections
    for pattern in [section_key[3]]
)
total_pattern_penalty = sum(
    pattern_preference_weight[pattern] * section_vars[section_key]
    for section_key in candidate_sections
    for pattern in [section_key[3]]
)

model.Minimize(
    total_uncovered_demand * 10000 + total_excess_capacity * 100 + total_open_sections * 10
    + total_schedule_penalty
    + total_pattern_penalty
    - total_opened_course_codes
)
```

### Qué es esto

**La función objetivo que define "mejor" para el solver.**

### Algoritmo: Weighted Multi-Objective Optimization
Usa las variables definidas anteriormente dentro de una ecuación ponderada para calcular un costo y minimizarlo.
El solver **minimiza** esta expresión:

```
COSTO_TOTAL = 10000 * uncovered
            + 100 * excess
            + 10 * num_secciones
            + schedule_penalty
            + pattern_penalty
            - num_cursos_abiertos
```

### Análisis de cada término

#### 1. `total_uncovered_demand * 10000`

```
Prioridad: MÁXIMA (peso 10000)
Objetivo: Cubrir demanda de estudiantes
Ejemplo: Si 500 estudiantes quedan sin cupo, costo = 500 * 10000 = 5,000,000
```

**Interpretación**: El solver prefiere abrir cualquier sección antes que dejar demanda sin cubrir.

#### 2. `total_excess_capacity * 100`

```
Prioridad: ALTA (peso 100)
Objetivo: No abrir capacidad innecesaria
Ejemplo: Si hay 200 asientos vacíos, costo = 200 * 100 = 20,000
```

**Interpretación**: Después de cubrir demanda, el solver intenta no desperdiciar asientos.

#### 3. `total_open_sections * 10`

```
Prioridad: MEDIA (peso 10)
Objetivo: Minimizar número de secciones
Ejemplo: Si abres 50 secciones, costo = 50 * 10 = 500
```

**Interpretación**: Menos secciones = menos costo administrativo.

#### 4. `total_schedule_penalty`

```
Prioridad: BAJA (peso 1)
Objetivo: Preferir horarios mejores
Ejemplo: Si abres a las 07:00 (weight 6), suma 6 al costo
```

#### 5. `total_pattern_penalty`

```
Prioridad: BAJA (peso 1)
Objetivo: Preferir patrones compactos
Ejemplo: Clase distribuida en 3 días = penalty 80
```

#### 6. `-total_opened_course_codes`

```
Prioridad: MUY BAJA (peso -1)
Objetivo: Ligeramente preferir más cursos distintos
Ejemplo: Si abres 15 cursos, costo se reduce 15
```

**Explicación**: El minus (-) es importante. Dice "el solver gana si abre muchos cursos distintos", pero solo si no sacrifica los términos más importantes.

---

### Jerarquía de Decisiones

```
┌─────────────────────────────────────────────────────┐
│ NIVEL 1 (10000): Cubrir demanda primero            │
│ "¿Cuántos estudiantes quedan sin cupo?"            │
└─────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────┐
│ NIVEL 2 (100): Evitar capacidad excedente         │
│ "¿Cuántos asientos hay vacíos?"                    │
└─────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────┐
│ NIVEL 3 (10): Minimizar secciones                  │
│ "¿Cuántas secciones abrimos?"                      │
└─────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────┐
│ NIVEL 4 (1): Mejorar h
orarios y patrones          │
│ "¿Qué horas y patrones prefiero?"                  │
└─────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────┐
│ NIVEL 5 (-1): Maximizar variedad de cursos        │
│ "¿Cuántos cursos distintos abrimos?"               │
└─────────────────────────────────────────────────────┘
```

**Ejemplo práctico**:

Opción A: Cubrir 90% demanda, muy buenos horarios
Opción B: Cubrir 95% demanda, horarios mediocres

CP-SAT elige B, porque el beneficio de cubrir más demanda (en unidades de costo) supera el costo de horarios peores.

---

## Sección 13: Configuración del Solver

### Código

```python
solver = cp_model.CpSolver()
solver.parameters.max_time_in_seconds = 10
solver.parameters.num_search_workers = 8

status = solver.Solve(model)
```

### Qué es esto

**Creación del motor de resolución y configuración de estrategia.**


#### 1. `max_time_in_seconds = 10`

```
Algoritmo: Time-Bounded Search
- CP-SAT explora el espacio de soluciones
- Cada 10 segundos, se detiene
- Devuelve la mejor solución encontrada hasta ese momento
```

**Trade-off**:

- Más tiempo = soluciones potencialmente mejores (tiempo cuadrático)
- Menos tiempo = respuesta rápida (pero subóptima)

**En este proyecto**:

- 10 segundos es un balance entre calidad y respuesta

#### 2. `num_search_workers = 8`

```
Algoritmo: Parallel Search (Búsqueda Paralela)
- CP-SAT crea 8 threads de búsqueda
- Cada thread explora diferentes ramas del árbol
- Se comunican cuando encuentran mejores soluciones
```

**Complejidad teórica**:

- Sin paralelización: O(exponencial)
- Con 8 workers: ~8x más espacio explorado en el mismo tiempo

**Impacto práctico**:

- Con 1 worker: Quizás encuentra solución al 9 segundos
- Con 8 workers: Probablemente encuentra mejor solución al 9 segundos

---

### Código

```python
status = solver.Solve(model)
if status not in (cp_model.OPTIMAL, cp_model.FEASIBLE):
    return {
        "success": False,
        "message": "No se encontro una solucion factible para el prototipo.",
    }
```

### Qué es esto

**Verificación del estado de la solución.**

### Estados posibles en CP-SAT

#### 1. `OPTIMAL`

```
Significado: CP-SAT DEMOSTRÓ que esta es la mejor solución posible
Confianza: 100%
Implicación: No hay solución mejor, matemáticamente probado
```

#### 2. `FEASIBLE`

```
Significado: CP-SAT encontró una solución válida
Confianza: ~80-90%
Implicación: Cumple todas las restricciones, pero podría haber mejor
Razón: Se acabó el tiempo antes de probar optimalidad
```

#### 3. `INFEASIBLE`

```
Significado: No existe solución que cumpla todas las restricciones
Confianza: 100%
Implicación: Las restricciones son contradictorias
Ejemplo: Pedir cubrir 1000 estudiantes pero solo tener 500 asientos disponibles
```

#### 4. `UNKNOWN`

```
Significado: CP-SAT no sabe (raro)
Confianza: 0%
Implicación: Timeout u error
```

---

## Sección 14: Extracción de Resultados

### Código

```python
open_sections = [
    section for section in candidate_sections if solver.Value(section_vars[section]) == 1
]
open_sections.sort(key=lambda item: (item[0], item[1], item[2], item[3]))
```

### Qué es esto

**Lectura de las decisiones que tomó CP-SAT.**

### Algoritmo: Solución Reconstruction

1. **Extracción de variables**:

   ```
   solver.Value(section_vars[...])
   → Devuelve 1 si la sección está abierta, 0 si no
   ```

2. **Filtrado**:

   ```python
   if solver.Value(section_vars[section]) == 1
   ```

   Solo guardamos las secciones que CP-SAT decidió abrir

3. **Ordenamiento**:

   ```
   (curso, número, aula, patrón)
   ```

   Ordenamos para presentar de forma legible

---

## Sección 15: Construcción de Resultado Final

### Código

```python
for course_code, section_number, room_name, pattern in open_sections:
    course = course_map[course_code]
    calendar_sections.append({
        "course_code": course.code,
        "course_name": course.name,
        "section": section_number,
        "room": room_name,
        "room_capacity": room_capacity[room_name],
        "time_slots": list(pattern),
    })
```

### Qué es esto

**Transformación de resultado de CP-SAT a formato de negocio.**

### Algoritmo: Output Formatting

Convertimos:

```
Input (de CP-SAT):
(course_code="CS101", section_number=1, room_name="AulaA", pattern=("Lun 07:00", "Mie 10:20"))

Output (para la API):
{
  "course_code": "CS101",
  "course_name": "Algoritmos I",
  "section": 1,
  "room": "AulaA",
  "room_capacity": 40,
  "time_slots": ["Lun 07:00", "Mie 10:20"]
}
```

**Importancia**: Los clientes de la API necesitan información completa en un formato entendible.

---

## Resumen: Algoritmos Principales de CP-SAT Usados

### En orden de importancia

| Algoritmo                                     | Parte del Código | Función                                                       |
| --------------------------------------------- | ---------------- | ------------------------------------------------------------- |
| **Propagación de Restricciones**              | Secciones 6-9    | Reduce espacio de búsqueda eliminando combinaciones inválidas |
| **SAT Solving (Booleano)**                    | Sección 5        | Representa decisiones como variables verdadero/falso          |
| **Branch and Bound**                          | Solver (13)      | Explora árbol de decisiones, poda ramas subóptimas            |
| **Programación Entera (Integer Programming)** | Secciones 10-11  | Maneja variables numéricas auxiliares (uncovered, excess)     |
| **Weighted Optimization**                     | Sección 12       | Minimiza función objetivo multi-criterio                      |
| **Slack Variables**                           | Sección 10       | Mide desviación de objetivos                                  |
| **Linearización**                             | Secciones 6-11   | Convierte restricciones lógicas a lineales                    |
| **Parallel Search**                           | Sección 13       | Usa múltiples threads para explorar más rápido                |

---

## Flujo Completo de Datos

```
Input (datos del negocio)
  ↓
[Secciones 1-4] Pre-procesamiento y cálculo de pesos
  ↓
[Sección 5] Creación de variables booleanas de decisión
  ↓
[Secciones 6-9] Adición de restricciones lógicas
  ↓
[Secciones 10-11] Definición de variables auxiliares y métricas
  ↓
[Sección 12] Definición de función objetivo
  ↓
[Sección 13] Solver intenta minimizar objetivo bajo restricciones
  │          (Usa: Propagación, Branch & Bound, SAT, Parallel Search)
  ↓
[Sección 14] Extracción de decisiones tomadas (qué secciones abrir)
  ↓
[Sección 15] Formato de salida
  ↓
Output (horario para estudiantes)
```

---

## Cómo Explicarlo en una Presentación

### Para ingenieros

> "Usamos OR-Tools CP-SAT modelando cada sección posible como variable booleana. Las restricciones eliminan combinaciones inválidas (sin choques de aula, dentro de límites administrativos). La función objetivo minimiza demanda no cubierta (prioridad máxima), luego capacidad ociosa, luego secciones innecesarias, luego calidad de horarios. CP-SAT usa propagación de restricciones, SAT solving y búsqueda de árbol paralelizada para encontrar la mejor solución en 10 segundos."

### Para administración académica

> "Un algoritmo matemático que automáticamente decide qué cursos abrir, cuántas secciones, en qué aulas y horarios, intentando cubrir toda la demanda de estudiantes, evitar aulas con espacio vacío, y preferir horarios razonables. Lo hace explorando combinaciones inteligentemente, no por fuerza bruta."

### Para estudiantes

> "La computadora decide los horarios observando: ¿cuántos estudiantes quieren cada curso? ¿cuántos asientos hay? Abre secciones donde más se necesita, evita duplicar capacidad, y prefiere horarios buenos. Todo en 10 segundos."

---

## Palabras Clave para Recordar

- **Variable booleana**: Decisión sí/no (abrir o no una sección)
- **Restricción**: Una regla que debe cumplirse (no choques de aula)
- **Función objetivo**: Lo que queremos minimizar (demanda no cubierta + otros factores)
- **Propagación**: Cuando una decisión elimina automáticamente otras opciones
- **Slack variable**: Variable auxiliar que mide desviación de un objetivo
- **Branch and bound**: Exploración inteligente del árbol de decisiones
- **Paralelización**: 8 threads buscando diferentes soluciones simultáneamente

---

## Preguntas Comunes

### P: ¿Por qué factor 10000 para uncovered_demand?

R: Para darle máxima prioridad. Cualesquiera 10 asientos vacíos (100 _ 100) valen menos que 1 estudiante sin cupo (1 _ 10000).

### P: ¿Qué pasa si es INFEASIBLE?

R: Las restricciones son imposibles de cumplir. Ejemplo: No hay suficientes aulas. Necesitarías relajar alguna restricción.

### P: ¿Por qué 8 workers y no 16?

R: Trade-off entre tiempo de ejecución y complejidad. 8 es buen balance en máquinas de 8+ cores.

### P: ¿Qué pasa en el segundo 10 si no encontró óptima?

R: Devuelve FEASIBLE. La mejor solución encontrada hasta entonces.

### P: ¿Cómo sé si la solución es buena?

R: Compara uncovered_demand. Si es 0, cubriste todo. Si es bajo, es buena.
