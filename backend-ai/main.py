import os
import uvicorn
from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from services.ai_engine import get_ai_response
from services.game_logic import process_guess
from pydantic import BaseModel
from slowapi import Limiter, _rate_limit_exceeded_handler
from slowapi.util import get_remote_address
from slowapi.errors import RateLimitExceeded

# 1. Initialize Executive AI Engine
app = FastAPI(title="McIntosh Digital AI Backend")

# 2. Setup Limiter to protect OpenAI credits
limiter = Limiter(key_func=get_remote_address)
app.state.limiter = limiter
app.add_exception_handler(RateLimitExceeded, _rate_limit_exceeded_handler)

# 3. Middleware: Security & CORS Alignment
# Ensure there is NO trailing slash in the FRONTEND_URL
raw_frontend_url = os.getenv("FRONTEND_URL", "https://mcintosh-digital-solutions.up.railway.app")
frontend_url = raw_frontend_url.rstrip("/")

origins = [
    frontend_url,
    "http://localhost:3000"  # Allow local development testing
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ChatRequest(BaseModel):
    message: str

class GameRequest(BaseModel):
    guess: str

# 4. Endpoints
@app.get("/")
def read_root():
    """Handshake endpoint for Navbar status verification"""
    return {"status": "online", "service": "McIntosh AI Engine"}

@app.post("/chat")
@limiter.limit("10/minute")
async def chat_endpoint(request: ChatRequest, req: Request):
    try:
        # Pass the raw string to the engine
        response = get_ai_response(request.message)
        # Match React data.reply logic
        return {"reply": response}
    except Exception as e:
        print(f"CRITICAL SYSTEM ERROR: {e}")
        raise HTTPException(status_code=500, detail="Intelligence Engine Latency: Please try again.")

@app.post("/game/attempt")
async def game_endpoint(request: GameRequest):
    result = process_guess(request.guess)
    return result

# 5. Production Execution Block
# This block fixes the 502 Bad Gateway by binding correctly to Railway's environment
# backend-ai/main.py
if __name__ == "__main__":
    import uvicorn
    # This force-binds the app to 0.0.0.0 and the Railway PORT variable
    port = int(os.getenv("PORT", 8080))
    uvicorn.run("main:app", host="0.0.0.0", port=port, proxy_headers=True)