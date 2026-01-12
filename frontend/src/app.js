import React, { useState } from 'react';

// --- SVGs for Icons (Makes it look pro without installing libraries) ---
const ChartIcon = () => (
  <svg className="w-12 h-12 text-amber-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" /></svg>
);
const ShieldIcon = () => (
  <svg className="w-12 h-12 text-amber-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
);
const ChipIcon = () => (
  <svg className="w-12 h-12 text-amber-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
);

function App() {
  const [chatMessage, setChatMessage] = useState("");

  return (
    // FONT: 'Playfair Display' for Headings, 'Lato' for text
    <div className="min-h-screen bg-slate-50 font-['Lato'] text-slate-800">
      
      {/* 1. NAVBAR - Glass Effect */}
      <nav className="fixed w-full z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="text-2xl font-['Playfair_Display'] font-bold text-white tracking-wider">
            MCINTOSH <span className="text-amber-500">DIGITAL</span>
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-semibold tracking-widest uppercase text-slate-300">
            <a href="#services" className="hover:text-amber-500 transition-colors duration-300">Services</a>
            <a href="#expertise" className="hover:text-amber-500 transition-colors duration-300">Expertise</a>
            <a href="#contact" className="hover:text-amber-500 transition-colors duration-300">Contact</a>
          </div>
          <button className="px-6 py-2 bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold uppercase tracking-widest rounded transition-all">
            Client Portal
          </button>
        </div>
      </nav>

      {/* 2. HERO SECTION - The "Wix" Look (Big Image + Overlay) */}
      <header className="relative h-[85vh] flex items-center justify-center bg-slate-900 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80" 
            alt="Corporate Office" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-slate-900/40"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
          <p className="text-amber-500 font-bold tracking-[0.3em] uppercase text-sm mb-4 animate-fade-in-up">
            Premium Digital Solutions
          </p>
          <h1 className="text-5xl md:text-7xl font-['Playfair_Display'] font-bold text-white leading-tight mb-8">
            Architecting the <br/> Future of Business
          </h1>
          <p className="text-xl text-slate-300 mb-10 font-light max-w-2xl mx-auto">
            Leveraging advanced AI and secure Java infrastructure to build enterprise-grade systems for the modern executive.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="px-10 py-4 bg-white text-slate-900 font-bold uppercase tracking-widest hover:bg-slate-200 transition shadow-xl">
              Our Services
            </button>
            <button className="px-10 py-4 border border-white/30 text-white font-bold uppercase tracking-widest hover:bg-white/10 transition backdrop-blur-sm">
              Contact Us
            </button>
          </div>
        </div>
      </header>

      {/* 3. FEATURES GRID - Clean, Professional Cards */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-['Playfair_Display'] font-bold text-slate-900 mb-4">Executive Capabilities</h2>
            <div className="h-1 w-20 bg-amber-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            {/* Card 1 */}
            <div className="p-10 bg-slate-50 border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
              <ChipIcon />
              <h3 className="text-2xl font-['Playfair_Display'] font-bold mb-4 group-hover:text-amber-600 transition-colors">AI Architecture</h3>
              <p className="text-slate-600 leading-relaxed">
                Deploying Python-based neural networks to automate complex decision-making processes for your enterprise.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-10 bg-slate-50 border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
              <ShieldIcon />
              <h3 className="text-2xl font-['Playfair_Display'] font-bold mb-4 group-hover:text-amber-600 transition-colors">Java Security</h3>
              <p className="text-slate-600 leading-relaxed">
                Bank-grade backend infrastructure powered by Spring Boot, ensuring your data remains impenetrable.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-10 bg-slate-50 border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
              <ChartIcon />
              <h3 className="text-2xl font-['Playfair_Display'] font-bold mb-4 group-hover:text-amber-600 transition-colors">Scalable Growth</h3>
              <p className="text-slate-600 leading-relaxed">
                Systems designed to scale effortlessly with your business, handling millions of requests with zero latency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. AI DEMO SECTION - Dark Tech Contrast */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <p className="text-amber-500 font-bold tracking-widest uppercase mb-2">Live Demonstration</p>
            <h2 className="text-4xl font-['Playfair_Display'] font-bold mb-6">Experience the Intelligence</h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Interact directly with our Python-powered backend. This terminal connects securely to our OpenAI integration to demonstrate real-time processing capabilities.
            </p>
            
            <div className="flex gap-4 text-sm font-bold text-slate-500">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span> SYSTEM ONLINE
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span> ENCRYPTED
              </div>
            </div>
          </div>

          {/* The Chat Interface (Styled like a Terminal) */}
          <div className="md:w-1/2 w-full">
            <div className="bg-slate-800 rounded-xl overflow-hidden shadow-2xl border border-slate-700">
              <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="p-6 h-64 overflow-y-auto font-mono text-sm space-y-4">
                <div className="text-slate-500">Initializing connection... Connected to McIntosh_AI_v1.0</div>
                <div className="bg-slate-700/50 p-3 rounded-lg rounded-tl-none inline-block max-w-[80%]">
                  <span className="text-amber-400 block text-xs mb-1">System</span>
                  Welcome. How may I assist with your executive tasks?
                </div>
              </div>
              <div className="p-4 bg-slate-800 border-t border-slate-700">
                <div className="flex gap-2">
                  <input 
                    type="text" 
                    className="w-full bg-slate-900 border border-slate-600 rounded px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition font-mono text-sm"
                    placeholder="Enter command..."
                    value={chatMessage}
                    onChange={(e) => setChatMessage(e.target.value)}
                  />
                  <button className="bg-amber-600 hover:bg-amber-700 px-6 rounded font-bold text-sm uppercase tracking-wide transition">
                    Run
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default App;