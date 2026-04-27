"""Configuración compartida para tests con pytest."""

import pytest


@pytest.fixture
def solver_solution():
    """Fixture que proporciona una solución del solver para tests."""
    from app.scheduling_demo import solve_student_timetable_demo_data
    return solve_student_timetable_demo_data()
