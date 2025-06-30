from fastapi import APIRouter, UploadFile, File
from fastapi.responses import JSONResponse

router = APIRouter()

@router.post("/caption")
async def generate_caption(file: UploadFile = File(...)):
    # TEMP: replace with BLIP model later
    content = await file.read()
    if not content:
        return JSONResponse(content={"caption": "Invalid image"}, status_code=400)

    return {"caption": "A placeholder caption for now"}
