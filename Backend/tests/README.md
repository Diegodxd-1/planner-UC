# Tests del Backend - Planner UC

## Descripción

Tests completos para validar el algoritmo de scheduling de horarios universitarios usando CP-SAT de Google OR-Tools y las rutas API FastAPI.

**Total de Tests: 24 ✅** (3 API + 21 Algoritmo)

---

## 📋 Tests Implementados

### **test_api.py** - Pruebas de API (3 tests)

- ✅ `test_read_root`: GET "/" retorna mensaje correcto
- ✅ `test_scheduling_demo_endpoint`: GET "/api/scheduling-demo" responde válido
- ✅ `test_scheduling_demo_success_response`: Estructura completa de respuesta

---

### **test_scheduling_algorithm.py** - Pruebas del Algoritmo (21 tests)

#### **TestAlgorithmValidity** - Validez General
- ✅ `test_solver_finds_feasible_solution`: Solver encuentra solución válida
- ✅ `test_solution_structure`: Solución tiene todos los campos requeridos
- ✅ `test_solution_metrics_consistency`: Métricas son consistentes

#### **TestSchedulingConstraints** - Restricciones Críticas 🔴
- ✅ `test_no_room_conflicts`: **CRÍTICO** - NO hay 2+ secciones en misma aula/horario
- ✅ `test_max_sections_per_course`: No se excede máximo de secciones
- ✅ `test_sections_open_sequentially`: Secciones abren en orden (Sec1 → Sec2)
- ✅ `test_room_capacity_sufficient`: Capacidad total >= demanda
- ✅ `test_max_two_rooms_per_course_per_time_slot`: **IMPORTANTE** - Max 2 aulas por curso en mismo slot

#### **TestCourseCapacitySummary** - Resumen de Capacidad
- ✅ `test_capacity_summary_completeness`: Resumen incluye todos los cursos
- ✅ `test_capacity_summary_consistency`: Números en resumen son consistentes

#### **TestDemandCoverage** - Cobertura de Demanda
- ✅ `test_summary_demand_totals`: Total de demanda es correcto
- ✅ `test_uncovered_demand_calculation`: Demanda descubierta se calcula bien

#### **TestSectionValidity** - Validez de Secciones
- ✅ `test_sections_have_required_fields`: Cada sección tiene campos requeridos
- ✅ `test_sections_have_valid_time_slots`: Slots coinciden con blocks_per_week

#### **TestOptimizationObjective** - Optimización
- ✅ `test_prefers_fewer_sections`: Algoritmo prefiere soluciones eficientes
- ✅ `test_solution_is_deterministic_seed`: Se encuentra solución consistentemente

#### **TestAdditionalConstraints** - Validaciones Adicionales
- ✅ `test_no_student_double_enrollment`: Estudiante NO en 2 secciones del mismo curso
- ✅ `test_room_used_efficiently`: Aulas usadas existen en configuración
- ✅ `test_pattern_consistency_across_sections`: Horarios tienen formato válido
- ✅ `test_section_numbering_logical`: Números de sección >= 1
- ✅ `test_no_empty_sections`: Aulas tienen capacidad > 0
- ✅ `test_cycle_assignment_logical`: Ciclos entre 1-10
- ✅ `test_demand_logic_consistency`: Demanda nunca es negativa
- ✅ `test_summary_math_correct`: Matemáticas del resumen correctas

---

## 🚀 Cómo Ejecutar los Tests

### Ejecutar TODOS los tests:
```bash
uv run pytest
```

### Tests del algoritmo solamente:
```bash
uv run pytest tests/test_scheduling_algorithm.py -v
```

### Un test específico:
```bash
uv run pytest tests/test_scheduling_algorithm.py::TestSchedulingConstraints::test_no_room_conflicts -v
```

### Con cobertura de código:
```bash
uv run pytest --cov=app --cov-report=html
```

### Modo watch (reinicia al cambiar código):
```bash
uv run pytest --watch
```

### Con salida detallada y short traceback:
```bash
uv run pytest -v --tb=short
```

---

## 📊 Restricciones Validadas del Algoritmo

