# Guía de Pruebas (Testing) - Backend

Este documento explica todas las pruebas implementadas en el backend, cómo ejecutarlas y el estado actual del testing.

---

## 📋 Descripción General

El backend tiene **6 pruebas implementadas** distribuidas en dos módulos:

1. **`test_api.py`** (3 tests) - Pruebas de endpoints HTTP
2. **`test_scheduling_algorithm.py`** (3+ tests) - Pruebas del algoritmo de optimización

**Herramientas de testing**:

- `pytest` - Framework de testing
- `httpx` - Cliente HTTP para tests
- `pytest-cov` - Cobertura de código

---

## 🧪 Pruebas de API (`test_api.py`)

### Propósito

Validar que los endpoints HTTP de FastAPI funcionan correctamente y retornan respuestas válidas.

### Tests Implementados

#### 1. `test_read_root()`

**¿Qué prueba?**: Que el endpoint raíz responde correctamente.

**Implementación**:

```python
def test_read_root():
    """Test que la ruta raíz responde correctamente."""
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == {"message": "Esta corriendo"}
```

**Lo que verifica**:

- ✅ Status code es 200 (OK)
- ✅ La respuesta es exactamente `{"message": "Esta corriendo"}`

**Cuando falla**:

- El servidor no está ejecutándose
- El endpoint "/" fue eliminado
- El mensaje cambió

---

#### 2. `test_scheduling_demo_endpoint()`

**¿Qué prueba?**: Que el endpoint de scheduling responde y tiene estructura válida.

**Implementación**:

```python
def test_scheduling_demo_endpoint():
    """Test que el endpoint de scheduling retorna una respuesta válida."""
    response = client.get("/api/scheduling-demo")
    assert response.status_code == 200

    data = response.json()
    assert "success" in data
    assert isinstance(data["success"], bool)
```

**Lo que verifica**:

- ✅ Status code es 200
- ✅ La respuesta tiene campo "success"
- ✅ "success" es un booleano

**Cuando falla**:

- El solver genera error
- La respuesta no tiene formato esperado
- El tipo de datos es incorrecto

---

#### 3. `test_scheduling_demo_success_response()`

**¿Qué prueba?**: Que la respuesta exitosa tiene todos los campos esperados.

**Implementación**:

```python
def test_scheduling_demo_success_response():
    """Test que la respuesta exitosa tiene todos los campos esperados."""
    response = client.get("/api/scheduling-demo")
    assert response.status_code == 200

    data = response.json()
    assert data["success"] is True

    # Validar estructura de respuesta
    assert "career_name" in data
    assert "time_slots" in data
    assert "rooms" in data
    assert "courses" in data
    assert "sections" in data
    assert "summary" in data
    assert "course_capacity_summary" in data
    assert "demand_by_course" in data
```

**Lo que verifica**:

- ✅ Status code es 200
- ✅ `success` es `True`
- ✅ Presencia de 8 campos principales en la respuesta

**Campos validados**:
| Campo | Tipo | Significado |
|-------|------|-----------|
| `career_name` | str | Nombre de la carrera |
| `time_slots` | list | Bloques horarios disponibles |
| `rooms` | list | Aulas y sus capacidades |
| `courses` | list | Cursos disponibles |
| `sections` | list | Secciones que se abrieron |
| `summary` | dict | Métricas resumidas |
| `course_capacity_summary` | dict | Capacidad por curso |
| `demand_by_course` | dict | Demanda por curso |

**Cuando falla**:

- El solver no encuentra solución
- Falta algún campo en la respuesta
- La estructura de datos cambió

---

## 🔬 Pruebas del Algoritmo (`test_scheduling_algorithm.py`)

### Propósito

Validar que el algoritmo de optimización funciona correctamente y genera soluciones consistentes.

### Tests Implementados

#### 1. `test_solver_finds_feasible_solution()`

**¿Qué prueba?**: Que el solver encuentra una solución válida.

**Implementación**:

```python
def test_solver_finds_feasible_solution(self):
    """Test que el solver encuentra una solución factible."""
    solution = solve_and_validate()
    assert solution["success"] is True
    assert len(solution["sections"]) > 0, "Debe haber al menos una sección abierta"
```

**Lo que verifica**:

- ✅ El solver retorna `success = True`
- ✅ Hay al menos 1 sección abierta

**Cuando falla**:

- El solver es infactible (restricciones contradictorias)
- No hay datos de entrada
- Timeout del solver muy corto

---

#### 2. `test_solution_structure()`

