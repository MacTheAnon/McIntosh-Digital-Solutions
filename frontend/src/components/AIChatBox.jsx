import React, { useState } from 'react';

const AIChatBox = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const sendMessage = async () => {
        if (!input.trim()) return;
        
        const userMessage = { role: 'user', content: input };
        setMessages([...messages, userMessage]);

        try {
            const response = await fetch('http://localhost:8000/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: input }),
            });
            const data = await response.json();
            setMessages(prev => [...prev, { role: 'ai', content: data.reply }]);
        } catch (error) {
            setMessages(prev => [...prev, { role: 'ai', content: "Error connecting to AI engine." }]);
        }
        setInput('');
    };

    return (
        <div className="chat-container bg-gray-900 p-4 rounded-lg shadow-xl border border-blue-500">
            <h2 className="text-blue-400 font-bold mb-4">McIntosh AI Engine</h2>
            <div className="h-64 overflow-y-auto mb-4 p-2 bg-black rounded">
                {messages.map((msg, i) => (
                    <div key={i} className={`mb-2 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
                        <span className={`inline-block p-2 rounded ${msg.role === 'user' ? 'bg-blue-600' : 'bg-gray-700'}`}>
                            {msg.content}
                        </span>
                    </div>
                ))}
            </div>
            <div className="flex gap-2">
                <input 
                    className="flex-1 bg-gray-800 text-white p-2 rounded"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                />
                <button onClick={sendMessage} className="bg-blue-500 px-4 py-2 rounded">Send</button>
            </div>
        </div>
    );
};

export default AIChatBox;