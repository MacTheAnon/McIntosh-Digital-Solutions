import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-blue-50 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo Implementation */}
        <div className="flex items-center gap-3">
          <img 
            src="/mcintosh-logo.png" 
            alt="McIntosh Digital Solutions" 
            className="h-12 w-auto object-contain" // Keeps the logo crisp
          />
          <div className="hidden sm:block leading-tight">
            <h1 className="text-brand-blue font-bold text-lg">McIntosh</h1>
            <p className="text-gray-400 text-xs uppercase tracking-widest">Digital Solutions</p>
          </div>
        </div>
        
        {/* Navigation Links */}
        <div className="hidden md:flex gap-8 text-sm font-semibold text-gray-600">
          <a href="#invention" className="hover:text-brand-blue transition">The Invention</a>
          <a href="#booking" className="hover:text-brand-blue transition">Services</a>
          <a href="/linkedin" className="text-brand-blue">Certifications</a>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;