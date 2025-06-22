# 😎 Clairvoyance : Multi-Language Image-to-Speech AI Tool 🧑🏻‍🦯‍➡️

Clairvoyance is a web-based AI solution that empowers visually impaired users to understand their surroundings by converting uploaded images into descriptive audio using advanced image captioning and speech synthesis. Developed by Team BitByBit as part of IGNITATHON 2025 (Track: AI for Good), the project bridges the accessibility gap using generative AI.


## 🧠 Problem Statement

Visually impaired individuals often struggle to understand visual content shared on digital platforms. They require human assistance for interpreting such information, leading to reduced independence in a digitally-driven world.


## 🎯 Objective

To design an accessible web-based tool that:

* Accepts image input from the user
* Automatically generates descriptive captions using AI
* Converts the captions into natural-sounding audio output
* Offers multi-language and offline support for broader usability


## 💡 Key Features

| Feature                     | Description                                                     |
| --------------------------- | --------------------------------------------------------------- |
| 🖼️ Image Upload             | Upload from local device (drag/drop or file picker)             |
| 🧠 AI-Powered Captioning    | Uses pre-trained BLIP model for accurate image descriptions     |
| 🔊 Audio Narration          | Converts caption text into speech using gTTS or pyttsx3         |
| 🌐 Language Translation     | Optional feature for translating captions into native languages |
| ♿ Accessibility-Friendly   | Designed with high contrast UI and keyboard navigation          |
| 🛜 Optional Offline Support | Works with offline models and browser-based TTS (stretch goal)  |


## 🏗️ System Architecture

```plaintext
User (Image Upload)
        ↓
Frontend (Next.js + Tailwind CSS)
        ↓
FastAPI Backend
        ↓
[AI Model]  ← BLIP via HuggingFace
        ↓
Caption Text
        ↓
Text-to-Speech (gTTS/pyttsx3)
        ↓
Audio Output (MP3 playback)
```


## 🛠 Tech Stack

| Layer     | Tools Used                              |
| ----------| --------------------------------------- |
| Frontend  | Next.js, Tailwind CSS                   |
| Backend   | Python (FastAPI)                        |
| AI Model  | BLIP (via HuggingFace Transformers)     |
| TTS       | gTTS (Google Text-to-Speech), pyttsx3   |
| Hosting   | Vercel (Frontend) + Railway (API)       |
| Translate | Google Translate API                    |
| Database  | PostgreSQL or SQLite (optional)         |


## 🚀 Getting Started

### Prerequisites

* Python 3.10+

* For production:

  ```bash
  pip install -r requirements.txt
  ```
* For development:

  ```bash
  pip install -r dev-requirements.txt
  ```


### Run Locally

```bash
git clone https://github.com/awkwardish/Clairvoyance_prototype.git
cd Clairvoyance_prototype
python app.py
```

Visit [<link address>](#) in your browser.


## 🏆 Team BitByBit

| Name                   | Role                                              |
| ---------------------- | ------------------------------------------------- |
| 👸🏻 Anoushka Chaudhuri | Project Lead, Frontend Dev, Flask API Integration |
| 👨🏻‍💻 Animesh Nandy      | AI Captioning + Flask API Integration             |
| 👨🏻‍💻 Soumyajit Das      | gTTS Integration, Multilingual Support            |
| 👩🏻‍💻 Srija Sarkar       | Research & Testing Compatibility of Components    |


## 🤖 AI Models Used

* Pre-trained BLIP (Bootstrapped Language Image Pretraining) model from HuggingFace
* Google Text-to-Speech (gTTS) for audio output
* Google Translate API for multilingual support


## 📹 Demo Video

Demo video will be added soon...


## 🗂️ Project Structure

```plaintext
Clairvoyance/
├── backend/                         # FastAPI backend application
|   ├── dev-requirements.txt         # for development purpose
|   ├── requirements.txt             # for production purpose
│   ├── app/
│   │   ├── api/
│   │   │   └── routes/                 # Route handlers
│   │   │       ├── image_caption.py    # Endpoint: Image to caption (BLIP)
│   │   │       ├── tts.py              # Endpoint: Text to speech
│   │   │       ├── translate.py        # Endpoint: Text translation
│   │   │       └── __init__.py
│   │   ├── core/
│   │   │   └── config.py            # Environment configuration
│   │   ├── models/
│   │   │   ├── blip_model.py           # BLIP model wrapper
│   │   │   ├── tts_engine.py           # gTTS / pyttsx3 wrapper
│   │   │   └── translate_engine.py     # Google Translate wrapper
│   │   ├── utils/
│   │   │   ├── image_utils.py       # Image preprocessing
│   │   │   └── audio_utils.py       # (Optional) Audio processing
│   │   ├── main.py                  # FastAPI app entry point
│   │   └── requirements.txt         # Backend production dependencies
│   ├── dev-requirements.txt         # Additional development tools
│   └── Dockerfile                   # Container definition for backend
│
└── frontend/                   # Next.js frontend
    ├── public/                 # Static files (favicon, etc.)
    ├── src/
    │   ├── components/
    │   │   ├── ImageUpload.tsx         # Upload interface
    │   │   ├── AudioPlayer.tsx         # Audio playback component
    │   │   └── LanguageSelector.tsx    # Select translation language
    │   ├── pages/
    │   │   ├── index.tsx             # Main UI
    │   │   └── _app.tsx              # Global wrapper
    │   ├── styles/
    │   │   └── globals.css             # Tailwind + accessibility styles
    │   ├── utils/
    │   │   └── api.ts                  # API calls to backend
    │   └── types/
    │       └── index.d.ts            # TypeScript interfaces
    ├── tailwind.config.js            # TailwindCSS config
    ├── package.json                  # Frontend dependencies
    └── next.config.js                # Next.js config
├── .gitignore
├── README.md
└── LICENSE
```

## 📑 License

This project is licensed under the MIT License — see the LICENSE file for details.

## ✨ Acknowledgements

* HuggingFace for open-source BLIP model
* Google Cloud APIs
* IGNITATHON 2025 organizing team

---
