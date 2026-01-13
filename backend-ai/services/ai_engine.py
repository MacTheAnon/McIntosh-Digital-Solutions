import os
from openai import OpenAI

def get_ai_response(user_message_str):
    """
    Safely connects to OpenAI and handles missing keys or connection errors
    without crashing the entire server.
    """
    # 1. Security Check: Ensure Key Exists
    api_key = os.getenv("OPENAI_API_KEY")
    if not api_key:
        return "SYSTEM ERROR: OpenAI API Key is missing. Check Railway Variables."

    try:
        # 2. Initialize Client Locally (Prevents global startup crashes)
        client = OpenAI(api_key=api_key)

        system_prompt = {
            "role": "system", 
            "content": "You are the AI assistant for McIntosh Digital Solutions. You are a cybersecurity expert. Keep answers concise and professional. Creator: Kaleb McIntosh."
        }
        
        user_message = {"role": "user", "content": user_message_str}
        
        # 3. Execute Request
        response = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[system_prompt, user_message],
            temperature=0.7
        )
        return response.choices[0].message.content

    except Exception as e:
        # 4. Return Error as Text (So Frontend displays it instead of crashing)
        return f"AI UPLINK ERROR: {str(e)}"