import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';

// Executive Component Imports
import Navbar from './components/Navbar';
import BookingForm from './components/BookingForm';
import ThreatMonitor from './components/ThreatMonitor';
import Certifications from './components/Certifications';
import SuccessPage from './components/SuccessPage';
import AIChatBox from './components/AIChatBox';
import CyberGame from './components/CyberGame';
import Footer from './components/Footer';

// IMPORTANT: Import the ScrollToTop component here
// (Make sure the file path matches where you saved it)
import ScrollToTop from './ScrollToTop'; 

const MainTerminal = () => {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 selection:bg-blue-500/30 font-['Lato'] overflow-x-hidden">
      
      {/* 100% VISUAL FIDELITY: Background Effects */}
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
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2 }}>
            <span className="inline-block py-1.5 px-4 rounded-full bg-slate-800/50 border border-slate-700 text-blue-400 text-[10px] md:text-xs font-black tracking-[0.3em] uppercase mb-10 backdrop-blur-md">
              System Online • Protocol v2.4.0
            </span>
            <h1 className="text-5xl md:text-8xl lg:text-9xl font-['Playfair_Display'] font-bold text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-200 to-slate-500 mb-10 leading-[0.95] tracking-tighter">
              Digital Perfection <br/>
              <span className="italic font-light text-slate-400">Verified.</span>
            </h1>
            <p className="text-base md:text-xl text-slate-400 mb-14 font-light max-w-3xl mx-auto leading-relaxed">
              We don't build software; we engineer <span className="text-white font-medium italic">status symbols</span> for the digital age. 
            </p>
          </motion.div>
        </div>
      </header>

      {/* INTELLIGENCE LAYER: Your AI Terminal */}
      <section id="intelligence" className="py-32 border-b border-white/5 bg-slate-950/20">
        <div className="max-w-6xl mx-auto px-8 flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2 text-left">
                <h2 className="text-4xl md:text-6xl font-['Playfair_Display'] font-bold text-white mb-8">Talk to the <br/> <span className="text-blue-500 italic">Mainframe</span></h2>
            </div>
            <div className="lg:w-1/2 w-full">
                <AIChatBox />
            </div>
        </div>
      </section>

      {/* EXPERTISE LAYER: Your Security Clearance & Threats */}
      <section id="expertise" className="py-32 bg-slate-900/30 relative border-y border-white/5">
        <div className="max-w-7xl mx-auto px-8 flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2 w-full">
            <h2 className="text-4xl md:text-5xl font-['Playfair_Display'] font-bold text-white mb-8">Real-Time Integrity</h2>
            <Certifications />
          </div>
          <div className="lg:w-1/2 w-full">
            <ThreatMonitor />
          </div>
        </div>
      </section>

      {/* CHALLENGE LAYER: The CyberGame Firewall */}
      <section id="bypass" className="py-24 bg-black/40 border-b border-white/5">
        <div className="max-w-4xl mx-auto text-center px-8">
            <h2 className="text-3xl font-mono text-green-500 mb-12 tracking-widest uppercase">Encryption Challenge</h2>
            <CyberGame />
        </div>
      </section>

      {/* BOOKING LAYER: The Stripe Protocol */}
      <section id="protocol" className="py-40 bg-gradient-to-b from-transparent to-[#020617] text-center relative">
        <div className="max-w-4xl mx-auto px-8 relative z-10">
          <h2 className="text-5xl md:text-7xl font-['Playfair_Display'] font-bold text-white mb-12">Initiate Protocol</h2>
          <BookingForm />
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      {/* ScrollToTop component placed here to reset scroll on route change */}
      <ScrollToTop />
      
      <Routes>
        <Route path="/" element={<MainTerminal />} />
        <Route path="/success" element={<SuccessPage />} />
      </Routes>
    </Router>
  );
}

export default App;