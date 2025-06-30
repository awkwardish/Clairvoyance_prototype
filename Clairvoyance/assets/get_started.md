# 🚀 How to Run Clairvoyance Project (Frontend + Backend)

Welcome! This guide explains how to get the Clairvoyance project up and running locally.

## 📦 Project Structure

```
clairvoyance/
├── backend/         # FastAPI backend
├── frontend/        # Next.js + Tailwind frontend
└── README.md
```

## 🔧 Setup Instructions

### ▶️ Clone the Repository

```
git clone https://github.com/your-username/clairvoyance.git
cd clairvoyance
```

## 🌐 Frontend Setup (Next.js + Tailwind)

```
cd frontend
npm install
npm run dev
```

- App will start at: [http://localhost:3000](http://localhost:3000)


## 🧠 Frontend Notes

- Page layout: `src/components/Layout.js`
- Image UI: `src/components/ImageUpload.js`
- Global styles: `src/styles/globals.css`
- Pages: `src/pages/`


## 🧪 Backend Setup (FastAPI)

```
cd backend
python -m venv venv
.\venv\Scripts\Activate         # (Windows)
pip install -r requirements.txt
uvicorn main:app --reload
```

- API will be running at: [http://localhost:8000](http://localhost:8000)


## 🌿 Git Branch Workflow

| Branch      | Purpose                           |
|-------------|-----------------------------------|
| `main`      | Production-ready stable code      |
| `dev`       | Active development branch         |
| `ui-update` | UI changes (@Anoushka, @Srija)    |


## ✅ Suggested Workflow for UI Developer

1. Checkout to your UI branch:
   ```bash
   git checkout ui-update   # switch to ui-update branch
   ```

2. Pull latest changes:
   ```bash
   git pull origin dev    # download latest changes
   ```

3. Make UI edits inside `frontend/src/components/`

4. Commit and push:
   ```bash
   git add .
   git commit -m "your commit message"
   git push origin ui-update    # upload to ui-update branch
   ```

<h2 align=center> Happy Coding❣️!! </h2>