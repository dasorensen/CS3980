from fastapi import FastAPI
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles
from workout_routes import workout_router


app = FastAPI(title="My Workout App")
app.include_router(workout_router, tags=["Workouts"], prefix="/workouts")


@app.get("/")
async def welcome() -> dict:
    return FileResponse("./frontend/index.html")


app.mount("/", StaticFiles(directory="frontend"), name="static")
