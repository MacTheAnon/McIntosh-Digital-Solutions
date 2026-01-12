import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Cpu, Activity, Send, CheckCircle2, Terminal, ChevronRight, Zap, Globe, Award } from 'lucide-react';

// --- INTEGRATED COMPONENTS ---
import BookingForm from './components/BookingForm';
import ThreatMonitor from './components/ThreatMonitor';
import Certifications from './components/Certifications';
import Navbar from './components/Navbar';

/**
 * ServiceCard Component
 * Handles the glassmorphism and 3D hover lift for the service grid
 */
const ServiceCard = ({ icon: Icon, title, desc, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.7, ease: "easeOut" }}
    whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.2)" }}
    className="p-10 rounded-3xl bg-slate-900/40 border border-slate-800 backdrop-blur-xl group hover:border-blue-500/40 transition-all duration-500"
  >
    <div className="w-14 h-14 rounded-2xl bg-slate-800 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-blue-600/20 transition-all duration-500">
      <Icon className="w-7 h-7 text-blue-400 group-hover:text-cyan-300" />
    </div>
    <h3 className="text-2xl font-bold text-white mb-4 font-['Playfair_Display'] group-hover:text-blue-400 transition-colors">{title}</h3>
    <p className="text-slate-400 text-sm leading-relaxed font-light">{desc}</p>
    <div className="mt-6 flex items-center gap-2 text-blue-500/0 group-hover:text-blue-500/100 transition-all duration-500 text-[10px] font-bold uppercase tracking-widest">
      Initialize Module <ChevronRight size={12} />
    </div>
  </motion.div>
);

