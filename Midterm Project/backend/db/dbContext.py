from beanie import init_beanie
from motor.motor_asyncio import AsyncIOMotorClient
from models.my_config import get_settings
from models.user import User
from models.workout import Workout


async def init_database():
    my_config = get_settings()
    client = AsyncIOMotorClient(my_config.connection_string)
    db = client["workout_app"]
    await init_beanie(database=db, document_models=[User, Workout])
