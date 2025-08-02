from fastapi import APIRouter, Request
from pydantic import BaseModel
from fastapi.responses import StreamingResponse
from googletrans import Translator
from gtts import gTTS
import io

router = APIRouter()

class CaptionRequest(BaseModel):
    text: str
    lang: str  # "en", "hi", "bn"

@router.post("/speak-caption")
async def speak_caption(payload: CaptionRequest):
    translator = Translator()

    # Translate if language is not English
    try:
        if payload.lang != "en":
            translated = translator.translate(payload.text, dest=payload.lang)
            text_to_speak = translated.text
        else:
            text_to_speak = payload.text
    except Exception as e:
        print("Translation Error:", e)
        return {"error": "Translation failed."}

    try:
        # Convert to speech using gTTS
        tts = gTTS(text=text_to_speak, lang=payload.lang)
        mp3_fp = io.BytesIO()
        tts.write_to_fp(mp3_fp)
        mp3_fp.seek(0)

        return StreamingResponse(mp3_fp, media_type="audio/mpeg")
    except Exception as e:
        print("TTS Error:", e)
        return {"error": "Text-to-speech conversion failed."}
