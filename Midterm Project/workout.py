from pydantic import BaseModel


class Workout(BaseModel):
    exercise: str
    sets: int
    reps: int
    notes: str


class WorkoutRequest(BaseModel):
    exercise: str
    sets: int
    reps: int
    notes: str
