import os

def process_guess(user_guess: str):
    secret = os.getenv("SECRET_GAME_KEY", "1234")
    
    if not user_guess.isdigit() or len(user_guess) != 4:
        return {"status": "error", "message": "Invalid input. System requires 4-digit numeric code."}
    
    if user_guess == secret:
        return {
            "status": "success", 
            "message": "ACCESS GRANTED. Intrusion simulation successful. You cracked the code!"
        }
    
    # Simple logic to help the user
    hint = "Higher" if int(user_guess) < int(secret) else "Lower"
    
    return {
        "status": "fail",
        "message": f"ACCESS DENIED. Hint: System response indicates key is {hint}."
    }