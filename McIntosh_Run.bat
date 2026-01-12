@echo off
TITLE McIntosh Digital Solutions - Start Services
COLOR 0A

echo Launching All Services...

:: Start Frontend
start cmd /k "cd frontend && npm start"

:: Start AI Backend
start cmd /k "cd backend-ai && venv\Scripts\activate && uvicorn main:app --reload --port 8000"

:: Start Business Backend
start cmd /k "cd backend-biz && .\mvnw.cmd spring-boot:run"

echo All systems initiating...
pause