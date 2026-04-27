from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.scheduling_demo import solve_student_timetable_demo_data

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://127.0.0.1:3000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def read_root():
    return {"message": "Esta corriendo"}


@app.get("/api/scheduling-demo")
def get_scheduling_demo():
    return solve_student_timetable_demo_data()
