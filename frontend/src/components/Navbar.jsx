import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Lock body scroll when menu is open
  React.useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  }, [isOpen]);

  const navLinks = ['Expertise', 'Intelligence', 'Protocol'];

  return (
    <>
      <nav className="fixed w-full z-50 top-0 left-0 border-b border-white/5 bg-[#020617]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 z-50 relative"
          >
            <div className="text-xl md:text-2xl font-['Playfair_Display'] font-bold text-white tracking-tight">
              MCINTOSH
            </div>
            <div className="flex items-center gap-1 bg-blue-500/10 border border-blue-500/20 px-1.5 py-0.5 rounded-full">
              <CheckCircle2 className="w-3 h-3 text-blue-400" />
              <span className="text-[9px] font-bold text-blue-400 uppercase tracking-wider">Verified</span>
            </div>
          </motion.div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] hover:text-white transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-blue-500 transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Desktop Button */}
          <button className="hidden md:block px-6 py-2 bg-white text-slate-950 text-xs font-bold uppercase tracking-widest rounded hover:bg-blue-50 transition-all shadow-[0_0_15px_rgba(255,255,255,0.1)]">
            Client Access
          </button>

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
            {navLinks.map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-2xl font-['Playfair_Display'] font-bold text-white tracking-wider hover:text-blue-500 transition-colors"
              >
                {item}
              </motion.a>
            ))}
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-8 px-8 py-4 bg-blue-600 text-white font-bold uppercase tracking-widest rounded-lg shadow-lg w-3/4 max-w-xs"
            >
              Client Login
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;