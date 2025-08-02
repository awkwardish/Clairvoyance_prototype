from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from api.routes import speak_caption, image_caption

app = FastAPI(title="Clairvoyance - Image to Voice API")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)

# Include API routers
app.include_router(image_caption.router)
app.include_router(speak_caption.router)

@app.get("/")
def read_root():
    return {"message": "Welcome to the Clairvoyance API"}