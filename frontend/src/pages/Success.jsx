import React from 'react';
import { CheckCircle2, ShieldCheck, ArrowRight, Linkedin, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';

const SuccessPage = () => {
  return (
    // MATCHED THEME: Dark Slate Background (Same as App.js)
    <div className="min-h-screen bg-[#020617] text-slate-200 font-['Lato'] flex items-center justify-center px-6 py-12 relative overflow-hidden">
      
      {/* Background Glows (Consistent with Hero) */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-600/10 rounded-full blur-[128px] pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl w-full text-center relative z-10"
      >
        {/* Animated Check Icon */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="bg-green-500/10 border border-green-500/20 p-6 rounded-full shadow-[0_0_30px_rgba(34,197,94,0.2)]"
            >
              <CheckCircle2 size={80} className="text-green-400" />
            </motion.div>
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-2 -right-2 bg-[#020617] rounded-full p-2 border border-slate-800"
            >
              <ShieldCheck className="text-blue-400" size={24} />
            </motion.div>
          </div>
        </div>

        {/* Success Header */}
        <h1 className="text-4xl md:text-6xl font-['Playfair_Display'] font-bold text-white mb-6">
          Protocol <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">Established</span>
        </h1>
        <p className="text-lg text-slate-400 mb-10 leading-relaxed">
          Transaction confirmed. Your project has been encrypted and injected into our 
          <span className="text-white font-bold"> Priority Assessment Queue</span>.
        </p>

        {/* Next Steps Timeline (Dark Glass Style) */}
        <div className="bg-slate-900/50 backdrop-blur-md rounded-2xl p-8 border border-slate-800 text-left mb-10 shadow-2xl">
          <div className="flex items-center gap-2 mb-8 border-b border-slate-800 pb-4">
            <Terminal size={18} className="text-slate-500" />
            <h3 className="text-sm font-bold text-slate-300 uppercase tracking-widest">
              Execution Sequence
            </h3>
          </div>
          
          <div className="space-y-8">
            {/* Step 1 */}
            <div className="flex gap-5 group">
              <div className="flex-col flex items-center">
                <div className="w-8 h-8 rounded-full bg-blue-600/20 border border-blue-500 text-blue-400 flex items-center justify-center font-bold text-sm shadow-[0_0_15px_rgba(37,99,235,0.3)]">1</div>
                <div className="h-full w-0.5 bg-slate-800 mt-2 group-hover:bg-blue-900 transition-colors"></div>
              </div>
              <div>
                <h4 className="font-bold text-white text-lg">System Analysis</h4>
                <p className="text-sm text-slate-400 mt-1">Our lead architect will manually review your specs for optimization opportunities.</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-5 group">
               <div className="flex-col flex items-center">
                <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 text-slate-400 flex items-center justify-center font-bold text-sm">2</div>
                <div className="h-full w-0.5 bg-slate-800 mt-2"></div>
              </div>
              <div>
                <h4 className="font-bold text-slate-200 text-lg">Detailed Quote</h4>
                <p className="text-sm text-slate-400 mt-1">You will receive a secure proposal via email within 24 hours.</p>
              </div>
            </div>

            {/* Step 3 */}
             <div className="flex gap-5">
              <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 text-slate-400 flex items-center justify-center font-bold text-sm">3</div>
              <div>
                <h4 className="font-bold text-slate-200 text-lg">Deployment</h4>
                <p className="text-sm text-slate-400 mt-1">Once authorized, we commence the build.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="/" 
            className="px-8 py-4 bg-white text-slate-900 rounded-lg font-bold uppercase tracking-widest text-xs hover:bg-slate-200 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
          >
            Return to Terminal <ArrowRight size={16} />
          </a>
          <a 
            href="https://linkedin.com/in/your-profile" 
            target="_blank"
            rel="noreferrer"
            className="px-8 py-4 border border-slate-700 text-slate-300 rounded-lg font-bold uppercase tracking-widest text-xs hover:bg-slate-800 hover:text-white transition-all flex items-center justify-center gap-2"
          >
            <Linkedin size={16} /> Verify Credentials
          </a>
        </div>

        {/* Support Footer */}
        <div className="mt-12 text-slate-600 text-xs tracking-wider uppercase">
          Ticket ID: <span className="text-blue-500">#AF-{Math.floor(Math.random() * 99999)}</span> • Encrypted Connection
        </div>
      </motion.div>
    </div>
  );
};

export default SuccessPage;