from functools import lru_cache
from fastapi import FastAPI
from fastapi.concurrency import asynccontextmanager
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles
from db.dbContext import init_database
from routers.workout_routes import workout_router
from fastapi.middleware.cors import CORSMiddleware


@asynccontextmanager
async def lifespan(app: FastAPI):
    # on startup event
    print("Application starts...")
    await init_database()
    yield
    # on shutdown event
    print("Application shuts down...")


app = FastAPI(title="My Workout App", version="2.0.0", lifespan=lifespan)
app.include_router(workout_router, tags=["Workouts"], prefix="/workouts")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["GET", "POST", "PUT", "DELETE"],
    allow_headers=["*"],
    allow_credentials=True,
)


@app.get("/")
async def welcome():
    return FileResponse("../frontend/index.html")


app.mount("/", StaticFiles(directory="../frontend"), name="static")
