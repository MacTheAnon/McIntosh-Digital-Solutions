import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Terminal } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-24 border-t border-white/5 text-center flex flex-col items-center bg-black/20 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-blue-600/5 blur-[120px] pointer-events-none" />
      <motion.img 
        whileHover={{ scale: 1.1, rotate: 5 }} 
        src="/mcintosh-logo.png" 
        alt="McIntosh Digital" 
        className="h-16 w-auto mb-8 drop-shadow-[0_0_20px_rgba(59,130,246,0.2)]" 
      />
      
      <div className="text-2xl font-['Playfair_Display'] font-bold text-white mb-8 tracking-[0.1em] uppercase">
        McIntosh <span className="text-blue-500">Digital</span>
      </div>

      <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16 px-6">
        {[
          { platform: 'LinkedIn', icon: Globe, label: 'Executive Network', href: 'https://linkedin.com/in/kaleb-mcintosh/' },
          { platform: 'GitHub', icon: Terminal, label: 'System Source', href: 'https://github.com/MacTheAnon' }
        ].map((social, i) => (
          <motion.a 
            key={i} 
            href={social.href} 
            target="_blank" 
            rel="noopener noreferrer" 
            whileHover={{ y: -5, backgroundColor: 'rgba(59, 130, 246, 0.08)' }} 
            className="flex items-center gap-5 p-5 min-w-[240px] rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-md transition-all group relative"
          >
            <div className="absolute top-3 right-3 flex items-center gap-1.5">
              <span className="text-[7px] text-slate-600 font-mono uppercase">Link Active</span>
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
            </div>
            <div className="p-3 bg-slate-800/50 rounded-xl group-hover:text-blue-400 transition-all border border-white/5">
              <social.icon size={22} />
            </div>
            <div className="text-left">
              <p className="text-xs font-black text-white uppercase tracking-[0.15em]">{social.platform}</p>
              <p className="text-[9px] text-slate-500 uppercase font-mono tracking-widest">{social.label}</p>
            </div>
          </motion.a>
        ))}
      </div>

      <div className="relative z-10 space-y-2">
        <p className="text-slate-600 text-[10px] uppercase tracking-[0.5em]">© 2026 McIntosh Digital Solutions</p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-slate-800 text-[9px] uppercase tracking-[0.2em] font-mono italic">
          <span>Handcrafted By Kaleb McIntosh</span>
          <span className="hidden md:block w-1 h-1 bg-slate-800 rounded-full"></span>
          <span>Secure Line: (816) 648-3169</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;