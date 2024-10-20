# PicScribe

PicScribe is a web application that allows users to upload images and classify them using machine learning. It's built with a React frontend, Express backend, and a FastAPI-based machine learning service.


## Project Structure

The project is divided into three main parts:

1. Frontend (React)
2. Backend (Express)
3. ML Backend (FastAPI)

(flows folder have the flowchart explanation of the project)


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

## Contributing

Contributions are welcome! Please see the [CONTRIBUTING.md](CONTRIBUTING.md) file for guidelines.


## Acknowledgements

Developed by the Catalyst community - @leocodeio