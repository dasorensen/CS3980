from pydantic import BaseModel


class Workout(BaseModel):
    exercise: str
    sets: str
    reps: str
    notes: str


class WorkoutRequest(BaseModel):
    exercise: str
    sets: str
    reps: str
    notes: str
