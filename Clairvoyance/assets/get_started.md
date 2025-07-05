# 🚀 How to Run Clairvoyance Project (Frontend + Backend)

Welcome! This guide explains how to get the Clairvoyance project up and running locally.

## 📦 Project Structure

```
clairvoyance/
├── backend/         # FastAPI backend
└── frontend/        # Next.js + Tailwind frontend
```

## 🔧 Setup Instructions

### ▶️ Clone the Repository

```
git clone https://github.com/awkwardish/Clairvoyance_prototype.git
cd Clairvoyance_prototype/Clairvoyance
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
cd..            # if you are in frontend folder
cd backend
python -m venv venv
.\venv\Scripts\Activate           # for Windows
pip install -r requirements.txt
uvicorn main:app --reload
```

- API will be running at: [http://localhost:8000](http://localhost:8000)


## 🌿 Git Branch Workflow

| Branch      | Purpose                           |
|-------------|-----------------------------------|
| `main`      | Production-ready stable code      |
| `dev`       | Active development branch         |


## ✅ Suggested Workflow for Developers

> To upload your code, create a new branch, don't push it directly to main or dev branch...

1. Create a new beanch and switch
   ```bash
   git checkout -b branch_name
   ```

2. Pull latest changes:
   ```bash
   git pull origin main     # download latest changes
   ```

3. Commit and push:
   ```bash
   git add .
   git commit -m "your commit message"
   git push origin branch_name           # upload to your new branch
   ```

<p align="center"><strong>Happy Coding ❣️ !!</strong></p>

---
