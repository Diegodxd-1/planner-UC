from __future__ import annotations

from dataclasses import dataclass


@dataclass(frozen=True)
class Room:
    name: str
    capacity: int


@dataclass(frozen=True)
class Course:
    code: str
    name: str
    cycle: int
    blocks_per_week: int
    max_sections: int
    kind: str


@dataclass(frozen=True)
class Student:
    name: str
    cycle: int
    unlocked_courses: tuple[str, ...]


def _split_slots_by_day(time_slots: tuple[str, ...]) -> dict[str, list[str]]:
    slots_by_day: dict[str, list[str]] = {}

    for slot in time_slots:
        day, _ = slot.split(" ", 1)
        slots_by_day.setdefault(day, []).append(slot)

    return slots_by_day


def _build_patterns_by_blocks(
    time_slots: tuple[str, ...],
) -> dict[int, tuple[tuple[str, ...], ...]]:
    slots_by_day = _split_slots_by_day(time_slots)
    day_names = list(slots_by_day.keys())

    patterns_1: list[tuple[str, ...]] = []
    patterns_2: list[tuple[str, ...]] = []
    patterns_3: list[tuple[str, ...]] = []

    for day in day_names:
        day_slots = slots_by_day[day]

        for slot in day_slots:
            patterns_1.append((slot,))

        for start in range(len(day_slots) - 1):
            patterns_2.append((day_slots[start], day_slots[start + 1]))

        for start in range(len(day_slots) - 2):
            patterns_3.append((day_slots[start], day_slots[start + 1], day_slots[start + 2]))

    for first_day_index in range(len(day_names)):
        for second_day_index in range(first_day_index + 1, len(day_names)):
            first_day_slots = slots_by_day[day_names[first_day_index]]
            second_day_slots = slots_by_day[day_names[second_day_index]]
            shared_count = min(len(first_day_slots), len(second_day_slots))

            for slot_index in range(shared_count):
                patterns_2.append((first_day_slots[slot_index], second_day_slots[slot_index]))

    for first_day_index in range(len(day_names)):
        for second_day_index in range(first_day_index + 1, len(day_names)):
            for third_day_index in range(second_day_index + 1, len(day_names)):
                first_day_slots = slots_by_day[day_names[first_day_index]]
                second_day_slots = slots_by_day[day_names[second_day_index]]
                third_day_slots = slots_by_day[day_names[third_day_index]]
                shared_count = min(
                    len(first_day_slots),
                    len(second_day_slots),
                    len(third_day_slots),
                )

                for slot_index in range(shared_count):
                    patterns_3.append(
                        (
                            first_day_slots[slot_index],
                            second_day_slots[slot_index],
                            third_day_slots[slot_index],
                        )
                    )

    return {
        1: tuple(patterns_1),
        2: tuple(patterns_2),
        3: tuple(patterns_3),
    }


