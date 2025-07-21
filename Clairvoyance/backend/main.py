from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from starlette.responses import JSONResponse
from services.blip_caption import generate_caption

app = FastAPI(title="Clairvoyance - Image to Voice API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/caption-image")
async def caption_image(file: UploadFile = File(...)):
    try:
        if not file.content_type.startswith("image/"):
            raise HTTPException(status_code=400, detail="Please upload an image file.")
        
        image_bytes = await file.read()
        caption = generate_caption(image_bytes)
        return JSONResponse(content={"caption": caption})

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error: {str(e)}")