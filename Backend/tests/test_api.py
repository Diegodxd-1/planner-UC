"""Tests para las rutas de la API FastAPI."""

from fastapi.testclient import TestClient
from app import main

client = TestClient(main.app)


def test_read_root():
    """Test que la ruta raíz responde correctamente."""
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == {"message": "Esta corriendo"}


def test_scheduling_demo_endpoint():
    """Test que el endpoint de scheduling retorna una respuesta válida."""
    response = client.get("/api/scheduling-demo")
    assert response.status_code == 200
    
    data = response.json()
    assert "success" in data
    assert isinstance(data["success"], bool)


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


def test_scheduling_demo_handles_solver_failure(monkeypatch):
    monkeypatch.setattr(
        main,
        "solve_student_timetable_demo_data",
        lambda: {"success": False, "message": "No se encontro solucion"},
    )

    response = client.get("/api/scheduling-demo")

    assert response.status_code == 200
    assert response.json() == {"success": False, "message": "No se encontro solucion"}


def test_scheduling_demo_handles_internal_exception(monkeypatch):
    def broken_solver():
        raise RuntimeError("solver roto")

    monkeypatch.setattr(main, "solve_student_timetable_demo_data", broken_solver)

    response = client.get("/api/scheduling-demo")

    assert response.status_code == 500
    data = response.json()
    assert data["success"] is False
    assert data["message"] == "Error interno al generar el horario"
    assert "solver roto" not in data["message"]


def test_cors_preflight_rejects_unauthorized_origin():
    response = client.options(
        "/api/scheduling-demo",
        headers={
            "Origin": "https://evil.example",
            "Access-Control-Request-Method": "GET",
        },
    )

    assert "access-control-allow-origin" not in response.headers


def test_cors_preflight_allows_expected_origin():
    response = client.options(
        "/api/scheduling-demo",
        headers={
            "Origin": "http://localhost:3000",
            "Access-Control-Request-Method": "GET",
        },
    )

    assert response.headers["access-control-allow-origin"] == "http://localhost:3000"
