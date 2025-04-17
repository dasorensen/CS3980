from beanie import Document
from pydantic import BaseModel


class Workout(Document):
    exercise: str
    sets: str
    reps: str
    notes: str

    class Settings:
        name = "workouts"


class WorkoutRequest(BaseModel):
    exercise: str
    sets: str
    reps: str
    notes: str