def build_demo_data() -> dict:
    time_slots = (
        "Lun 07:00-08:30",
        "Lun 08:40-10:10",
        "Lun 10:20-11:50",
        "Lun 12:00-13:30",
        "Lun 14:00-15:30",
        "Lun 15:40-17:10",
        "Lun 17:20-18:50",
        "Lun 19:00-20:30",
        "Mar 07:00-08:30",
        "Mar 08:40-10:10",
        "Mar 10:20-11:50",
        "Mar 12:00-13:30",
        "Mar 14:00-15:30",
        "Mar 15:40-17:10",
        "Mar 17:20-18:50",
        "Mar 19:00-20:30",
        "Mie 07:00-08:30",
        "Mie 08:40-10:10",
        "Mie 10:20-11:50",
        "Mie 12:00-13:30",
        "Mie 14:00-15:30",
        "Mie 15:40-17:10",
        "Mie 17:20-18:50",
        "Mie 19:00-20:30",
        "Jue 07:00-08:30",
        "Jue 08:40-10:10",
        "Jue 10:20-11:50",
        "Jue 12:00-13:30",
        "Jue 14:00-15:30",
        "Jue 15:40-17:10",
        "Jue 17:20-18:50",
        "Jue 19:00-20:30",
        "Vie 07:00-08:30",
        "Vie 08:40-10:10",
        "Vie 10:20-11:50",
        "Vie 12:00-13:30",
        "Vie 14:00-15:30",
        "Vie 15:40-17:10",
        "Vie 17:20-18:50",
        "Vie 19:00-20:30",
    )

    rooms = (
        Room("Aula 101", 35),
        Room("Aula 102", 30),
        # Room("Aula 103", 24),
    )

    courses = (
        Course("MAT101", "Calculo I", 1, 3, 2, "general"),
        Course("QUI101", "Quimica General", 1, 2, 2, "general"),
        Course("CS101", "Introduccion a la Programacion", 1, 3, 2, "carrera"),
        Course("MAT102", "Calculo II", 2, 3, 2, "general"),
        Course("FIS101", "Fisica I", 2, 3, 2, "general"),
        Course("CS102", "Programacion Orientada a Objetos", 2, 3, 2, "carrera"),
        Course("DIS201", "Matematica Discreta", 3, 2, 2, "carrera"),
        Course("DB201", "Base de Datos I", 3, 3, 2, "carrera"),
        Course("ARQ301", "Arquitectura de Computadores", 4, 2, 2, "carrera"),
        Course("SO301", "Sistemas Operativos", 5, 3, 2, "carrera"),
        Course("RED401", "Redes de Computadores", 6, 3, 2, "carrera"),
        Course("IA501", "Inteligencia Artificial", 8, 2, 2, "carrera"),
    )

    base_students = (
        Student("Ana Torres", 1, ("MAT101", "QUI101", "CS101")),
        Student("Luis Rojas", 1, ("MAT101", "QUI101", "CS101")),
        Student("Maria Paredes", 1, ("MAT101", "QUI101", "CS101")),
        Student("Jose Ramirez", 1, ("MAT101", "QUI101", "CS101")),
        Student("Karen Molina", 1, ("MAT101", "QUI101")),
        Student("Sebastian Acosta", 1, ("MAT101", "CS101")),
        Student("Patricia Luna", 1, ("MAT101", "QUI101", "CS101")),
        Student("Marco Ortega", 1, ("MAT101", "QUI101", "CS101")),
        Student("Diana Fuentes", 1, ("MAT101", "CS101")),
        Student("Carlos Vega", 2, ("MAT102", "FIS101", "CS102")),
        Student("Sofia Leon", 2, ("MAT102", "FIS101", "CS102")),
        Student("Diego Perez", 2, ("MAT102", "FIS101")),
        Student("Andrea Navarro", 2, ("MAT102", "FIS101", "CS102")),
        Student("Piero Gutierrez", 2, ("MAT102", "CS102")),
        Student("Rocio Fernandez", 2, ("FIS101", "CS102")),
        Student("Julio Cardenas", 2, ("MAT102", "FIS101", "CS102")),
        Student("Milagros Pena", 2, ("MAT102", "FIS101")),
        Student("Ernesto Rivas", 2, ("CS102", "FIS101")),
        Student("Valeria Cruz", 3, ("DIS201", "DB201", "CS102")),
        Student("Jorge Salas", 3, ("DIS201", "DB201")),
        Student("Lucia Campos", 3, ("DIS201", "DB201", "FIS101")),
        Student("Renzo Delgado", 3, ("DIS201", "DB201", "CS102")),
        Student("Claudia Pacheco", 3, ("DIS201", "DB201")),
        Student("Hector Vargas", 3, ("DIS201", "CS102")),
        Student("Monica Salazar", 3, ("DIS201", "DB201", "CS102")),
        Student("Raul Espinoza", 3, ("DIS201", "DB201")),
        Student("Kiara Velasquez", 3, ("DIS201", "CS102")),
        Student("Miguel Nunez", 4, ("ARQ301", "DB201", "DIS201")),
        Student("Paula Mendoza", 4, ("ARQ301", "DB201")),
        Student("Andres Silva", 4, ("ARQ301", "CS102")),
        Student("Tatiana Lozano", 4, ("ARQ301", "DB201", "DIS201")),
        Student("Kevin Cabrera", 4, ("ARQ301", "DB201")),
        Student("Melissa Roman", 4, ("ARQ301", "DIS201")),
        Student("Nicolas Mejia", 4, ("ARQ301", "DB201", "DIS201")),
        Student("Cynthia Vera", 4, ("ARQ301", "DB201")),
        Student("Pedro Alarcon", 4, ("ARQ301", "CS102")),
        Student("Fernanda Gil", 5, ("SO301", "ARQ301", "DB201")),
        Student("Ricardo Mora", 5, ("SO301", "ARQ301")),
        Student("Daniela Ruiz", 5, ("SO301", "DIS201")),
        Student("Oscar Benites", 5, ("SO301", "ARQ301", "DB201")),
        Student("Fiorella Arias", 5, ("SO301", "ARQ301")),
        Student("Martin Chavez", 5, ("SO301", "DB201")),
        Student("Lorena Poma", 5, ("SO301", "ARQ301", "DB201")),
        Student("Jhon Tapia", 5, ("SO301", "ARQ301")),
        Student("Veronica Sosa", 5, ("SO301", "DB201")),
        Student("Camila Soto", 6, ("RED401", "SO301")),
        Student("Bruno Diaz", 6, ("RED401", "SO301", "ARQ301")),
        Student("Elena Ramos", 6, ("RED401", "DB201")),
        Student("Paolo Medina", 6, ("RED401", "SO301")),
        Student("Ariana Flores", 6, ("RED401", "SO301", "ARQ301")),
        Student("Cesar Ibarra", 6, ("RED401", "DB201")),
        Student("Samuel Quispe", 6, ("RED401", "SO301")),
        Student("Carla Benavides", 6, ("RED401", "SO301", "ARQ301")),
        Student("Rodrigo Neira", 6, ("RED401", "DB201")),
        Student("Alvaro Castro", 7, ("RED401", "SO301", "IA501")),
        Student("Gabriela Ortiz", 7, ("RED401", "IA501")),
        Student("Noelia Suarez", 7, ("RED401", "SO301", "IA501")),
        Student("Franco Palomino", 7, ("RED401", "IA501")),
        Student("Teresa Cornejo", 7, ("RED401", "SO301", "IA501")),
        Student("Miguel Angel Rios", 7, ("RED401", "IA501")),
        Student("Ivan Flores", 8, ("IA501", "RED401")),
        Student("Natalia Herrera", 8, ("IA501", "SO301")),
        Student("Ximena Torres", 8, ("IA501", "RED401")),
        Student("Gustavo Salazar", 8, ("IA501", "SO301")),
        Student("Paula Caceres", 8, ("IA501", "RED401")),
        Student("Renata Vilca", 8, ("IA501", "SO301")),
    )

    generated_students = tuple(
        Student(f"Estudiante {index:03d}", cycle, unlocked_courses)
        for index, (cycle, unlocked_courses) in enumerate(
            (
                (1, ("MAT101", "QUI101", "CS101")),
                (1, ("MAT101", "QUI101")),
                (1, ("MAT101", "CS101")),
                (2, ("MAT102", "FIS101", "CS102")),
                (2, ("MAT102", "CS102")),
                (2, ("FIS101", "CS102")),
                (3, ("DIS201", "DB201", "CS102")),
                (3, ("DIS201", "DB201")),
                (3, ("DIS201", "CS102")),
                (4, ("ARQ301", "DB201", "DIS201")),
                (4, ("ARQ301", "DB201")),
                (4, ("ARQ301", "CS102")),
                (5, ("SO301", "ARQ301", "DB201")),
                (5, ("SO301", "ARQ301")),
                (5, ("SO301", "DB201")),
                (6, ("RED401", "SO301", "ARQ301")),
                (6, ("RED401", "SO301")),
                (6, ("RED401", "DB201")),
                (7, ("RED401", "SO301", "IA501")),
                (7, ("RED401", "IA501")),
                (8, ("IA501", "RED401")),
                (8, ("IA501", "SO301")),
            )
            * 6,
            start=1,
        )
    )

    students = base_students + generated_students

    patterns_by_blocks = _build_patterns_by_blocks(time_slots)

    course_catalog = {
        course.code: {
            "nombre": course.name,
            "ciclo_referencial": course.cycle,
            "tipo": course.kind,
            "bloques_por_semana": course.blocks_per_week,
            "maximo_secciones": course.max_sections,
        }
        for course in courses
    }

    return {
        "career_name": "Ingenieria de Sistemas",
        "time_slots": time_slots,
        "rooms": rooms,
        "courses": courses,
        "students": students,
        "patterns_by_blocks": patterns_by_blocks,
        "course_catalog": course_catalog,
    }
