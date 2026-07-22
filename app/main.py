from fastapi import FastAPI
from app.routers import pages

app = FastAPI()

app.include_router(pages.router)