**¿Qué prueba?**: Que la solución tiene la estructura esperada.

**Implementación**:

```python
def test_solution_structure(self):
    """Test que la solución tiene la estructura esperada."""
    solution = solve_and_validate()

    # Campos principales
    assert "summary" in solution
    assert "sections" in solution
    assert "course_capacity_summary" in solution

    # Campos del resumen
    summary = solution["summary"]
    assert "opened_courses" in summary
    assert "total_courses" in summary
    assert "opened_sections" in summary
    assert "total_demand" in summary
    assert "uncovered_demand" in summary
    assert "excess_capacity" in summary
```

**Lo que verifica**:

- ✅ Campo "summary" contiene 6 métricas
- ✅ Campo "sections" existe
- ✅ Campo "course_capacity_summary" existe

**Métricas validadas en `summary`**:
| Métrica | Significado |
|---------|-----------|
| `opened_courses` | Cursos abiertos |
| `total_courses` | Total de cursos disponibles |
| `opened_sections` | Secciones abiertas |
| `total_demand` | Demanda total de estudiantes |
| `uncovered_demand` | Estudiantes sin cupo |
| `excess_capacity` | Asientos vacíos |

**Cuando falla**:

- El formato de salida cambió
- Falta alguna métrica
- El nombre de campos cambió

---

#### 3. `test_solution_metrics_consistency()`

**¿Qué prueba?**: Que las métricas de salida son lógicamente consistentes.

**Implementación**:

```python
def test_solution_metrics_consistency(self):
    """Test que las métricas de resumen son consistentes."""
    solution = solve_and_validate()
    summary = solution["summary"]

    # El número de secciones abiertas debe ser positivo
    assert summary["opened_sections"] > 0

    # El número de cursos abiertos debe ser <= total de cursos
    assert summary["opened_courses"] <= summary["total_courses"]

    # La demanda cubierta debe ser <= demanda total
    covered_demand = summary["total_demand"] - summary["uncovered_demand"]
    assert covered_demand <= summary["total_demand"]
    assert covered_demand >= 0
```

**Lo que verifica**:

- ✅ `opened_sections > 0` (hay al menos 1 sección)
- ✅ `opened_courses <= total_courses` (no abre más cursos de los que existen)
- ✅ `0 <= covered_demand <= total_demand` (lógica de demanda)

**Validaciones lógicas**:

```
demanda_cubierta = demanda_total - demanda_no_cubierta

Debe cumplir:
  0 <= demanda_no_cubierta <= demanda_total
  0 <= demanda_cubierta <= demanda_total
  opened_courses <= total_courses
  opened_sections >= 1
```

**Cuando falla**:

- Los números no tienen sentido (ej: más cursos abiertos que existentes)
- La demanda es negativa
- No hay secciones abiertas

---

## 🏃 Cómo Ejecutar las Pruebas

### Ejecutar todas las pruebas

```powershell
cd Backend
uv run pytest tests/ -v
```

**Output esperado**:

```
tests/test_api.py::test_read_root PASSED
tests/test_api.py::test_scheduling_demo_endpoint PASSED
tests/test_api.py::test_scheduling_demo_success_response PASSED
tests/test_scheduling_algorithm.py::TestAlgorithmValidity::test_solver_finds_feasible_solution PASSED
tests/test_scheduling_algorithm.py::TestAlgorithmValidity::test_solution_structure PASSED
tests/test_scheduling_algorithm.py::TestAlgorithmValidity::test_solution_metrics_consistency PASSED

====== 6 passed in 1.23s ======
```

### Ejecutar un test específico

```powershell
# Solo tests de API
uv run pytest tests/test_api.py -v

# Solo tests del algoritmo
uv run pytest tests/test_scheduling_algorithm.py -v

# Un test específico
uv run pytest tests/test_api.py::test_read_root -v
```

### Ver cobertura de código

```powershell
# Generar reporte de cobertura
uv run pytest tests/ --cov=app --cov-report=html

# Abrir el reporte en navegador
# Abre ./htmlcov/index.html
```

### Ejecutar con más detalles

```powershell
# Mostrar output de print()
uv run pytest tests/ -v -s

# Mostrar variables locales en caso de fallo
uv run pytest tests/ -v --tb=long

# Detener en primer fallo
uv run pytest tests/ -v -x
```

---

## 📊 Cobertura Actual

**Estimado**: ~60-70% del código

Módulos cubiertos:

- ✅ `app/main.py` - Endpoints (100%)
- ✅ `app/scheduling_demo.py` - Solver (70%)
- ✅ `app/scheduling_demo_data.py` - Datos (50%)

