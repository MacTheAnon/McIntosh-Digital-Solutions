import React from 'react';

const Certifications = () => {
    return (
        <div className="flex flex-wrap justify-center gap-8 py-10 grayscale hover:grayscale-0 transition duration-500">
            <div className="flex flex-col items-center">
                <img src="/csata-logo.png" alt="CSATA" className="h-16 mb-2 animate-pulse" />
                <span className="text-[10px] text-blue-400 tracking-widest font-bold">SECURED ENGINE</span>
            </div>
            <div className="flex flex-col items-center">
                <img src="/mcintosh-logo.png" alt="McIntosh" className="h-16 mb-2 opacity-50" />
                <span className="text-[10px] text-gray-500 tracking-widest font-bold">CERTIFIED PARTNER</span>
            </div>
        </div>
    );
};

export default Certifications;