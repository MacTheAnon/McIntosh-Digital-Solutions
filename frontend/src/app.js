import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Cpu, Activity, Send, CheckCircle2, Terminal, ChevronRight, Lock, CreditCard, Menu, X, Zap, Globe, Award } from 'lucide-react';

// --- INTEGRATED COMPONENTS ---
// These are un-commented to ensure they render in your production build
import AIChatBox from './components/AIChatBox';
import BookingForm from './components/BookingForm';
import ThreatMonitor from './components/ThreatMonitor';
import Certifications from './components/Certifications';
import Navbar from './components/Navbar';

/**
 * VerifiedBadge Component
 * Creates the high-end "Meta Verified" spring animation effect
 */
const VerifiedBadge = () => (
  <motion.div 
    initial={{ scale: 0, rotate: -20 }}
    animate={{ scale: 1, rotate: 0 }}
    transition={{ type: "spring", stiffness: 400, damping: 10, delay: 0.5 }}
    className="inline-flex items-center gap-1.5 bg-blue-500/10 border border-blue-500/50 px-2.5 py-1 rounded-full ml-3 shadow-[0_0_15px_rgba(59,130,246,0.2)]"
  >
    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
    <span className="text-[10px] font-black tracking-widest text-blue-400 uppercase">Verified</span>
  </motion.div>
);

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
    whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(0, 242, 255, 0.15)" }}
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
  
  // Terminal Logic for the "Talking to the Mainframe" section
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([
    { type: 'system', content: 'INTEGRITY CHECK: McIntosh_Link v4.2.0-STABLE' },
    { type: 'system', content: 'UPLINK ESTABLISHED: Railway_Cluster_Alpha' },
    { type: 'ai', content: 'Lead Architect Online. System integrity at 100%. How can I optimize your executive workflow?' }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  // Smooth scroll for terminal updates
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  // Simulate an initial boot sequence for the "React Flex"
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

    // Simulated Processing Logic
    setTimeout(() => {
      setHistory(prev => [...prev, { 
        type: 'ai', 
        content: `ANALYZING COMMAND: "${input}"... REQUEST LOGGED. Initializing optimization protocols for McIntosh node.` 
      }]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 selection:bg-blue-500/30 font-['Lato'] overflow-x-hidden">
      
      {/* 1. NAVIGATION LAYER */}
      <Navbar />

      {/* 2. HERO LAYER - Cinematic Entrance */}
      <header className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden">
        {/* Abstract Cinematic Background Layers */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />

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
              Powered by advanced neural networks and military-grade encryption.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center px-8">
              <motion.a 
                href="#services"
                whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(59, 130, 246, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-5 bg-blue-600 text-white font-black uppercase tracking-[0.2em] rounded-2xl shadow-blue-glow transition-all text-xs"
              >
                Initiate
              </motion.a>
              <motion.a 
                href="#about"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(30, 41, 59, 0.8)" }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-5 border border-slate-700 text-slate-300 font-black uppercase tracking-[0.2em] rounded-2xl backdrop-blur-md transition-all text-xs"
              >
                Documentation
              </motion.a>
            </div>
          </motion.div>
        </div>
      </header>

      {/* 3. CAPABILITIES LAYER - High Grid */}
      <section id="services" className="py-32 relative border-y border-white/5 bg-slate-950/40">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-['Playfair_Display'] font-bold text-white mb-6">Enterprise Capabilities</h2>
            <p className="text-slate-500 font-mono text-[10px] uppercase tracking-[0.5em]">Core Infrastructure Modules</p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            <ServiceCard 
              icon={Cpu} 
              title="Neural Architecture" 
              desc="Proprietary Python-driven AI models that adapt to complex business logic in real-time." 
              delay={0.1} 
            />
            <ServiceCard 
              icon={Shield} 
              title="Fortress Security" 
              desc="Java Spring Boot infrastructure featuring bank-grade encryption and military protocols." 
              delay={0.2} 
            />
            <ServiceCard 
              icon={Activity} 
              title="Hyper-Scaling" 
              desc="Elastic containerization ensures 99.99% uptime during high-velocity traffic spikes." 
              delay={0.3} 
            />
          </div>
        </div>
      </section>

      {/* 4. FOUNDER LAYER - Premium "About" Section */}
      <section id="about" className="py-32 bg-slate-900/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2 relative group">
            <div className="absolute -top-10 -left-10 w-48 h-48 bg-blue-600/10 rounded-full blur-[100px] group-hover:bg-blue-600/20 transition-all duration-1000" />
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative z-10 overflow-hidden rounded-[2.5rem] border border-white/10 shadow-2xl"
            >
              <img 
                src="/profile.png" 
                alt="Lead System Architect" 
                className="w-full max-w-md mx-auto grayscale group-hover:grayscale-0 transition-all duration-1000 transform group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black to-transparent">
                 <div className="flex items-center gap-3">
                    <CheckCircle2 className="text-blue-500 w-5 h-5" />
                    <span className="text-white font-black text-xs uppercase tracking-widest">Identified: Lead Architect</span>
                 </div>
              </div>
            </motion.div>

            <div className="absolute -bottom-8 -right-8 bg-[#0c0c0c] border border-slate-800 p-8 rounded-3xl shadow-2xl z-20 hidden lg:block backdrop-blur-2xl">
              <p className="text-blue-400 font-black text-3xl mb-1 tracking-tighter">LEAD</p>
              <p className="text-slate-500 text-[10px] uppercase tracking-[0.3em] font-bold">System Architecture</p>
            </div>
          </div>

          <div className="lg:w-1/2 text-left">
            <h2 className="text-5xl md:text-7xl font-['Playfair_Display'] font-bold text-white mb-8 leading-tight">
              Human Intelligence. <br/> 
              <span className="text-blue-500 italic">Machine Precision.</span>
            </h2>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed font-light">
              I bridge the gap between abstract AI potential and secure enterprise infrastructure. 
              By merging advanced Python neural networks with the stability of Java backends, 
              I deliver software that functions as a high-performance business asset.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/30 transition-all">
                <Globe className="text-blue-500 mb-3" size={20} />
                <p className="text-white font-black text-sm uppercase tracking-widest">Global</p>
                <p className="text-[10px] text-slate-500 uppercase mt-1">Deployment Ready</p>
              </div>
              <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/30 transition-all">
                <Award className="text-blue-500 mb-3" size={20} />
                <p className="text-white font-black text-sm uppercase tracking-widest">Verified</p>
                <p className="text-[10px] text-slate-500 uppercase mt-1">Identity Protocol</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. INTEGRITY LAYER - HUD & Monitor */}
      <section id="expertise" className="py-32 bg-slate-900/30 relative border-y border-white/5">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2 text-left">
              <h2 className="text-4xl md:text-5xl font-['Playfair_Display'] font-bold text-white mb-8">Real-Time Integrity</h2>
              <p className="text-slate-400 text-lg mb-10 leading-relaxed font-light">
                Our infrastructure is protected by an active AI shield, neutralizing threats before they reach the data layer. 
                Full transparency via our live security feed.
              </p>
              <Certifications />
            </div>
            <div className="lg:w-1/2 w-full flex justify-center">
              <ThreatMonitor />
            </div>
          </div>
        </div>
      </section>

      {/* 6. INTELLIGENCE LAYER - Terminal Simulation */}
      <section id="intelligence" className="py-32 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-8 flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2 text-left">
            <div className="flex items-center gap-3 mb-6">
               <div className="h-[2px] w-8 bg-blue-500" />
               <span className="text-blue-500 font-black text-[10px] uppercase tracking-[0.4em]">Uplink Active</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-['Playfair_Display'] font-bold text-white mb-8 leading-[1.1]">
              Talk to the <br/> <span className="text-blue-500 italic">Mainframe</span>
            </h2>
            <p className="text-slate-400 text-lg mb-12 font-light leading-relaxed">
              Experience the response speed of our optimized Python backend. 
              This interface demonstrates latency-free command execution through our secure terminal.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800">
                <div className="text-2xl font-black text-white">98ms</div>
                <div className="text-[10px] text-slate-500 uppercase tracking-widest mt-2">Latency Target</div>
              </div>
              <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800">
                <div className="text-2xl font-black text-green-400 font-mono">SECURE</div>
                <div className="text-[10px] text-slate-500 uppercase tracking-widest mt-2">Link Status</div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            {/* The Integrated Meta-Verified Terminal Component */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="rounded-3xl overflow-hidden bg-[#0c0c0c] border border-slate-800 shadow-2xl"
            >
              <div className="bg-[#1a1a1a] px-6 py-4 border-b border-slate-800 flex justify-between items-center text-[10px] font-mono text-slate-500">
                <div className="flex gap-2.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/60" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                    <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <div className="flex items-center gap-2 uppercase tracking-tighter">
                    <Terminal size={14} className="text-blue-500" /> root@mcintosh-terminal:~
                </div>
              </div>
              
              <div className="p-6 h-[350px] overflow-y-auto font-mono text-xs md:text-sm custom-scrollbar bg-black/40 break-words space-y-4">
                <AnimatePresence>
                  {history.map((msg, idx) => (
                    <motion.div 
                      key={idx} 
                      initial={{ opacity: 0, x: -10 }} 
                      animate={{ opacity: 1, x: 0 }} 
                      className={`flex gap-3 ${msg.type === 'ai' ? 'text-blue-400' : msg.type === 'system' ? 'text-slate-500 italic' : 'text-green-400'}`}
                    >
                      <span className="opacity-40 select-none">[{msg.type.toUpperCase()}]</span>
                      <span>{msg.content}</span>
                    </motion.div>
                  ))}
                  {isTyping && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-blue-400 flex gap-2">
                       <Zap size={14} className="animate-pulse" />
                       <span className="animate-pulse italic">Thinking...</span>
                    </motion.div>
                  )}
                </AnimatePresence>
                <div ref={chatEndRef} />
              </div>

              <form onSubmit={handleCommand} className="p-4 bg-[#1a1a1a] border-t border-slate-800 flex gap-4">
                <input 
                  type="text" 
                  value={input} 
                  onChange={(e) => setInput(e.target.value)} 
                  className="flex-1 bg-transparent border-none focus:ring-0 text-white font-mono text-sm placeholder-slate-700 px-2" 
                  placeholder="Execute administrative command..." 
                />
                <button type="submit" className="p-3 bg-blue-600 rounded-xl hover:bg-blue-500 transition-all shadow-blue-glow">
                  <Send size={18} className="text-white" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7. PROTOCOL LAYER - Secure Stripe Onboarding */}
      <section id="protocol" className="py-40 bg-gradient-to-b from-transparent to-[#020617] text-center relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/5 blur-[150px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-5xl md:text-7xl font-['Playfair_Display'] font-bold text-white mb-8">Initiate Protocol</h2>
            <p className="text-slate-400 text-lg mb-16 max-w-2xl mx-auto leading-relaxed font-light">
              Secure your priority placement in our system architect assessment queue. 
              All deposits are handled through a bank-grade 256-bit encrypted gateway.
            </p>
            <div className="flex justify-center scale-110">
               <BookingForm />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 8. FOOTER LAYER - Final Branding */}
      <footer className="py-24 border-t border-white/5 text-center flex flex-col items-center bg-black/20">
        <motion.img 
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
          src="/mcintosh-logo.png" 
          alt="McIntosh Digital" 
          className="h-20 w-auto mb-10 opacity-90 drop-shadow-[0_0_25px_rgba(59,130,246,0.3)]" 
        />
        <div className="text-3xl font-['Playfair_Display'] font-bold text-white mb-4 tracking-[0.1em] uppercase">
          McIntosh <span className="text-blue-500">Digital</span>
        </div>
        <div className="flex gap-10 mb-12 opacity-30">
            <Shield size={20} className="hover:text-blue-500 transition-colors" />
            <Cpu size={20} className="hover:text-blue-500 transition-colors" />
            <Activity size={20} className="hover:text-blue-500 transition-colors" />
        </div>
        <p className="text-slate-600 text-[10px] uppercase tracking-[0.5em] mb-1">
          © 2026 McIntosh Digital Solutions
        </p>
        <p className="text-slate-800 text-[9px] uppercase tracking-[0.2em] font-mono">
          Handcrafted in React • Deployed via Railway Edge
        </p>
      </footer>

    </div>
  );
}

export default App;