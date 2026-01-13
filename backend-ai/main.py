import os
import uvicorn
from fastapi import FastAPI, HTTPException, Request
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from slowapi import Limiter, _rate_limit_exceeded_handler
from slowapi.util import get_remote_address
from slowapi.errors import RateLimitExceeded

# 1. Imports from your custom services
from services.ai_engine import get_ai_response
from services.game_logic import process_guess

# 2. Initialize Executive AI Engine
app = FastAPI(title="McIntosh Digital AI Backend")

# 3. Setup Limiter to protect OpenAI credits
limiter = Limiter(key_func=get_remote_address)
app.state.limiter = limiter
app.add_exception_handler(RateLimitExceeded, _rate_limit_exceeded_handler)

# 4. Middleware: Security & CORS Alignment
# Ensure NO trailing slash in the FRONTEND_URL
raw_frontend_url = os.getenv("FRONTEND_URL", "https://mcintosh-digital-solutions.up.railway.app")
frontend_url = raw_frontend_url.rstrip("/")

origins = [
    frontend_url,
    "http://localhost:3000"  # Local development testing
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 5. Global Exception Handler (Must be defined AFTER 'app')
@app.exception_handler(Exception)
async def global_exception_handler(request: Request, exc: Exception):
    """Ensures even crashes return proper CORS headers to the browser"""
    print(f"GLOBAL EXCEPTION CAUGHT: {exc}")
    return JSONResponse(
        status_code=500,
        content={"message": "Intelligence Engine Latency: Please try again.", "details": str(exc)},
        headers={
            "Access-Control-Allow-Origin": frontend_url,
            "Access-Control-Allow-Credentials": "true",
        }
    )

class ChatRequest(BaseModel):
    message: str

class GameRequest(BaseModel):
    guess: str

# 6. Endpoints
@app.get("/")
def read_root():
    """Handshake endpoint for Navbar status verification"""
    return {"status": "online", "service": "McIntosh AI Engine"}

@app.post("/chat")
@limiter.limit("10/minute")
# FIX: 'request' MUST be the standard Request object. We rename the data to 'chat_data'.
async def chat_endpoint(request: Request, chat_data: ChatRequest):
    try:
        # Use the new variable name here
        response = get_ai_response(chat_data.message)
        return {"reply": response}
    except Exception as e:
        print(f"CRITICAL SYSTEM ERROR: {e}")
        # Raising this will trigger the global_exception_handler
        raise e
@app.post("/game/attempt")
async def game_endpoint(request: GameRequest):
    return process_guess(request.guess)

# 7. Production Execution Block
if __name__ == "__main__":
    # Force-bind to 0.0.0.0 and the Railway PORT variable to avoid 502 errors
    port = int(os.getenv("PORT", 8080))
    uvicorn.run("main:app", host="0.0.0.0", port=port, proxy_headers=True)