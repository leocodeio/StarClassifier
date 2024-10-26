# StarClassifier

StarClassifier is a web application that allows users to upload images and classify them using machine learning. It's built with a React frontend, Express backend, and a FastAPI-based machine learning service.

## Project Structure

The project is divided into three main parts:

1. Frontend (React)
2. Backend (Express)
3. ML Backend (FastAPI)

(flows folder have the flowchart explanation of the project)

![image](https://github.com/user-attachments/assets/47ad27f0-5e32-46a2-8671-dc3b9bcba140)

## Setup and Installation

1. Clone the repository
2. Install dependencies for each part of the project:
   ```
   open 3 terminals
   cd frontend && npm install
   cd backend && npm install
   cd ml-backend && poetry install && poetry shell
   ```
3. Set up environment variables:

   - Create a `.env` file in the `backend` directory with help of `.env.example` file
   - Create a `.env` file in the `frontend` directory with help of `.env.example` file

4. Start the services:
   - Frontend: `cd frontend && npm start`
   - Backend: `cd backend && npm start`
   - ML Backend: `cd ml-backend && uvicorn main:app --reload`

![Screenshot 2024-10-20 165952](https://github.com/user-attachments/assets/cb29dbe5-f4c9-4c7a-8880-44af07808e72)

![Screenshot 2024-10-20 165959](https://github.com/user-attachments/assets/8075c917-9fce-43da-be6d-0a065419a678)

![Screenshot 2024-10-20 170005](https://github.com/user-attachments/assets/4c90c156-01de-4007-a7e6-c214293559fe)

![Screenshot 2024-10-20 170020](https://github.com/user-attachments/assets/1e10ef00-756e-4524-b4d5-d0cda876c66c)

![Screenshot 2024-10-20 171043](https://github.com/user-attachments/assets/f5e09a3e-b9bb-49cb-b88b-e1116c315b77)

![Screenshot 2024-10-20 171023](https://github.com/user-attachments/assets/f886c430-c398-4850-bdd9-407da282ec6d)

## Contributing

Contributions are welcome! Please see the [CONTRIBUTING.md](CONTRIBUTING.md) file for guidelines.

## Acknowledgements

Developed by the Catalyst community - @leocodeio

### DOCKER IMPLEMENTATION

#### Individual Services

go to /frontend

```
docker build -t fe-image .
docker run -p 3000:3000 fe-image
```

you can access the frontend at http://localhost:3000

go to /backend

```
docker build -t be-image .
docker run -p 3001:3001 be-image
```

you can access the backend at http://localhost:3001

go to /ml-backend

```
docker build -t ml-be-image .
docker run -p 8000:8000 ml-be-image
```

you can access the ml-backend at http://localhost:8000

#### All Services

in the root directory

```
docker compose up -d
```

you can access the frontend at http://localhost:3000
you can access the backend at http://localhost:3001
you can access the ml-backend at http://localhost:8000/docs

to stop the services

```
docker compose down
```
