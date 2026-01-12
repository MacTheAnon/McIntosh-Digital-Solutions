import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, ShieldAlert, Unlock, Zap } from 'lucide-react';

const CyberGame = () => {
    const [guess, setGuess] = useState('');
    const [status, setStatus] = useState('LOCKED'); 

    const handleHack = async () => {
        if (!guess) return;
        setStatus('SCANNING');
        
        // Simulate network latency for high-end feel
        setTimeout(() => {
            if (parseInt(guess) % 2 === 0) {
                setStatus('UNLOCKED');
            } else {
                setStatus('LOCKED');
                setGuess('');
            }
        }, 1500);
    };

    return (
        <div className="w-full max-w-sm mx-auto px-4 sm:px-0">
            {/* Main Container with Desktop Hover Glow */}
            <motion.div 
                whileHover={{ shadow: "0 0 30px rgba(34, 197, 94, 0.15)" }}
                className="bg-black border-2 border-green-900/30 rounded-3xl p-6 md:p-8 relative overflow-hidden transition-colors duration-500 hover:border-green-800/50"
            >
                {/* Mobile Scanline Effect */}
                <div className="absolute top-0 left-0 w-full h-1 bg-green-500/10 animate-[scan_4s_linear_infinite] z-0 pointer-events-none" />

                <div className="relative z-10 flex flex-col items-center">
                    {/* Icon with Fail Shake Animation */}
                    <motion.div 
                        animate={status === 'SCANNING' ? { rotate: 360 } : {}}
                        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                        className={`mb-4 ${status === 'LOCKED' ? 'text-green-500' : 'text-green-400'}`}
                    >
                        {status === 'LOCKED' && <ShieldAlert size={44} />}
                        {status === 'SCANNING' && <Zap size={44} className="text-yellow-400 animate-pulse" />}
                        {status === 'UNLOCKED' && <Unlock size={44} className="text-blue-400" />}
                    </motion.div>

                    <h3 className="font-mono text-green-400 font-bold text-xs md:text-sm tracking-[0.4em] mb-6 uppercase">
                        {status === 'SCANNING' ? 'BYPASSING_FIREWALL...' : 'ENCRYPTED_NODE_7'}
                    </h3>
                    
                    <div className="flex flex-col w-full gap-4">
                        {/* Numerical input optimized for mobile thumb typing */}
                        <input 
                            type="number"
                            inputMode="numeric" 
                            value={guess}
                            onChange={(e) => setGuess(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleHack()}
                            disabled={status !== 'LOCKED'}
                            className="w-full bg-green-950/10 border border-green-800/40 text-green-400 font-mono text-2xl text-center py-5 rounded-2xl focus:outline-none focus:border-green-500 focus:bg-green-950/20 transition-all placeholder-green-900/50"
                            placeholder="0000"
                        />
                        
                        <motion.button 
                            whileTap={{ scale: 0.96 }}
                            whileHover={status === 'LOCKED' ? { backgroundColor: "#16a34a" } : {}}
                            onClick={handleHack} 
                            disabled={status !== 'LOCKED'}
                            className="w-full bg-green-600 text-black font-black py-5 rounded-2xl font-mono text-xs tracking-[0.2em] transition-all uppercase shadow-[0_4px_0_rgb(21,128,61)] active:shadow-none active:translate-y-1"
                        >
                            {status === 'SCANNING' ? 'Running Exploit...' : 'Execute Brute Force'}
                        </motion.button>
                    </div>

                    <AnimatePresence>
                        {status === 'UNLOCKED' && (
                             <motion.div 
                                initial={{ opacity: 0, y: 10 }} 
                                animate={{ opacity: 1, y: 0 }} 
                                className="mt-6 text-blue-400 text-[10px] font-mono border border-blue-500/30 p-4 w-full text-center bg-blue-900/10 rounded-xl backdrop-blur-sm"
                             >
                                <span className="text-blue-500 mr-2"> {'>'} </span> 
                                ACCESS_GRANTED: PROCEED_TO_CHECKOUT
                             </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>
            
            {/* Desktop & Tablet Optimized Footer */}
            <div className="mt-4 flex flex-col sm:flex-row justify-between items-center gap-2 px-2">
                <p className="text-[9px] text-slate-600 font-mono uppercase tracking-widest">
                    Authorized Personnel Only
                </p>
                <p className="text-[9px] text-slate-600 font-mono uppercase tracking-widest flex items-center gap-1">
                    <Terminal size={10} /> Security Level 4
                </p>
            </div>
        </div>
    );
};

export default CyberGame;