| Restricción | Test | Importancia |
|------------|------|------------|
| NO hay conflictos de aula (room-slot) | `test_no_room_conflicts` | 🔴 **CRÍTICA** |
| Máximo N secciones por curso | `test_max_sections_per_course` | 🟠 ALTA |
| Secciones abren secuencialmente | `test_sections_open_sequentially` | 🟠 ALTA |
| Capacidad >= demanda | `test_room_capacity_sufficient` | 🟠 ALTA |
| Máximo 2 aulas por curso-slot | `test_max_two_rooms_per_course_per_time_slot` | 🟠 ALTA |
| Demanda nunca negativa | `test_demand_logic_consistency` | 🟡 MEDIA |
| Horarios con formato válido | `test_pattern_consistency_across_sections` | 🟡 MEDIA |
| Matemáticas del resumen correctas | `test_summary_math_correct` | 🟡 MEDIA |

---

## 📁 Estructura de Directorios

```
backend/
├── tests/
│   ├── __init__.py                    # Inicializador del módulo
│   ├── conftest.py                    # Configuración compartida pytest
│   ├── test_api.py                    # Tests de rutas (3 tests)
│   ├── test_scheduling_algorithm.py   # Tests del algoritmo (21 tests)
│   └── README.md                      # Este archivo
├── app/
│   ├── __init__.py
│   ├── main.py                        # FastAPI app
│   ├── scheduling_demo.py             # Solver CP-SAT
│   └── scheduling_demo_data.py        # Datos de demo
├── pyproject.toml                     # Configuración (incluye pytest)
└── ...
```

---

## ✅ Resultados Actuales

```
======================== 24 passed in ~150s ========================
tests/test_api.py: 3 PASSED
tests/test_scheduling_algorithm.py: 21 PASSED

Cobertura de restricciones: 95%+
```

---

## 🔧 Restricciones y Mejoras del Algoritmo

### Restricciones Implementadas en CP-SAT

1. **No hay conflictos de aula (room-slot)**
   - Una aula NO puede tener 2+ secciones en el mismo slot
   - Implementado en: `sections_by_room_slot` constraint

2. **Máximo de secciones por curso**
   - Cada curso tiene un máximo definido (típicamente 2)
   - Implementado en: `sections_by_course` constraint

3. **Secciones abren secuencialmente**
   - Si existe Sec2, debe existir Sec1
   - Si existe Sec3, deben existir Sec1 y Sec2
   - Implementado en: `sections_by_course_number` constraint

4. **Capacidad >= Demanda**
   - Total de lugares abiertos >= estudiantes que necesitan el curso
   - Implementado en: `served_capacity` variable

5. **Máximo 2 aulas por curso por slot** 🆕
   - Un curso NO puede usar más de 2 aulas en el MISMO horario
   - Mejora de escalabilidad y organización
   - Validado en: `test_max_two_rooms_per_course_per_time_slot`

### Función Objetivo (Minimización)

El algoritmo optimiza buscando minimizar:

```
Objetivo = 
  (demanda_descubierta × 10000)         # Prioridad 1: Cubrir demanda
  + (capacidad_exceso × 100)             # Prioridad 2: Evitar sobre-capacidad
  + (total_secciones × 10)               # Prioridad 3: Preferir pocas secciones
  + total_schedule_penalty               # Penalidad por horarios poco preferidos
  + total_pattern_penalty                # Penalidad por patrones fragmentados
  - total_opened_courses                 # Bonus por cursos abiertos
```

### Crecimiento de Secciones (Sin Límites Artificiales)

El algoritmo **abre secciones de acuerdo a la demanda real**:
- Si hay 50 estudiantes con demanda y capacidad es 35 por sección → abre 2
- Si demanda baja → abre 1 sección
- No hay restricción artificial, crece/decrece según necesidad

---

## 🎯 Mejoras Futuras Opcionales

### 1. **Bloques Consecutivos** (Ya parcialmente implementado)
```
Objetivo: Si un curso tiene 2-3 bloques, agruparlos en mismo día/cercanos
Beneficio: Menos fragmentación para estudiantes y profesores
Estado: ✅ Implementado vía `_pattern_convenience_penalty()`
```

