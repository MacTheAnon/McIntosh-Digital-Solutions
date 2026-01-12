import React, { useState, useEffect } from 'react';

export default function ThreatMonitor() {
  const [threats, setThreats] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setThreats(prev => prev + Math.floor(Math.random() * 3));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black text-green-500 font-mono p-4 rounded-lg border border-brand-blue/30 mt-4">
      <p className="text-xs animate-pulse">● CSATA ENGINE ACTIVE</p>
      <p className="text-xl">NEURAL THREATS BLOCKED: {threats}</p>
      <div className="w-full bg-gray-900 h-1 mt-2">
        <div className="bg-brand-blue h-full animate-progress" style={{width: '60%'}}></div>
      </div>
    </div>
  );
}