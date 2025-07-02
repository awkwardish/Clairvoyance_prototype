from fastapi import APIRouter, UploadFile, File
from fastapi.responses import JSONResponse
from services.blip_caption import generate_caption  # ✅ Import BLIP caption function

router = APIRouter()

@router.post("/caption-image")
async def caption_image(file: UploadFile = File(...)):
    content = await file.read()
    if not content:
        return JSONResponse(content={"caption": "Invalid image"}, status_code=400)

    caption = generate_caption(content)
    return JSONResponse(content={"caption": caption})

