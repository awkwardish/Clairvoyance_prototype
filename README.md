# 😎Clairvoyance : Multi-Language Image-to-Speech AI Tool 🧑🏻‍🦯‍➡️

Clairvoyance is a web-based AI solution that empowers visually impaired users to understand their surroundings by converting uploaded images into descriptive audio using advanced image captioning and speech synthesis. Developed by Team BitByBit as part of IGNITATHON 2025 (Track: AI for Good), the project bridges the accessibility gap using generative AI.


## 🧠 Problem Statement

Visually impaired individuals often struggle to understand visual content shared on digital platforms. They require human assistance for interpreting such information, leading to reduced independence in a digitally-driven world.


## 🎯 Objective

To design an accessible web-based tool that:

* Accepts image input from the user.
* Automatically generates descriptive captions using AI.
* Converts the captions into natural-sounding audio output.
* Offers multi-language and offline support for broader usability.


## 💡 Key Features

| Feature                     | Description                                                     |
| --------------------------- | --------------------------------------------------------------- |
| 🖼️ Image Upload            | Upload from local device (drag/drop or file picker)             |
| 🧠 AI-Powered Captioning    | Uses pre-trained BLIP model for accurate image descriptions     |
| 🔊 Audio Narration          | Converts caption text into speech using gTTS or pyttsx3         |
| 🌐 Language Translation     | Optional feature for translating captions into native languages |
| ♿ Accessibility-Friendly    | Designed with high contrast UI and keyboard navigation          |
| 🧭 Optional Offline Support | Works with offline models and browser-based TTS (stretch goal)  |


## 🏗️ System Architecture

```plaintext
User (Image Upload)
        ↓
Frontend (HTML/JS/CSS)
        ↓
Flask Backend
        ↓
[AI Model]  ← BLIP via HuggingFace
        ↓
Caption Text
        ↓
Text-to-Speech (gTTS or pyttsx3)
        ↓
Audio Output (MP3 playback)
```


## 🛠 Tech Stack

| Layer    | Tools Used                              |
| -------- | --------------------------------------- |
| Frontend | HTML5, CSS3, Bootstrap, JavaScript      |
| Backend  | Python (Flask)                          |
| AI Model | BLIP (via HuggingFace Transformers)     |
| TTS      | gTTS (Google Text-to-Speech), pyttsx3   |
| Hosting  | GitHub + Render                         |
| Others   | Google Translate API (optional feature) |


## 🚀 Getting Started

### Prerequisites

* Python 3.10+
* pip install -r requirements.txt

### Run Locally

```bash
git clone https://github.com/awkwardish/Clairvoyance_prototype.git
cd Clairvoyance_prototype
python app.py
```

Visit [<link address>](#) in your browser.


## 👩🏻‍💻 Team BitByBit

| Name                | Role                                       |
| ------------------- | ------------------------------------------ |
| Anoushka Chaudhuri  | Project Lead, UI/UX Designer, Frontend Dev |
| Animesh Nandy       | AI Captioning + Flask API Integration      |
| Soumyajit Das       | Audio Processing, gTTS Integration         |
| Srija Sarkar        | Multilingual Support, Research & Testing   |


## 📋 Datasets & Models Used

* Pre-trained BLIP (Bootstrapped Language Image Pretraining) model from HuggingFace.
* Google Text-to-Speech (gTTS) for audio output.
* Google Translate API for multilingual support.


## 📹 Demo Video

Demo video will be added soon...


## 📁 Project Structure

```plaintext
Clairvoyance/
|...
├── .gitignore
├── requirements.txt (upload soon...)
├── README.md
└── LICENSE
```

## 📑 License

This project is licensed under the MIT License — see the LICENSE file for details.

## ✨ Acknowledgements

* HuggingFace for open-source BLIP model.
* Google Cloud APIs.
* IGNITATHON 2025 organizing team.

---
