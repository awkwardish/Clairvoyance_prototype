from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from api.routes import image_caption  # adjust based on your folder structure

app = FastAPI()

app.include_router(image_caption.router)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"message": "Clairvoyance backend is running."}

