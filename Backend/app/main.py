import logging
import os

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.middleware.gzip import GZipMiddleware
from fastapi.responses import JSONResponse

from app.scheduling_demo import solve_student_timetable_demo_data

logger = logging.getLogger(__name__)


def get_allowed_origins() -> list[str]:
    configured_origins = os.getenv("BACKEND_CORS_ORIGINS")
    if configured_origins:
        return [
            origin.strip()
            for origin in configured_origins.split(",")
            if origin.strip()
        ]

    return [
        "http://localhost:3000",
        "http://127.0.0.1:3000",
    ]


app = FastAPI()

app.add_middleware(GZipMiddleware, minimum_size=1000)

app.add_middleware(
    CORSMiddleware,
    allow_origins=get_allowed_origins(),
    allow_credentials=True,
    allow_methods=["GET", "OPTIONS"],
    allow_headers=["Accept", "Content-Type"],
)


@app.get("/")
def read_root():
    return {"message": "Esta corriendo"}


@app.get("/api/scheduling-demo")
def get_scheduling_demo():
    try:
        return solve_student_timetable_demo_data()
    except Exception:
        logger.exception("Unexpected scheduling demo failure")
        return JSONResponse(
            status_code=500,
            content={
                "success": False,
                "message": "Error interno al generar el horario",
            },
        )
