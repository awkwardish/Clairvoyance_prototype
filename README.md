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

<!-- * For production:

  ```bash
  pip install -r requirements.txt
  ```
* For development:

  ```bash
  pip install -r dev-requirements.txt
  ``` -->


### Run Locally

```bash
git clone https://github.com/awkwardish/Clairvoyance_prototype.git
cd Clairvoyance_prototype
python app.py
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.
- For developers see `assets/get_started.md` for more details.


## 🏆 Team BitByBit

| Name                                                 | Role                                              |
| -----------------------------------------------------|---------------------------------------------------|
| 👸🏻 Anoushka Chaudhuri                                | Project Lead, Frontend Dev, Flask API Integration |
| 👨🏻‍💻 [Animesh Nandy](https://github.com/ani-11-pro)    | AI Captioning + Flask API Integration             |
| 👨🏻‍💻 [Soumyajit Das](https://github.com/soumyajiitdas/)| gTTS Integration, Multilingual Support            |
| 👩🏻‍💻 [Srija Sarkar](https://github.com/srijasarkar133) | Research & Testing Compatibility of Components    |


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
|   ├── requirements.txt             # For production purpose
│   ├── app/
|   ├── main.py                      # main python file
│       ├── api/
│       └── routes/                     # Route handlers
│               ├── image_caption.py    # Endpoint: Image to caption (BLIP)
|    ...
└── frontend/                   # Next.js frontend
    ├── src/
    │   ├── components/
    │   │   ├── ImageUpload.js         # Upload interface
    │   │   ├── Layout.js.js           # Application layout and styling
    │   │   ...
    │   ├── pages/
    │   │   ├── index.js              # Main UI
    |   |   ├── _app.js               # Global wrapper
    │   │   └── about.js              # For about section
    │   ├── styles/
    │       └── globals.css             # Tailwind + accessibility styles
    |   ...
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
