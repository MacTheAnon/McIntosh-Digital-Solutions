import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, ShieldCheck, ChevronRight, CreditCard } from 'lucide-react';
import { loadStripe } from '@stripe/stripe-js';

const BookingForm = () => {
    const [loading, setLoading] = useState(false);
    const [userEmail, setUserEmail] = useState("admin@mcintosh.com");

    const handlePayment = async () => {
        setLoading(true);
        console.log("Initiating Payment Protocol...");
        
        // Remove trailing slash if present to prevent double-slash errors
        const backendUrl = process.env.REACT_APP_BIZ_BACKEND_URL.replace(/\/$/, "");
        console.log("Backend URL:", backendUrl);

        try {
            // FIX 1: Updated endpoint from 'bookings' to 'payments' to match Java Controller
            const response = await fetch(`${backendUrl}/api/payments/create-session`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: userEmail })
            });
            
            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Server Error: ${errorText}`);
            }

            const data = await response.json();
            console.log("Session Data Received:", data);
            
            // FIX 2: Check for 'id' (what Java sends) instead of 'sessionId'
            if (data.id) {
                const stripe = await loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);
                await stripe.redirectToCheckout({ sessionId: data.id });
            } else {
                console.error("No Session ID returned. Payload:", data);
                alert("Payment Protocol Error: Invalid Session ID");
            }

        } catch (error) {
            console.error("Payment Protocol Failed:", error);
            alert(`Payment Gateway Error: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full px-4 md:px-0">
            <motion.div 
                whileHover={{ y: -5 }}
                className="relative bg-[#0c0c0c] border border-slate-800 p-6 md:p-8 rounded-2xl shadow-2xl max-w-md mx-auto"
            >
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2.5 bg-blue-500/10 rounded-xl border border-blue-500/20">
                        <Lock className="text-blue-400" size={20} />
                    </div>
                    <div className="text-left">
                        <h3 className="text-white font-bold text-lg leading-tight">Secure Onboarding</h3>
                        <p className="text-[10px] text-slate-500 uppercase tracking-widest">Priority Queue Access</p>
                    </div>
                </div>

                <div className="bg-slate-900/50 rounded-xl border border-slate-800 p-4 mb-6 text-left">
                    <div className="flex justify-between items-center mb-1">
                        <span className="text-slate-400 text-xs">Standard Retainer</span>
                        <span className="text-white font-mono font-bold">$100.00</span>
                    </div>
                    <p className="text-[10px] text-slate-500 italic">* Non-refundable integration fee</p>
                </div>

                <button 
                    onClick={handlePayment}
                    disabled={loading}
                    className="w-full bg-white text-slate-950 font-black py-4 rounded-xl flex items-center justify-center gap-2 uppercase tracking-tighter text-xs hover:bg-blue-50 transition-all active:scale-95 disabled:opacity-50"
                >
                    {loading ? "Establishing Link..." : "Initiate Secure Stripe Payment"}
                    <ChevronRight size={16} />
                </button>

                <div className="mt-6 flex flex-col items-center gap-2 opacity-40">
                    <div className="flex gap-4">
                        <CreditCard size={14} className="text-white" />
                        <ShieldCheck size={14} className="text-white" />
                    </div>
                    <span className="text-[9px] uppercase tracking-[0.2em] text-white">Bank-Grade Encryption Verified</span>
                </div>
            </motion.div>
        </div>
    );
};

export default BookingForm;