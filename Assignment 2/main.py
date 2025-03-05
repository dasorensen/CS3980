from fastapi import FastAPI
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles

app = FastAPI()

@app.get("/")
async def welcome() -> dict:
    return FileResponse("./frontend/index.html")


app.mount("/", StaticFiles(directory="frontend"), name="static")