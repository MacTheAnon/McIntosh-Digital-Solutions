import os
from openai import OpenAI

# Initialize client using Railway Environment Variables
# Ensure OPENAI_API_KEY is set in your Railway dashboard
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

def get_ai_response(user_message_str):
    """
    Accepts raw string, wraps it in OpenAI format, and prepends system prompt.
    """
    system_prompt = {
        "role": "system", 
        "content": "You are the AI assistant for McIntosh Digital Solutions. You are a cybersecurity expert. Keep answers concise and professional. Creator: Kaleb McIntosh."
    }
    
    # Wrap input into OpenAI dictionary format
    user_message = {"role": "user", "content": user_message_str}
    messages = [system_prompt, user_message]
    
    try:
        response = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=messages,
            temperature=0.7
        )
        return response.choices[0].message.content
    except Exception as e:
        return f"AI UPLINK ERROR: {str(e)}"