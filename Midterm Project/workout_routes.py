from fastapi import APIRouter, status
from workout import Workout, WorkoutRequest


workout_router = APIRouter()

workout_list = []


@workout_router.get("")
async def get_workouts() -> list[Workout]:
    return workout_list


@workout_router.post("", status_code=status.HTTP_201_CREATED)
async def add_workout(workout: WorkoutRequest) -> Workout:
    newWorkout = Workout(
        exercise=workout.exercise,
        sets=workout.sets,
        reps=workout.reps,
        notes=workout.notes,
    )
    workout_list.append(newWorkout)
    return newWorkout
