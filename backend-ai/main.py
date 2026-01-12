from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from services.ai_engine import get_ai_response
from services.game_logic import process_guess
from pydantic import BaseModel
from slowapi import Limiter, _rate_limit_exceeded_handler
from slowapi.util import get_remote_address
from slowapi.errors import RateLimitExceeded

# 1. Initialize App First
app = FastAPI(title="McIntosh Digital AI Backend")

# 2. Setup Limiter
limiter = Limiter(key_func=get_remote_address)
app.state.limiter = limiter
app.add_exception_handler(RateLimitExceeded, _rate_limit_exceeded_handler)

# 3. Middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_methods=["*"],
    allow_headers=["*"],
)

class ChatRequest(BaseModel):
    message: str

class GameRequest(BaseModel):
    guess: str

@app.get("/")
def read_root():
    return {"status": "online", "service": "McIntosh AI Engine"}

@app.post("/chat")
@limiter.limit("5/minute")
async def chat_endpoint(request: ChatRequest):
    try:
        response = get_ai_response(request.message)
        return {"reply": response}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/game/attempt")
async def game_endpoint(request: GameRequest):
    result = process_guess(request.guess)
    return result