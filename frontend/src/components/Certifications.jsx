import React, { useState } from 'react';
import { Award, ShieldCheck, Layout, X, Zap, ShieldAlert, Cpu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Certifications = () => {
    const [selectedCert, setSelectedCert] = useState(null);

    const certs = [
        { 
            name: "Bachelors Degree", 
            label: "Computer Science", 
            icon: "/csata-logo.png", 
            isImg: true,
            details: ["Advanced Algorithms", "Systems Architecture", "Discrete Mathematics"],
            clearance: "Level 4 - Academic"
        },
        { 
            name: "EC-Council", 
            label: "Certified Ethical Hacker", 
            icon: <ShieldCheck size={20} />, 
            isImg: false,
            details: ["Penetration Testing", "Vulnerability Research", "Network Defense"],
            clearance: "Level 5 - Security"
        },
        { 
            name: "Cisco", 
            label: "Cyber Security Analyst", 
            icon: <ShieldCheck size={20} />, 
            isImg: false,
            details: ["Threat Hunting", "Forensics", "SIEM Management"],
            clearance: "Level 5 - Security"
        },
        { 
            name: "Meta", 
            label: "Full Stack Developer", 
            icon: <Layout size={20} />, 
            isImg: false,
            details: ["Cloud Integration", "React Optimization", "API Security"],
            clearance: "Level 4 - Engineering"
        }
    ];

    return (
        <div className="w-full py-6">
            <div className="grid grid-cols-2 md:flex md:flex-row justify-center items-center gap-4 md:gap-6">
                {certs.map((cert, i) => (
                    <motion.div 
                        key={i}
                        layoutId={`card-${i}`}
                        onClick={() => setSelectedCert(cert)}
                        whileHover={{ y: -5, cursor: 'pointer' }}
                        className="flex flex-col p-4 bg-slate-900/40 border border-slate-800 rounded-2xl backdrop-blur-xl relative group overflow-hidden"
                    >
                        <div className="flex items-center gap-3">
                            <div className="flex-shrink-0 p-2 bg-black/40 rounded-lg border border-slate-700/50">
                                {cert.isImg ? (
                                    <img src={cert.icon} alt={cert.name} className="h-5 w-auto filter brightness-200" />
                                ) : (
                                    <div className="text-blue-400">{cert.icon}</div>
                                )}
                            </div>
                            <div className="flex flex-col text-left">
                                <span className="text-[10px] font-black text-white uppercase tracking-tight whitespace-nowrap">
  {cert.name}
</span>
                                <span className="text-[10px] font-black text-white uppercase">{cert.name}</span>
                                <span className="text-[8px] text-blue-500 font-mono font-bold uppercase">{cert.label}</span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* --- SECURITY CLEARANCE MODAL --- */}
            <AnimatePresence>
                {selectedCert && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedCert(null)}
                            className="absolute inset-0 bg-black/80 backdrop-blur-md"
                        />
                        
                        <motion.div 
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="relative w-full max-w-lg bg-[#0c0c0c] border border-blue-500/30 p-8 rounded-[2.5rem] shadow-[0_0_50px_rgba(59,130,246,0.15)] overflow-hidden"
                        >
                            {/* Decorative Scan Line */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-scan" />

                            <div className="flex justify-between items-start mb-8">
                                <div>
                                    <p className="text-blue-500 font-mono text-[10px] uppercase tracking-[0.3em] mb-2">Personnel File // Clearance Granted</p>
                                    <h3 className="text-3xl font-bold text-white font-['Playfair_Display']">{selectedCert.name}</h3>
                                </div>
                                <button onClick={() => setSelectedCert(null)} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                                    <X className="text-slate-500" size={20} />
                                </button>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                <div className="space-y-4">
                                    <p className="text-slate-500 text-[10px] uppercase font-bold tracking-widest border-b border-white/5 pb-2">Technical Competencies</p>
                                    <ul className="space-y-2">
                                        {selectedCert.details.map((detail, idx) => (
                                            <li key={idx} className="flex items-center gap-2 text-xs text-slate-300 font-light">
                                                <Zap size={12} className="text-blue-500" /> {detail}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="p-6 bg-blue-500/5 border border-blue-500/10 rounded-3xl flex flex-col items-center justify-center">
                                    <ShieldAlert className="text-blue-500 mb-2" size={32} />
                                    <p className="text-[10px] text-blue-400 font-black uppercase tracking-tighter">{selectedCert.clearance}</p>
                                    <p className="text-[8px] text-blue-500/50 font-mono mt-1 italic">Authorized Personnel Only</p>
                                </div>
                            </div>

                            <button 
                                onClick={() => setSelectedCert(null)}
                                className="w-full py-4 bg-white text-black font-black text-[10px] uppercase tracking-[0.3em] rounded-xl hover:bg-blue-50 transition-all"
                            >
                                Close Secure Terminal
                            </button>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Certifications;