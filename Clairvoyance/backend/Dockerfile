# Backend Dockerfile
FROM python:3.9-slim

WORKDIR /app

RUN pip install --no-cache-dir torch==2.3.0+cpu -f https://download.pytorch.org/whl/torch_stable.html

COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 8000

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]