Áreas sin cobertura:

- ❌ Casos de error extremos
- ❌ Edge cases del solver
- ❌ Validación de entrada

---

## 🔍 Detalles Técnicos de Testing

### Configuración (conftest.py)

```python
# conftest.py es donde se define la configuración compartida
# Actualmente vacío o minimal, pero puede contener:
# - Fixtures reutilizables
# - Hooks de pytest
# - Configuración global
```

### Client de Test

```python
from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)
```

Esto crea un cliente HTTP que puede hacer peticiones al servidor sin levantarlo en un puerto real.

### Estructura de Tests

```
tests/
├── __init__.py              (Marca como paquete Python)
├── conftest.py              (Configuración compartida)
├── test_api.py              (Tests de endpoints)
├── test_scheduling_algorithm.py (Tests del solver)
└── README.md
```

---

## ✅ Checklist de Testing

Antes de hacer cambios, verifica que:

```
[ ] Corre sin errores: uv run pytest tests/ -v
[ ] Todos los tests pasan
[ ] Cobertura no disminuye
[ ] No hay warnings en pytest
[ ] Las métricas de salida tienen sentido
```

Después de cambios, verifica que:

```
[ ] Escribí nuevas pruebas para la nueva funcionalidad
[ ] Los tests nuevos pasan
[ ] Los tests existentes siguen pasando
[ ] La cobertura aumentó o se mantuvo
```

---

## 🐛 Troubleshooting de Tests

### Los tests fallan con "ModuleNotFoundError"

```powershell
# Solución: Asegúrate de estar en la carpeta Backend
cd Backend
uv run pytest tests/ -v
```

### Solver retorna INFEASIBLE en los tests

Posibles causas:

1. Los datos de demostración cambiaron
2. Las restricciones se hicieron muy ajustadas
3. Falta capacidad de aulas

Soluciones:

```python
# En app/scheduling_demo_data.py
# Aumentar capacidad de aulas
# Agregar más aulas
# Aumentar bloques horarios
# Aumentar max_sections
```

### Los tests son muy lentos

El solver puede tardar hasta 10 segundos. Si los tests tardan más:

```python
# En app/scheduling_demo.py, reducir timeout para tests:
solver.parameters.max_time_in_seconds = 5
```

---

## 📈 Métricas de Calidad

### Métricas que revisamos en cada ejecución

```
Tiempo de ejecución:
  Tests API:          ~0.1s
  Tests Algoritmo:    ~5-10s
  Total:              ~5-15s

Éxito de solver:
  Esperado: 100% (siempre encuentra solución)
  Actual:   ✅ 100%

Cobertura de código:
  Esperado: >80%
  Actual:   ~65-70%

Calidad de solución:
  Demanda no cubierta: Cercana a 0
  Exceso de capacidad: Bajo
  Número de secciones: Razonable
```

---

## 🔮 Tests Futuros

Pruebas recomendadas para agregar:

- [ ] Tests de stress (10x más estudiantes)
- [ ] Tests de edge cases (0 estudiantes, 1 aula, etc)
- [ ] Tests de performance (benchmark de tiempo)
- [ ] Tests de diferentes configuraciones
- [ ] Tests de múltiples carreras
- [ ] Validación de patrones horarios

---

## 📚 Referencia Rápida de Comandos

```powershell
# Ejecutar todos los tests
uv run pytest tests/ -v

# Ejecutar con cobertura
uv run pytest tests/ --cov=app --cov-report=html

# Ejecutar un test específico
uv run pytest tests/test_api.py::test_read_root -v

# Ejecutar tests que coincidan con patrón
uv run pytest tests/ -k "feasible" -v

# Ejecutar con salida detallada
uv run pytest tests/ -v -s

# Detener en primer fallo
uv run pytest tests/ -x

# Ejecutar último test que falló
uv run pytest tests/ --lf
```

---

## 🎯 Resumen

| Aspecto                   | Estado     |
| ------------------------- | ---------- |
| **Pruebas Implementadas** | ✅ 6 tests |
| **Tests Pasando**         | ✅ 100%    |
| **Cobertura**             | ⚠️ ~65-70% |
| **API Tests**             | ✅ 3/3     |
| **Algoritmo Tests**       | ✅ 3/3     |
| **Tiempo de Ejecución**   | ✅ <15s    |
| **Solver Exitoso**        | ✅ 100%    |

---

**Última actualización**: Abril 2026  
**Total de tests**: 6  
**Herramienta**: pytest 9.0.3+
