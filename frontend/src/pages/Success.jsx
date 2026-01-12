import React from 'react';
import { CheckCircle, ShieldCheck, ArrowRight, Mail, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const SuccessPage = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6 py-12">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-2xl w-full text-center"
      >
        {/* Animated Check Icon */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="bg-brand-blue/10 p-6 rounded-full"
            >
              <CheckCircle size={80} className="text-brand-blue" />
            </motion.div>
            <ShieldCheck className="absolute -bottom-2 -right-2 text-brand-dark bg-white rounded-full p-1" size={32} />
          </div>
        </div>
        <div className="flex justify-center mb-6">
          <img 
            src="/mcintosh-logo.png" 
            alt="Logo" 
             className="h-20 w-auto"
           />
        </div>
        {/* Success Header */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Deposit <span className="text-brand-blue">Confirmed</span>
       </h1>
        <p className="text-lg text-gray-500 mb-10">
          Thank you for choosing McIntosh Digital Solutions. Your $100 non-refundable deposit has been received. 
          Your project has been moved to our **Priority Assessment Queue.**
        </p>

        {/* Next Steps Timeline */}
        <div className="bg-brand-light/20 rounded-3xl p-8 border border-blue-50 text-left mb-10">
          <h3 className="text-xl font-bold mb-6 text-brand-dark flex items-center gap-2">
            What happens next?
          </h3>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold">1</div>
              <div>
                <h4 className="font-bold text-gray-900">Analysis</h4>
                <p className="text-sm text-gray-500">Kaleb will review your task description and technical requirements.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold">2</div>
              <div>
                <h4 className="font-bold text-gray-900">Custom Quote</h4>
                <p className="text-sm text-gray-500">You will receive a detailed project quote via email within 24-48 business hours.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold">3</div>
              <div>
                <h4 className="font-bold text-gray-900">Project Launch</h4>
                <p className="text-sm text-gray-500">Once the quote is approved, we initiate the full development or security audit.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="/" 
            className="px-8 py-4 bg-brand-blue text-white rounded-xl font-bold shadow-lg hover:bg-brand-dark transition-all flex items-center justify-center gap-2"
          >
            Return Home <ArrowRight size={18} />
          </a>
          <a 
            href="https://linkedin.com/in/your-profile" 
            target="_blank"
            className="px-8 py-4 border-2 border-brand-blue text-brand-blue rounded-xl font-bold hover:bg-brand-light transition-all flex items-center justify-center gap-2"
          >
            <Linkedin size={18} /> View Certifications
          </a>
        </div>

        {/* Support Footer */}
        <div className="mt-12 flex items-center justify-center gap-2 text-gray-400 text-sm">
          <Mail size={16} />
          <span>Need immediate assistance? Support@McIntoshDigital.com</span>
        </div>
      </motion.div>
    </div>
  );
};

export default SuccessPage;