function App() {
  const [bootSequence, setBootSequence] = useState(false);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([
    { type: 'system', content: 'INTEGRITY CHECK: McIntosh_Link v4.2.0-STABLE' },
    { type: 'system', content: 'UPLINK ESTABLISHED: Railway_Cluster_Alpha' },
    { type: 'ai', content: 'Lead Architect Online. System integrity at 100%. How can I optimize your executive workflow?' }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  useEffect(() => {
    setTimeout(() => setBootSequence(true), 100);
  }, []);

  const handleCommand = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const newHistory = [...history, { type: 'user', content: input }];
    setHistory(newHistory);
    setInput("");
    setIsTyping(true);
    setTimeout(() => {
      setHistory(prev => [...prev, { 
        type: 'ai', 
        content: `ANALYZING COMMAND: "${input}"... REQUEST LOGGED. Initializing optimization protocols.` 
      }]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 selection:bg-blue-500/30 font-['Lato'] overflow-x-hidden">
      
      {/* BACKGROUND EFFECTS */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-slate-400/5 rounded-full blur-[100px]" />
      </div>

      <Navbar />

      {/* HERO LAYER */}
      <header className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={bootSequence ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="inline-block py-1.5 px-4 rounded-full bg-slate-800/50 border border-slate-700 text-blue-400 text-[10px] md:text-xs font-black tracking-[0.3em] uppercase mb-10 backdrop-blur-md"
            >
              System Online • Protocol v2.4.0
            </motion.span>
            
            <h1 className="text-5xl md:text-8xl lg:text-9xl font-['Playfair_Display'] font-bold text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-200 to-slate-500 mb-10 leading-[0.95] tracking-tighter">
              Digital Perfection <br/>
              <span className="italic font-light text-slate-400">Verified.</span>
            </h1>
            
            <p className="text-base md:text-xl text-slate-400 mb-14 font-light max-w-3xl mx-auto leading-relaxed px-4">
              We don't build software; we engineer <span className="text-white font-medium italic">status symbols</span> for the digital age. 
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center px-8">
              <motion.a href="#services" whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(59, 130, 246, 0.4)" }} className="px-12 py-5 bg-blue-600 text-white font-black uppercase tracking-[0.2em] rounded-2xl text-xs">
                Initiate
              </motion.a>
              <motion.a href="#about" whileHover={{ scale: 1.05 }} className="px-12 py-5 border border-slate-700 text-slate-300 font-black uppercase tracking-[0.2em] rounded-2xl backdrop-blur-md text-xs">
                Documentation
              </motion.a>
            </div>
          </motion.div>
        </div>
      </header>

      {/* CAPABILITIES LAYER */}
      <section id="services" className="py-32 relative border-y border-white/5 bg-slate-950/40">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-3 gap-10">
            <ServiceCard icon={Cpu} title="Neural Architecture" desc="Proprietary Python-driven AI models." delay={0.1} />
            <ServiceCard icon={Shield} title="Fortress Security" desc="Java Spring Boot bank-grade encryption." delay={0.2} />
            <ServiceCard icon={Activity} title="Hyper-Scaling" desc="Elastic containerization protocols." delay={0.3} />
          </div>
        </div>
      </section>

      {/* ABOUT LAYER */}
      <section id="about" className="py-32 bg-slate-900/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2 relative group">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} className="relative z-10 overflow-hidden rounded-[2.5rem] border border-white/10 shadow-2xl">
              <img src="/profile.png" alt="Lead Architect" className="w-full grayscale group-hover:grayscale-0 transition-all duration-1000" />
            </motion.div>
          </div>
          <div className="lg:w-1/2 text-left">
            <h2 className="text-5xl md:text-7xl font-['Playfair_Display'] font-bold text-white mb-8">Human Intelligence. <br/> <span className="text-blue-500 italic">Machine Precision.</span></h2>
            <p className="text-slate-400 text-lg mb-10 font-light">I bridge the gap between abstract AI potential and secure enterprise infrastructure.</p>
          </div>
        </div>
      </section>

      {/* EXPERTISE LAYER */}
      <section id="expertise" className="py-32 bg-slate-900/30 relative border-y border-white/5">
        <div className="max-w-7xl mx-auto px-8 flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-['Playfair_Display'] font-bold text-white mb-8">Real-Time Integrity</h2>
            <Certifications />
          </div>
          <div className="lg:w-1/2 w-full"><ThreatMonitor /></div>
        </div>
      </section>

      {/* TERMINAL LAYER */}
      <section id="intelligence" className="py-32 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-8 flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2 text-left">
            <h2 className="text-4xl md:text-6xl font-['Playfair_Display'] font-bold text-white mb-8">Talk to the <br/> <span className="text-blue-500 italic">Mainframe</span></h2>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800"><div className="text-2xl font-black text-white">98ms</div><div className="text-[10px] text-slate-500 uppercase tracking-widest mt-2">Latency Target</div></div>
              <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800"><div className="text-2xl font-black text-green-400 font-mono">SECURE</div><div className="text-[10px] text-slate-500 uppercase tracking-widest mt-2">Link Status</div></div>
            </div>
          </div>
          <div className="lg:w-1/2 w-full">
            <div className="rounded-3xl overflow-hidden bg-[#0c0c0c] border border-slate-800 shadow-2xl">
              <div className="bg-[#1a1a1a] px-6 py-4 border-b border-slate-800 flex justify-between items-center text-[10px] font-mono text-slate-500 uppercase"><div className="flex items-center gap-2"><Terminal size={14} className="text-blue-500" /> root@mcintosh-terminal:~</div></div>
              <div className="p-6 h-[350px] overflow-y-auto font-mono text-xs custom-scrollbar bg-black/40 space-y-4">
                {history.map((msg, i) => (
                  <div key={i} className={msg.type === 'ai' ? 'text-blue-400' : 'text-green-400'}>[{msg.type.toUpperCase()}] {msg.content}</div>
                ))}
                <div ref={chatEndRef} />
              </div>
              <form onSubmit={handleCommand} className="p-4 bg-[#1a1a1a] border-t border-slate-800 flex gap-4">
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)} className="flex-1 bg-transparent border-none text-white font-mono text-sm focus:ring-0" placeholder="Execute command..." />
                <button type="submit" className="p-3 bg-blue-600 rounded-xl"><Send size={18} className="text-white" /></button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* BOOKING LAYER */}
      <section id="protocol" className="py-40 bg-gradient-to-b from-transparent to-[#020617] text-center relative">
        <div className="max-w-4xl mx-auto px-8 relative z-10">
          <h2 className="text-5xl md:text-7xl font-['Playfair_Display'] font-bold text-white mb-8">Initiate Protocol</h2>
          <BookingForm />
        </div>
      </section>

      {/* FINAL UNIFIED FOOTER */}
      <footer className="py-24 border-t border-white/5 text-center flex flex-col items-center bg-black/20 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-blue-600/5 blur-[120px] pointer-events-none" />
        <motion.img whileHover={{ scale: 1.1, rotate: 5 }} src="/mcintosh-logo.png" alt="McIntosh Digital" className="h-16 w-auto mb-8 drop-shadow-[0_0_20px_rgba(59,130,246,0.2)]" />
        
        <div className="text-2xl font-['Playfair_Display'] font-bold text-white mb-8 tracking-[0.1em] uppercase">
          McIntosh <span className="text-blue-500">Digital</span>
        </div>

        {/* SOCIAL UPLINKS */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16 px-6">
          {[
            { platform: 'LinkedIn', icon: Globe, label: 'Executive Network', href: 'https://linkedin.com/in/kaleb-mcintosh/' },
            { platform: 'GitHub', icon: Terminal, label: 'System Source', href: 'https://github.com/MacTheAnon' }
          ].map((social, i) => (
            <motion.a key={i} href={social.href} target="_blank" rel="noopener noreferrer" whileHover={{ y: -5, backgroundColor: 'rgba(59, 130, 246, 0.08)' }} className="flex items-center gap-5 p-5 min-w-[240px] rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-md transition-all group relative">
              <div className="absolute top-3 right-3 flex items-center gap-1.5"><span className="text-[7px] text-slate-600 font-mono uppercase">Link Active</span><span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span></div>
              <div className="p-3 bg-slate-800/50 rounded-xl group-hover:text-blue-400 transition-all border border-white/5"><social.icon size={22} /></div>
              <div className="text-left"><p className="text-xs font-black text-white uppercase tracking-[0.15em]">{social.platform}</p><p className="text-[9px] text-slate-500 uppercase font-mono tracking-widest">{social.label}</p></div>
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
    </div>
  );
}

export default App;