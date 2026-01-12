import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Activity, Menu, X, Cpu, Globe, Lock } from 'lucide-react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [backendStatus, setBackendStatus] = useState('connecting'); // connecting, online, offline

    // Handle scroll effects for the executive glassmorphism look
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Handshake logic to verify Python AI Backend integrity
    useEffect(() => {
        const checkUplink = async () => {
            const rawUrl = process.env.REACT_APP_AI_BACKEND_URL || "";
            const aiUrl = rawUrl.replace(/\/$/, ""); // URL Sanitization
            
            try {
                const response = await fetch(`${aiUrl}/`);
                if (response.ok) {
                    setBackendStatus('online'); // Sets green status if Python main.py responds
                } else {
                    setBackendStatus('offline');
                }
            } catch (error) {
                console.error("Uplink Handshake Failed:", error);
                setBackendStatus('offline');
            }
        };
        checkUplink();
    }, []);

    const navLinks = [
        { name: 'Intelligence', href: '#intelligence', icon: <Cpu size={14} /> },
        { name: 'Expertise', href: '#expertise', icon: <Shield size={14} /> },
        { name: 'Protocol', href: '#protocol', icon: <Lock size={14} /> }
    ];

    return (
        <nav 
            className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 border-b ${
                scrolled 
                ? 'bg-[#020617]/90 backdrop-blur-xl py-3 border-white/10 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]' 
                : 'bg-transparent py-5 border-transparent'
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                
                {/* Executive Brand Identity */}
                <div className="flex items-center gap-4">
                    <motion.div 
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.8, type: "spring" }}
                        className="p-2.5 bg-blue-500/10 border border-blue-500/20 rounded-xl shadow-[0_0_15px_rgba(59,130,246,0.1)]"
                    >
                        <Shield className="text-blue-500" size={26} />
                    </motion.div>
                    
                    <div className="flex flex-col text-left">
                        <span className="text-white font-black tracking-tighter text-2xl uppercase leading-none">
                            McIntosh <span className="text-blue-500">Digital</span>
                        </span>
                        
                        {/* Status Badge: Handshake Verification */}
                        <div className="flex items-center gap-2 mt-1.5">
                            <span className="text-[7px] text-slate-500 uppercase tracking-[0.4em] font-mono font-bold">System Status:</span>
                            <div className="flex items-center gap-1.5 bg-black/60 px-2 py-0.5 rounded-full border border-white/10">
                                <span className={`w-1.5 h-1.5 rounded-full ${
                                    backendStatus === 'online' ? 'bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.8)] animate-pulse' : 
                                    backendStatus === 'connecting' ? 'bg-amber-500 animate-pulse' : 
                                    'bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]'
                                }`} />
                                <span className="text-[7px] text-slate-300 font-black uppercase tracking-[0.2em]">
                                    {backendStatus === 'online' ? 'Verified Connection' : 
                                     backendStatus === 'connecting' ? 'Establishing Uplink' : 
                                     'Link Interrupted'}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Desktop Navigation - Full Feature Set */}
                <div className="hidden lg:flex items-center gap-8">
                    <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/5 backdrop-blur-sm">
                        {navLinks.map((link) => (
                            <a 
                                key={link.name} 
                                href={link.href}
                                className="group flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] hover:text-white hover:bg-white/5 transition-all duration-300"
                            >
                                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-blue-500">
                                    {link.icon}
                                </span>
                                {link.name}
                            </a>
                        ))}
                    </div>
                    
                    <motion.button 
                        whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59,130,246,0.3)" }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white text-black px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] transition-all shadow-xl"
                    >
                        Secure Line
                    </motion.button>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="flex lg:hidden items-center gap-4">
                    <div className={`w-2 h-2 rounded-full ${backendStatus === 'online' ? 'bg-green-500' : 'bg-red-500'} animate-pulse`} />
                    <button 
                        className="p-2 text-slate-400 hover:text-white bg-white/5 rounded-lg border border-white/10"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Drawer */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="lg:hidden absolute top-full left-0 w-full bg-[#020617]/95 backdrop-blur-2xl border-b border-white/10 shadow-2xl"
                    >
                        <div className="flex flex-col p-8 gap-6">
                            {navLinks.map((link, i) => (
                                <motion.a 
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    key={link.name} 
                                    href={link.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="flex items-center gap-4 text-sm font-black text-slate-400 uppercase tracking-[0.4em] hover:text-blue-500 transition-colors"
                                >
                                    <div className="p-2 bg-blue-500/10 rounded-lg text-blue-500">
                                        {link.icon}
                                    </div>
                                    {link.name}
                                </motion.a>
                            ))}
                            <hr className="border-white/5" />
                            <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-black uppercase tracking-widest text-xs shadow-[0_10px_20px_-5px_rgba(59,130,246,0.5)]">
                                Initiate Secure Line
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;