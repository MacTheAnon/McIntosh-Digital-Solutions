import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Menu, X, Phone, Copy, Check } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  React.useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  }, [isOpen]);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Expertise', href: '#expertise' },
    { name: 'Protocol', href: '#protocol' }
  ];

  const handleCopy = (e) => {
    // Prevent the 'tel:' link from triggering if we are on desktop
    if (window.innerWidth > 768) {
      e.preventDefault();
      navigator.clipboard.writeText('8166483169');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <>
      <nav className="fixed w-full z-50 top-0 left-0 border-b border-white/5 bg-[#020617]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          
          {/* Logo Section */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 z-50 relative"
          >
            <img src="/mcintosh-logo.png" alt="McIntosh Logo" className="h-10 w-auto object-contain brightness-110" />
            <div className="text-xl md:text-2xl font-['Playfair_Display'] font-bold text-white tracking-tight hidden sm:block">
              MCINTOSH
            </div>
            <div className="flex items-center gap-1 bg-blue-500/10 border border-blue-500/20 px-1.5 py-0.5 rounded-full ml-2">
              <CheckCircle2 className="w-3 h-3 text-blue-400" />
              <span className="text-[9px] font-bold text-blue-400 uppercase tracking-wider">Verified</span>
            </div>
          </motion.div>

          {/* Desktop Navigation & Contact */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-8 border-r border-white/10 pr-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name} href={link.href}
                  className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] hover:text-white transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-blue-500 transition-all group-hover:w-full"></span>
                </a>
              ))}
            </div>
            
            {/* --- EXECUTIVE PHONE LINE WITH CLICK-TO-COPY --- */}
            <div className="relative">
              <motion.a 
                href="tel:8166483169"
                onClick={handleCopy}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-3 px-4 py-2 bg-blue-500/5 border border-blue-500/20 rounded-xl group transition-all cursor-pointer overflow-hidden relative"
              >
                <div className="relative z-10">
                  <Phone size={14} className={`transition-colors ${copied ? 'text-green-400' : 'text-blue-400 group-hover:text-white'}`} />
                  {!copied && (
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full animate-ping opacity-75"></span>
                  )}
                </div>
                
                <span className={`text-xs font-mono font-bold transition-colors z-10 ${copied ? 'text-green-400' : 'text-slate-200 group-hover:text-blue-400'}`}>
                  {copied ? "COPIED TO CLIPBOARD" : "(816) 648-3169"}
                </span>

                {/* Subtle background slide on hover */}
                <div className="absolute inset-0 bg-blue-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </motion.a>

              {/* TOOLTIP HINT */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <span className="text-[8px] text-slate-500 uppercase tracking-[0.2em] whitespace-nowrap">
                  Click to copy secure line
                </span>
              </div>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden z-50 p-2 text-white hover:bg-white/10 rounded-full transition-colors"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#020617]/95 backdrop-blur-2xl flex flex-col items-center justify-center space-y-8 md:hidden"
          >
            {navLinks.map((link, i) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-['Playfair_Display'] font-bold text-white uppercase tracking-widest hover:text-blue-500 transition-colors"
              >
                {link.name}
              </a>
            ))}
            
            <a 
              href="tel:8166483169"
              className="mt-8 flex items-center gap-3 px-8 py-4 bg-blue-600 rounded-2xl text-white font-black text-sm uppercase tracking-widest shadow-blue-glow"
            >
              <Phone size={18} /> (816) 648-3169
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;