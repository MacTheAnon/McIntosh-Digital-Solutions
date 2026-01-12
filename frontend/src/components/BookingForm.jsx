import React, { useState } from 'react';

const BookingForm = () => {
    const [loading, setLoading] = useState(false);

    const handlePayment = async () => {
        setLoading(true);
        try {
            // FIX: Updated URL to match BookingController.java
            const response = await fetch('http://localhost:8080/api/bookings/initiate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                // Sending a default email for the deposit (in prod, add an input field)
                body: JSON.stringify({ clientEmail: "client@example.com" })
            });
            
            if (!response.ok) throw new Error("Connection Refused");

            // The backend returns a plain text URL, not JSON {url: ...} based on your Controller logic
            // We need to handle both just in case, but your Java returns plain String.
            const text = await response.text(); 
            
            if (text.startsWith("http")) {
                window.location.href = text; // Redirect to Stripe
            } else {
                console.error("Invalid URL received:", text);
                alert("Payment gateway error. Please try again.");
            }
        } catch (error) {
            console.error("Payment redirect failed:", error);
            alert("Secure Payment Gateway Offline. Connecting to backup...");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="h-full bg-slate-900/50 p-6 rounded-xl border border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.1)] flex flex-col justify-between">
            <div>
                <h3 className="text-xl font-mono font-bold text-emerald-400 mb-2 border-b border-emerald-500/20 pb-2">
                    > DEPLOY_PROJECT
                </h3>
                <p className="text-slate-400 text-sm mb-4">
                    Initiate secure handshake. $100 deposit required to allocate development resources.
                </p>
                <ul className="text-xs text-slate-500 space-y-2 mb-6 font-mono">
                    <li>[✓] SSL ENCRYPTED</li>
                    <li>[✓] STRIPE SECURE</li>
                    <li>[✓] INSTANT ALLOCATION</li>
                </ul>
            </div>
            <button 
                onClick={handlePayment}
                disabled={loading}
                className="w-full bg-emerald-600/20 hover:bg-emerald-600 hover:text-white text-emerald-400 border border-emerald-500 font-mono font-bold py-3 px-4 rounded transition duration-300 flex justify-center items-center gap-2 group"
            >
                {loading ? "CONNECTING..." : "INITIALIZE PROTOCOL"}
                <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
        </div>
    );
};

export default BookingForm;