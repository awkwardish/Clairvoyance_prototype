from fastapi import FastAPI, File, UploadFile
from fastapi.responses import StreamingResponse
from PIL import Image
from transformers import BlipProcessor, BlipForConditionalGeneration
from gtts import gTTS
from io import BytesIO
import re

app = FastAPI()


processor = BlipProcessor.from_pretrained("Salesforce/blip-image-captioning-base")
model = BlipForConditionalGeneration.from_pretrained("Salesforce/blip-image-captioning-base")

def remove_repeated_phrases(text):
    return re.sub(r'\b(\w+\s+\w+)\s+and\s+\1\b', r'\1', text)

@app.post("/caption-image")
async def caption_image(file: UploadFile = File(...)):
    
    contents = await file.read()
    image = Image.open(BytesIO(contents)).convert("RGB")

    
    inputs = processor(images=image, return_tensors="pt")
    out = model.generate(**inputs)
    caption = processor.decode(out[0], skip_special_tokens=True)

    
    caption = remove_repeated_phrases(caption)

   
    tts = gTTS(text=caption, lang='en')
    audio_bytes = BytesIO()
    tts.write_to_fp(audio_bytes)
    audio_bytes.seek(0)

    
    return StreamingResponse(audio_bytes, media_type="audio/mpeg")
