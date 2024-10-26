# Use Python 3.12
FROM python:3.12

# Set working directory
WORKDIR /ml_app
RUN apt-get update && apt-get install -y libgl1-mesa-glx

# Copy requirements.txt for dependency management
COPY requirements.txt /ml_app/requirements.txt


# Install Poetry and dependencies
RUN pip install --no-cache-dir --upgrade -r /ml_app/requirements.txt

# Copy the rest of the application code
COPY . .

# Expose the ml-backend port
EXPOSE 8000

# Start the ml-backend application
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
