@echo off
TITLE McIntosh Digital Solutions - One Click Setup
COLOR 0B

echo ==================================================
echo   MCINTOSH DIGITAL SOLUTIONS - DEPENDENCY SETUP
echo ==================================================

:: 1. FRONTEND INSTALLATION
echo [1/3] Installing Frontend Dependencies (React)...
cd frontend
call npm install
if %errorlevel% neq 0 (echo Frontend Install Failed! && pause && exit)
cd ..

:: 2. PYTHON AI BACKEND INSTALLATION
echo [2/3] Setting up Python AI Backend (FastAPI)...
cd backend-ai
python -m venv venv
call venv\Scripts\activate
:: Fix for the 'proxies' error and missing slowapi
call pip install httpx==0.24.1 slowapi
call pip install -r requirements.txt
if %errorlevel% neq 0 (echo Python Install Failed! && pause && exit)
call deactivate
cd ..

:: 3. JAVA BUSINESS BACKEND INSTALLATION
echo [3/3] Setting up Java Business Backend (Spring Boot)...
cd backend-biz
:: Use the wrapper to avoid 'mvn' not recognized error
if exist "mvnw.cmd" (
    call .\mvnw.cmd clean install -DskipTests
) else (
    echo [WARNING] mvnw.cmd not found. Ensure Java files are in backend-biz.
)
cd ..

echo ==================================================
echo   SETUP COMPLETE!
echo ==================================================
pause