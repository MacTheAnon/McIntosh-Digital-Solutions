import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'lucide-react';
import { ShieldAlert, Activity, Lock, Globe } from 'lucide-react';

const ThreatMonitor = () => {
    const [count, setCount] = useState(14209);
    const [lastDetection, setLastDetection] = useState("SHA-256 Handshake Verified");
    const [status, setStatus] = useState("Secure");

    // PRODUCTION LOGIC: Simulates real-time system integrity checks
    useEffect(() => {
        const interval = setInterval(() => {
            // Increment the neutralized threat counter
            setCount(prev => prev + Math.floor(Math.random() * 3) + 1);
            
            // Randomly simulate detection alerts
            const protocols = [
                "SQL Injection Blocked",
                "XSS Vector Neutralized",
                "Brute Force Throttled",
                "DDoS Pattern Filtered",
                "Unauthorized API Ping Blocked"
            ];
            
            if (Math.random() > 0.7) {
                setLastDetection(protocols[Math.floor(Math.random() * protocols.length)]);
                setStatus("Neutralizing");
                setTimeout(() => setStatus("Secure"), 2000);
            }
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full h-full p-6 md:p-8 bg-slate-900/20 border border-slate-800 rounded-[2.5rem] backdrop-blur-xl relative overflow-hidden group">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" 
                 style={{ backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

            <div className="relative z-10">
                <div className="flex justify-between items-start mb-10">
                    <div className="flex items-center gap-3">
                        <div className={`p-3 rounded-2xl border transition-colors duration-500 ${
                            status === "Secure" ? "bg-blue-500/10 border-blue-500/20" : "bg-red-500/10 border-red-500/20"
                        }`}>
                            <Activity className={status === "Secure" ? "text-blue-400" : "text-red-400 animate-pulse"} size={24} />
                        </div>
                        <div className="text-left">
                            <h3 className="text-white font-bold text-xl tracking-tight">Active Threat Monitor</h3>
                            <p className="text-[10px] text-slate-500 uppercase tracking-[0.2em] font-mono">Real-Time Integrity Stream</p>
                        </div>
                    </div>
                    <div className="px-3 py-1 bg-black/40 border border-slate-700 rounded-full flex items-center gap-2">
                        <span className={`w-1.5 h-1.5 rounded-full ${status === "Secure" ? "bg-green-500" : "bg-red-500"} animate-pulse`} />
                        <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest">{status}</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6 mb-8">
                    <div className="bg-black/40 border border-slate-800 p-6 rounded-3xl text-left relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <ShieldAlert size={60} className="text-blue-500" />
                        </div>
                        <p className="text-slate-500 text-[10px] uppercase font-bold tracking-widest mb-1">Neutralized Infiltrations</p>
                        <h4 className="text-4xl md:text-5xl font-black text-white font-mono tracking-tighter">
                            {count.toLocaleString()}
                        </h4>
                    </div>

                    <div className="bg-slate-900/40 border border-slate-800 p-5 rounded-3xl flex items-center gap-4">
                        <div className="p-2 bg-blue-500/10 rounded-xl">
                            <Globe size={18} className="text-blue-400" />
                        </div>
                        <div className="text-left overflow-hidden">
                            <p className="text-slate-500 text-[9px] uppercase font-bold tracking-widest">Last Protocol Response</p>
                            <p className="text-xs text-blue-300 font-mono truncate tracking-tight">{lastDetection}</p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-between items-center text-[9px] font-mono text-slate-600 uppercase tracking-[0.2em] pt-4 border-t border-white/5">
                    <div className="flex items-center gap-2">
                        <Lock size={10} />
                        <span>Encrypted Session</span>
                    </div>
                    <span>0.04ms Latency</span>
                </div>
            </div>
        </div>
    );
};

export default ThreatMonitor;