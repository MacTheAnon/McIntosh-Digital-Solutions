import React from 'react';
import { CheckCircle, Award, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const Certifications = () => {
    const certs = [
        { name: "CSATA", label: "Certified Secure", icon: "/csata-logo.png", isImg: true },
        { name: "ISO 27001", label: "Compliant", icon: <ShieldCheck size={20} />, isImg: false },
        { name: "AWS", label: "Cloud Architect", icon: <Award size={20} />, isImg: false }
    ];

    return (
        <div className="w-full py-6">
            {/* MOBILE FIX: 'grid-cols-2' on mobile, 'md:flex' on desktop. 
               This prevents logos from becoming microscopic.
            */}
            <div className="grid grid-cols-2 md:flex md:flex-row justify-center items-center gap-4 md:gap-12 opacity-70 hover:opacity-100 transition-opacity">
                {certs.map((cert, i) => (
                    <motion.div 
                        key={i}
                        whileTap={{ scale: 0.95 }} // Visual feedback for mobile touch
                        className="flex items-center gap-3 p-3 bg-slate-800/40 border border-slate-700/50 rounded-xl"
                    >
                        <div className="flex-shrink-0 p-2 bg-slate-900 rounded-lg border border-slate-700">
                            {cert.isImg ? (
                                <img src={cert.icon} alt={cert.name} className="h-5 w-auto filter invert brightness-200" />
                            ) : (
                                <div className="text-blue-400">{cert.icon}</div>
                            )}
                        </div>
                        <div className="flex flex-col text-left">
                            <span className="text-[10px] font-bold text-white uppercase tracking-tight">{cert.name}</span>
                            <span className="text-[8px] text-blue-500 font-mono uppercase tracking-tighter">{cert.label}</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Certifications;