from gtts import gTTS
from io import BytesIO

def text_to_speech(text: str) -> BytesIO:
    tts = gTTS(text)
    audio_bytes = BytesIO()
    tts.write_to_fp(audio_bytes)
    audio_bytes.seek(0)
    return audio_bytes

