import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Cpu } from 'lucide-react';

const AIChatBox = () => {
    const [messages, setMessages] = useState([{ role: 'ai', content: "Systems online. Awaiting command..." }]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const scrollRef = useRef(null);

    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, isTyping]);

    const sendMessage = async () => {
        if (!input.trim()) return;
        
        const userMsg = { role: 'user', content: input };
        setMessages(prev => [...prev, userMsg]);
        setInput('');
        setIsTyping(true);

        // PRODUCTION FIX: Strip trailing slashes to prevent //chat errors
        const rawUrl = process.env.REACT_APP_AI_BACKEND_URL || "";
        const aiUrl = rawUrl.replace(/\/$/, "");

        try {
            // Corrected syntax using the dynamic backend URL
            const response = await fetch(`${aiUrl}/chat`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: input })
            });
            
            if (!response.ok) throw new Error("Secure link interrupted.");

            const data = await response.json();
            // Match the "reply" key returned by main.py
            setMessages(prev => [...prev, { role: 'ai', content: data.reply }]);
        } catch (error) {
            setMessages(prev => [...prev, { role: 'ai', content: "Secure link interrupted. Check Python uplink." }]);
        } finally {
            setIsTyping(false);
        }
    };

    return (
        <div className="w-full max-w-xl mx-auto bg-[#0c0c0c] border border-slate-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col h-[500px] md:h-[600px]">
            {/* Header - Fixed on Mobile */}
            <div className="px-4 py-3 bg-slate-900/50 border-b border-slate-800 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <Cpu size={14} className="text-blue-500" />
                    <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">McIntosh AI Engine</span>
                </div>
            </div>

            {/* Chat Area - Optimized for Touch Scrolling */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar bg-[radial-gradient(circle_at_top,rgba(30,41,59,0.2),transparent)]">
                {messages.map((msg, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                        <div className={`max-w-[85%] p-3 rounded-2xl text-sm font-mono leading-relaxed ${
                            msg.role === 'user' 
                            ? 'bg-blue-600 text-white rounded-tr-none' 
                            : 'bg-slate-800/50 border border-slate-700 text-blue-400 rounded-tl-none'
                        }`}>
                            <span className="text-[9px] opacity-50 block mb-1 uppercase tracking-tighter">
                                {msg.role === 'user' ? 'Client' : 'System'}
                            </span>
                            {msg.content}
                        </div>
                    </motion.div>
                ))}
                {isTyping && (
                    <div className="flex justify-start">
                        <div className="bg-slate-800/50 p-3 rounded-2xl rounded-tl-none border border-slate-700">
                            <span className="flex gap-1">
                                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce" />
                                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce [animation-delay:0.2s]" />
                                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce [animation-delay:0.4s]" />
                            </span>
                        </div>
                    </div>
                )}
                <div ref={scrollRef} />
            </div>

            {/* Input - Large Touch Targets */}
            <div className="p-3 bg-slate-900/80 backdrop-blur-md border-t border-slate-800">
                <div className="flex gap-2 bg-black/40 border border-slate-700 rounded-xl p-1 focus-within:border-blue-500 transition-colors">
                    <input 
                        className="flex-1 bg-transparent text-white px-3 py-3 text-sm focus:outline-none placeholder-slate-600"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                        placeholder="Enter command..."
                    />
                    <button 
                        onClick={sendMessage}
                        className="bg-blue-600 hover:bg-blue-500 text-white p-3 rounded-lg transition-all active:scale-95 shadow-blue-glow"
                    >
                        <Send size={18} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AIChatBox;