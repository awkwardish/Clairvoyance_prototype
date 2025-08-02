from fastapi import APIRouter, UploadFile, File, Form
from googletrans import Translator
from services.blip_caption import generate_caption

router = APIRouter()

@router.post("/caption-image")
async def caption_image(file: UploadFile = File(...), lang: str = Form(...)):
    print(f"🛰️ Received request with lang = {lang}")

    # Step 1: Generate English caption
    image_bytes = await file.read()
    caption_en = generate_caption(image_bytes)
    print(f"📷 English caption = {caption_en}")

    # Step 2: Translate if necessary
    try:
        if lang != "en":
            translator = Translator()
            translated = translator.translate(caption_en, dest=lang)
            caption_final = translated.text
            print(f"🌐 Translated caption = {caption_final}")
        else:
            caption_final = caption_en
    except Exception as e:
        print("⚠️ Translation failed:", e)
        caption_final = caption_en + " (Translation failed)"

    return {"caption": caption_final}