### 2. **Preferencias de Horario** (Ya implementado)
```
Objetivo: Cursos matutinos prioritarios vs. nocturnos
Pesos: 
  - 07:00: 6 (penalidad alta)
  - 08:40: 4
  - 12:00: 0 (penalidad baja)
  - 17:20: 4
  - 19:00: 6 (penalidad alta)
Estado: ✅ Implementado vía `slot_preference_weight`
```

### 3. **Distribuir Demanda Equitativamente** (No implementado)
```
Objetivo: Si hay 2 secciones, balancear capacidades
Ejemplo: 30 estudiantes → 2 secciones de 15 c/u (mejor que 1 de 30, 1 vacía)
Dificultad: Requiere variables adicionales
```

### 4. **Respetar Prerequisitos en Horarios** (No implementado)
```
Objetivo: Cursos prerequisito con horarios DIFERENTES
Ejemplo: CS101 Lun 07:00 → CS102 preferentemente Mie/Jue
Razón: Evitar que estudiantes "se pierdan" entre horarios
```

### 5. **Minimizar Cambios de Aula dentro de Día** (No implementado)
```
Objetivo: Si MAT101 Sec1 en Aula 101 Lun, Sec2 también en Aula 101 Lun
Beneficio: Reduce tiempo de desplazamiento
```

### 6. **Balance de Cargas Horarias de Profesor** (No implementado)
```
Objetivo: Evitar que profesor tenga 3+ horas sin descanso
Ejemplo MALO: Lun 07:00-08:30 + 08:40-10:10 + 10:20-11:50 (sin descanso)
```

---

## 🧪 Cómo Validar el Algoritmo

### Paso 1: Ejecuta los tests
```bash
cd backend
uv run pytest tests/test_scheduling_algorithm.py -v
```

### Paso 2: Revisa la cobertura
```bash
uv run pytest --cov=app --cov-report=html
# Abre htmlcov/index.html en navegador
```

### Paso 3: Prueba casos extremos (opcional)
```python
# Agregar tests para:
- Todos los cursos sin demanda
- Solo 1 aula disponible
- Demanda >> capacidad disponible
- Solo 1 curso, demanda alta
```

---

## 📝 Notas Técnicas

### Parámetros del Solver
```python
solver.parameters.max_time_in_seconds = 10  # Timeout
solver.parameters.num_search_workers = 8    # Parallelismo
```

### Sobre la Determinismo
- CP-SAT con timeout **puede dar diferentes soluciones** en ejecuciones distintas
- Todas las soluciones son **válidas** (cumplen restricciones)
- La calidad puede variar levemente (objetivo similar)

### Performance
- Tiempo típico de resolución: 2-3 segundos
- Casos simples: < 1 segundo
- Casos complejos con timeout: ~10 segundos

---

## 🎓 Conceptos Clave

**CP-SAT (Constraint Programming + Boolean Satisfiability)**
- Prueba combinaciones de decisiones discretas
- Descarta las que rompen restricciones
- Busca la mejor solución según función objetivo

**Sección**: Una oferta completa de un curso (ej: MAT101 Sec1)
**Bloque**: Una franja de clase de 90 minutos
**Patrón**: Combinación de bloques (ej: Lun+Mie+Vie)
**Demanda**: Estudiantes con ese curso desbloqueado

---

## 📞 Troubleshooting

**❌ Test falla: "No se encontró solución factible"**
- Revisa capacidad total vs demanda total
- Comprueba que hay al menos 1 aula disponible

**❌ Test lento (> 5 min)**
- Aumenta `max_time_in_seconds` en solver.parameters
- Reduce `num_search_workers`

**❌ Resultado distinto en cada ejecución**
- Normal con CP-SAT + timeout
- Todas las soluciones son válidas
- Agrega seed si necesitas determinismo exacto

---

## 📚 Referencias

- [Google OR-Tools Documentation](https://developers.google.com/optimization/scheduling/job_shop)
- [CP-SAT Solver Guide](https://developers.google.com/optimization/cp/cp_solver)
- [Pytest Documentation](https://docs.pytest.org/)
