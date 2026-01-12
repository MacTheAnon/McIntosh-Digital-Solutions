import React from 'react';
import Navbar from './components/Navbar';
import ThreatMonitor from './components/ThreatMonitor';
import AIChatBox from './components/AIChatBox';
import BookingForm from './components/BookingForm';
import CyberGame from './components/CyberGame';
import Certifications from './components/Certifications';

function App() {
  return (
    /* This container ensures the page remains dark regardless of content height */
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-6 py-10 space-y-12">
        {/* The Threat Monitor now sits at the top as a primary status bar */}
        <ThreatMonitor />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <AIChatBox />
          </div>
          <div>
            <BookingForm />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <CyberGame />
          <div className="flex flex-col justify-center bg-slate-900/40 p-6 rounded-xl border border-slate-800">
            <h3 className="text-blue-400 font-bold mb-4">Security Compliance</h3>
            <Certifications />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;