import os
from openai import OpenAI
from dotenv import load_dotenv

load_dotenv()
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

def get_ai_response(user_message_str):
    """
    Fix: Accepts a raw string from main.py, wraps it in the 
    OpenAI message format, and prepends the system prompt.
    """
    system_prompt = {
        "role": "system", 
        "content": "You are the AI assistant for McIntosh Digital Solutions. You are a cybersecurity expert. Keep answers concise and professional. Creator: Kaleb McIntosh."
    }
    
    # Wrap the user's string input into the correct dictionary format
    user_message = {"role": "user", "content": user_message_str}
    
    # Create the full conversation history for this request
    # (Note: For a production app, you'd want to pass the full history from the frontend)
    messages = [system_prompt, user_message]
    
    response = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=messages,
        temperature=0.7
    )
    return response.choices[0].message.content