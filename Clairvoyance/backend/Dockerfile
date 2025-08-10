# Backend Dockerfile
# ============================
# 1️. Builder Stage
# ============================
FROM python:3.9-slim AS builder

WORKDIR /app

# Install system dependencies (only in builder stage)
RUN apt-get update && apt-get install -y --no-install-recommends \
    git curl build-essential \
    && rm -rf /var/lib/apt/lists/*

# Upgrade pip, setuptools, and wheel
RUN python -m pip install --upgrade pip setuptools wheel

# Install PyTorch (CPU-only)
RUN pip install --no-cache-dir torch==2.3.0+cpu \
    -f https://download.pytorch.org/whl/torch_stable.html

# Install Python dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Pre-download BLIP model + processor into Hugging Face cache
RUN python - <<'EOF'
from transformers import BlipProcessor, BlipForConditionalGeneration
print("Downloading BLIP processor...")
BlipProcessor.from_pretrained("Salesforce/blip-image-captioning-base")
print("Downloading BLIP model...")
BlipForConditionalGeneration.from_pretrained("Salesforce/blip-image-captioning-base")
print("✅ Model and processor downloaded successfully!")
EOF


# ============================
# 2️. Final Runtime Stage
# ============================
FROM python:3.9-slim

WORKDIR /app

# Upgrade pip in runtime stage too (for safety)
RUN python -m pip install --upgrade pip setuptools wheel

# Install PyTorch (CPU-only)
RUN pip install --no-cache-dir torch==2.3.0+cpu \
    -f https://download.pytorch.org/whl/torch_stable.html

# Copy Hugging Face cache from builder
COPY --from=builder /root/.cache/huggingface /root/.cache/huggingface

# Install dependencies (no dev/build deps here)
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy application code
COPY . .

# Keep cache mountable for dev mode
VOLUME ["/root/.cache/huggingface"]

EXPOSE 8000

# Start backend
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
