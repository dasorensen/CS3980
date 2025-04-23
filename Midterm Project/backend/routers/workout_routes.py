from typing import Annotated
from fastapi import APIRouter, HTTPException, status

from models.workout import Workout, WorkoutRequest

workout_router = APIRouter()


@workout_router.get("")
async def get_workouts() -> list[Workout]:
    return await Workout.find_all().to_list()


@workout_router.post("", status_code=status.HTTP_201_CREATED)
async def add_workout(workout: WorkoutRequest) -> Workout:
    newWorkout = Workout(
        exercise=workout.exercise,
        sets=workout.sets,
        reps=workout.reps,
        notes=workout.notes,
    )
    newWorkout = await Workout.insert_one(newWorkout)
    return newWorkout


@workout_router.get("/{exercise}")
async def get_workout_by_exercise(
    exercise: Annotated[str, "Name of exercise"],
) -> Workout:
    workout = await Workout.find_one({"exercise": exercise})
    if workout:
        return workout

    raise HTTPException(
        status_code=status.HTTP_404_NOT_FOUND,
        detail=f"The item with exercise={exercise} is not found",
    )


@workout_router.delete("/{exercise}")
async def delete_workout_by_exercise(
    exercise: Annotated[str, "Name of exercise"],
) -> dict:
    workout = await Workout.find_one({"exercise": exercise})
    if workout:
        await workout.delete()
        return {"message": f"The workout is deleted"}

    raise HTTPException(
        status_code=status.HTTP_404_NOT_FOUND,
        detail=f"The item with exercise={exercise} is not found",
    )


@workout_router.put("/{exercise}")
async def update_workout(workout: WorkoutRequest, exercise: str) -> dict:
    existing_workout = await Workout.find_one({"exercise": exercise})
    if existing_workout:
        existing_workout.exercise = workout.exercise
        existing_workout.sets = workout.sets
        existing_workout.reps = workout.reps
        existing_workout.notes = workout.notes
        await existing_workout.save()
        return {"message": "Workout updated successfully"}

    return {"message": f"The workout with exercise={exercise} is not found."}
