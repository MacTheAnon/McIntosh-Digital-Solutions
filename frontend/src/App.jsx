import React from 'react';
import Navbar from './components/Navbar';
import ThreatMonitor from './components/ThreatMonitor';
import AIChatBox from './components/AIChatBox';
import BookingForm from './components/BookingForm';
import CyberGame from './components/CyberGame';
import Certifications from './components/Certifications';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-blue-500/30 overflow-x-hidden">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-16">
        
        {/* SECTION 1: SYSTEM STATUS (Immediate Credibility) */}
        <section className="animate-fade-in">
          <ThreatMonitor />
        </section>

        {/* SECTION 2: ANALYST PROFILE (The Trust Builder) */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-4">
          <div className="space-y-6">
            <div className="inline-block px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full">
              <span className="text-blue-400 text-xs font-mono font-bold tracking-widest">Available for Hire</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Securing the Digital Frontier with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Advanced AI & Strategy</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed max-w-xl">
              I am a CSATA-Certified Threat Analyst and Full-Stack Developer. 
              I build resilient, automated web architectures designed to withstand modern cyber threats.
            </p>
            <div className="pt-4">
              <Certifications />
            </div>
          </div>

          <div className="relative group">
            {/* Glowing Backdrop */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            
            {/* The Badge Card */}
            <div className="relative bg-black/80 backdrop-blur-sm rounded-3xl p-8 border border-white/10 shadow-2xl transform transition-transform duration-500 hover:scale-[1.01]">
              <div className="absolute top-4 right-4 flex space-x-1">
                <div className="w-2 h-2 rounded-full bg-red-500/20"></div>
                <div className="w-2 h-2 rounded-full bg-yellow-500/20"></div>
                <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
              </div>
              
              <img 
                src="/csata-logo.png" 
                alt="CSATA Threat Assessment Logo" 
                className="w-3/4 h-auto mx-auto drop-shadow-[0_0_30px_rgba(37,99,235,0.3)] animate-soft-pulse"
              />
              
              <div className="mt-8 text-center border-t border-white/5 pt-4">
                <p className="text-xs font-mono text-slate-500 uppercase tracking-widest">Certification ID: #SEC-9921</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: COMMAND CENTER (Tools) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
             <div className="flex items-center justify-between">
                <h3 className="text-blue-400 font-mono text-sm tracking-widest uppercase flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-sm"></span> AI Intelligence Unit
                </h3>
             </div>
             <AIChatBox />
          </div>
          
          <div className="space-y-4">
             <h3 className="text-emerald-400 font-mono text-sm tracking-widest uppercase flex items-center gap-2">
               <span className="w-2 h-2 bg-emerald-500 rounded-sm"></span> Contract Deployment
             </h3>
             <BookingForm />
          </div>
        </div>

        {/* SECTION 4: SIMULATION (Engagement) */}
        <section className="pt-8 border-t border-slate-800/50">
           <div className="flex justify-center mb-8">
             <h3 className="text-slate-500 font-mono text-xs uppercase tracking-[0.3em] bg-slate-900 px-4 py-1 rounded-full border border-slate-800">
               Vulnerability Assessment Sandbox
             </h3>
           </div>
           <CyberGame />
        </section>
      </main>

      <footer className="border-t border-slate-800 bg-black/40 py-12 px-6 mt-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
             <p className="font-bold text-xl text-white tracking-tight">McIntosh Digital Solutions</p>
             <p className="text-slate-500 text-sm mt-1">Defense-Grade Web Architecture</p>
          </div>
          <p className="opacity-60 text-xs font-mono uppercase tracking-widest text-slate-500">
            © 2026 Kaleb McIntosh. All Systems Operational.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;