import React, { useState, useEffect } from 'react';

const ThreatMonitor = () => {
  const [threats, setThreats] = useState(1240);

  useEffect(() => {
    const interval = setInterval(() => {
      setThreats(prev => prev + Math.floor(Math.random() * 5));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden bg-black/60 border border-blue-500/20 p-4 rounded-lg cyber-border">
      {/* The Scanning Line Animation */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-full h-[2px] bg-blue-500/20 animate-scan relative"></div>
      </div>

      <div className="flex items-center justify-between relative z-10">
        <div className="flex items-center space-x-3">
          <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
          <span className="text-[10px] font-mono tracking-widest text-blue-400 uppercase">
            System Integrity: Secure
          </span>
        </div>
        <span className="text-xs font-mono text-slate-500">Node: 192.168.1.104</span>
      </div>

      <div className="mt-2 relative z-10">
        <h2 className="text-2xl font-mono font-bold text-slate-100">
          Neural Threats Blocked: <span className="text-blue-500">{threats.toLocaleString()}</span>
        </h2>
      </div>
    </div>
  );
};

export default ThreatMonitor;