import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // "Damn he used React" animations
import { Shield, Cpu, Activity, Send, CheckCircle2, Terminal } from 'lucide-react'; // Clean icons

// --- SUB-COMPONENTS (The "React Way") ---

const VerifiedBadge = () => (
  <motion.div 
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
    className="inline-flex items-center gap-1 bg-blue-500/10 border border-blue-500/50 px-2 py-0.5 rounded-full ml-2"
  >
    <CheckCircle2 className="w-3 h-3 text-blue-400" />
    <span className="text-[10px] font-bold tracking-wider text-blue-400 uppercase">Verified</span>
  </motion.div>
);

const ServiceCard = ({ icon: Icon, title, desc, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    whileHover={{ y: -5, boxShadow: "0 20px 40px -15px rgba(0, 242, 255, 0.1)" }}
    className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm group hover:border-blue-500/30 transition-all duration-300"
  >
    <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
      <Icon className="w-6 h-6 text-blue-400 group-hover:text-cyan-300" />
    </div>
    <h3 className="text-xl font-bold text-white mb-3 font-['Playfair_Display']">{title}</h3>
    <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
  </motion.div>
);

function App() {
  // State for the "Real" terminal experience
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([
    { type: 'system', content: 'Initializing McIntosh_Secure_Link v4.2...' },
    { type: 'system', content: 'Connection established. Encryption: AES-256.' },
    { type: 'ai', content: 'Welcome, Administrator. How can I optimize your workflow today?' }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  // Auto-scroll terminal
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const newHistory = [...history, { type: 'user', content: input }];
    setHistory(newHistory);
    setInput("");
    setIsTyping(true);

    // Simulate "AI" processing
    setTimeout(() => {
      setHistory(prev => [...prev, { 
        type: 'ai', 
        content: `Analyzing request: "${input}"... \n>> Optimization protocols initiated. System integrity at 100%.` 
      }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 selection:bg-blue-500/30 font-['Lato'] overflow-x-hidden">
      
      {/* 1. NAVBAR - High-End Blur */}
      <nav className="fixed w-full z-50 bg-[#020617]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center cursor-pointer"
          >
            <div className="text-2xl font-['Playfair_Display'] font-bold text-white tracking-tight">
              MCINTOSH
            </div>
            <VerifiedBadge />
          </motion.div>

          <div className="hidden md:flex space-x-8 text-xs font-bold tracking-[0.2em] uppercase text-slate-400">
            {['Services', 'Protocol', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-blue-400 transition-colors duration-300 relative group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>
          
          <button className="px-6 py-2 bg-white text-slate-950 text-xs font-bold uppercase tracking-widest rounded hover:bg-blue-50 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)]">
            Client Login
          </button>
        </div>
      </nav>

      {/* 2. HERO SECTION - Animated & Gradient */}
      <header className="relative min-h-screen flex items-center justify-center pt-20">
        {/* Abstract Background Glows */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[128px] pointer-events-none" />

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-slate-800/50 border border-slate-700 text-blue-400 text-xs font-bold tracking-widest uppercase mb-8 backdrop-blur-md">
              System Online • v2.4.0
            </span>
            
            <h1 className="text-6xl md:text-8xl font-['Playfair_Display'] font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-500 mb-8 leading-tight">
              Digital Perfection <br/>
              <span className="italic font-light text-slate-400">Verified.</span>
            </h1>
            
            <p className="text-lg text-slate-400 mb-10 font-light max-w-2xl mx-auto leading-relaxed">
              We don't just build software. We engineer <span className="text-white font-medium">status symbols</span> for the digital age. 
              Powered by advanced neural networks and military-grade encryption.
            </p>

            <div className="flex gap-4 justify-center">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-blue-600 text-white font-bold uppercase tracking-widest rounded-lg shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)] hover:bg-blue-500 transition-all"
              >
                Initiate
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-slate-700 text-slate-300 font-bold uppercase tracking-widest rounded-lg hover:bg-slate-800 hover:text-white transition-all"
              >
                Documentation
              </motion.button>
            </div>
          </motion.div>
        </div>
      </header>

      {/* 3. FEATURE CARDS - Glass & Hover Effects */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            <ServiceCard 
              icon={Cpu}
              title="Neural Architecture" 
              desc="Python-driven AI models that adapt to your business logic in real-time."
              delay={0.1}
            />
            <ServiceCard 
              icon={Shield}
              title="Fortress Security" 
              desc="Java Spring Boot infrastructure featuring bank-grade encryption protocols."
              delay={0.2}
            />
            <ServiceCard 
              icon={Activity}
              title="Hyper-Scaling" 
              desc="Elastic containerization ensuring 99.99% uptime during traffic spikes."
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* 4. INTERACTIVE TERMINAL - "React" Logic */}
      <section className="py-24 bg-gradient-to-b from-[#020617] to-slate-900 border-t border-slate-800">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row gap-12 items-center">
          
          <div className="md:w-1/2">
            <h2 className="text-4xl font-['Playfair_Display'] font-bold text-white mb-6">
              Talk to the <span className="text-blue-500">Mainframe</span>
            </h2>
            <p className="text-slate-400 text-lg mb-8">
              Experience our proprietary backend directly from the browser. 
              This interface communicates with our AI engine to demonstrate latency-free processing.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="p-4 rounded-lg bg-slate-900/50 border border-slate-800">
                <div className="text-2xl font-bold text-white">98ms</div>
                <div className="text-xs text-slate-500 uppercase tracking-wider">Latency</div>
              </div>
              <div className="p-4 rounded-lg bg-slate-900/50 border border-slate-800">
                <div className="text-2xl font-bold text-green-400">Secure</div>
                <div className="text-xs text-slate-500 uppercase tracking-wider">Status</div>
              </div>
            </div>
          </div>

          {/* The "Damn he used React" Terminal Component */}
          <div className="md:w-1/2 w-full">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-xl overflow-hidden bg-[#0c0c0c] border border-slate-800 shadow-2xl"
            >
              {/* Terminal Header */}
              <div className="bg-[#1a1a1a] px-4 py-3 border-b border-slate-800 flex justify-between items-center">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="text-xs font-mono text-slate-500 flex items-center gap-2">
                  <Terminal size={12} /> root@mcintosh-ai:~
                </div>
              </div>

              {/* Terminal Body */}
              <div className="p-4 h-80 overflow-y-auto font-mono text-sm custom-scrollbar bg-black/50">
                <AnimatePresence>
                  {history.map((msg, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className={`mb-3 ${msg.type === 'ai' ? 'text-blue-400' : msg.type === 'system' ? 'text-slate-500 italic' : 'text-green-400'}`}
                    >
                      <span className="opacity-50 mr-2">{msg.type === 'user' ? '>' : '#'}</span>
                      {msg.content}
                    </motion.div>
                  ))}
                  {isTyping && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-blue-400">
                      <span className="opacity-50 mr-2">#</span>
                      <span className="animate-pulse">_</span>
                    </motion.div>
                  )}
                </AnimatePresence>
                <div ref={chatEndRef} />
              </div>

              {/* Terminal Input */}
              <form onSubmit={handleCommand} className="p-3 bg-[#1a1a1a] border-t border-slate-800 flex gap-3">
                <span className="text-green-400 font-mono py-2">{'>'}</span>
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-1 bg-transparent border-none focus:ring-0 text-white font-mono text-sm placeholder-slate-600"
                  placeholder="Execute command..."
                  autoFocus
                />
                <button type="submit" disabled={!input} className="p-2 bg-blue-600 rounded hover:bg-blue-500 disabled:opacity-50 transition-colors">
                  <Send size={16} className="text-white" />
                </button>
              </form>
            </motion.div>
          </div>

        </div>
      </section>
    </div>
  );
}

export default App;