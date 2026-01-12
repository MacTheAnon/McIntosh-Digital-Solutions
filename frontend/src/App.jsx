import React from 'react';
import Navbar from './components/Navbar';
import BookingForm from './components/BookingForm';
import AIChatBox from './components/AIChatBox';
import CyberGame from './components/CyberGame';
import Certifications from './components/Certifications';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      
      <main>
       <section id="invention" className="pt-40 pb-20 px-6">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
    <div>
      <h2 className="text-brand-blue font-bold uppercase tracking-widest mb-4">Cyber Security and Threat Assessment</h2>
      <h3 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
        Next-Gen Threat Detection <br/> 
        Powered by <span className="text-brand-blue">CSATA AI</span>
      </h3>
      <p className="text-gray-500 text-lg mb-8">
        Secure Innovation. Community Driven. My proprietary AI engine analyzes network 
        patterns in real-time to stop breaches before they start.
      </p>
    </div>

    {/* Using your CSATA Logo here as a centerpiece */}
    <div className="bg-black rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-transform">
      <img 
        src="/csata-logo.png" 
        alt="CSATA Threat Assessment Logo" 
        className="w-full h-auto drop-shadow-[0_0_15px_rgba(0,174,239,0.5)]"
      />
    </div>
  </div>
</section>

        <Certifications />
        <CyberGame />
        <BookingForm />
      </main>

      <AIChatBox />

      <footer className="bg-brand-blue py-12 px-6 text-white text-center">
        <p className="font-bold text-xl mb-2">McIntosh Digital Solutions</p>
        <p className="opacity-80 text-sm">© 2026 Kaleb McIntosh. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;