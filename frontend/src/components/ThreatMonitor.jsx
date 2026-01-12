import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Activity, ShieldAlert, Globe } from 'lucide-react';

const ThreatMonitor = () => {
    const [threats, setThreats] = useState(1240);
    useEffect(() => {
        const interval = setInterval(() => setThreats(p => p + Math.floor(Math.random() * 3)), 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full max-w-[320px] md:max-w-sm bg-slate-950 border border-slate-800 rounded-2xl p-5 md:p-6 relative overflow-hidden shadow-2xl">
            {/* Animated Scanning Line - CSS Optimized */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
                <div className="w-full h-1 bg-blue-500/40 blur-sm animate-[scan_3s_linear_infinite]" />
            </div>

            <div className="flex justify-between items-start relative z-10 mb-8">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                    <span className="text-[10px] font-bold text-slate-300 uppercase tracking-[0.2em]">Core Online</span>
                </div>
                <Globe size={14} className="text-slate-600" />
            </div>

            <div className="space-y-1 relative z-10">
                <div className="flex items-center gap-2 text-slate-500 text-[9px] uppercase tracking-widest">
                    <ShieldAlert size={12} />
                    Intrusions Neutralized
                </div>
                <motion.h2 
                    key={threats}
                    initial={{ scale: 1.1, color: "#3b82f6" }}
                    animate={{ scale: 1, color: "#ffffff" }}
                    className="text-4xl md:text-5xl font-mono font-bold tracking-tighter"
                >
                    {threats.toLocaleString()}
                </motion.h2>
            </div>

            <div className="mt-8 flex justify-between items-center text-[8px] font-mono text-slate-600 uppercase tracking-widest border-t border-slate-900 pt-4">
                <div className="flex items-center gap-1.5">
                    <Activity size={10} className="text-blue-500" />
                    <span>Ping: 14ms</span>
                </div>
                <span>Uptime: 99.99%</span>
            </div>
        </div>
    );
};

export default ThreatMonitor;