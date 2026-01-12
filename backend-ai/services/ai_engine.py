import os
from openai import OpenAI
from dotenv import load_dotenv

load_dotenv()
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

def get_ai_response(message_history):
    # message_history is now a list of objects: [{"role": "user", "content": "..."}]
    system_prompt = {
        "role": "system", 
        "content": "You are the AI assistant for McIntosh Digital Solutions. Creator: Kaleb McIntosh."
    }
    
    # Prepend system prompt to the history
    messages = [system_prompt] + message_history
    
    response = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=messages
    )
    return response.choices[0].message.content