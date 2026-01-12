import React, { useState } from 'react';

const BookingForm = () => {
    const [loading, setLoading] = useState(false);

    const handlePayment = async () => {
        setLoading(true);
        try {
            // FIX 1: Removed the trailing dot from the URL
            const response = await fetch('http://localhost:8080/api/bookings/initiate', {
                method: 'POST',
                // FIX 2: Added headers and body to send the required data
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    clientEmail: "client@example.com", // In a real app, get this from an input field
                    taskDescription: "Initial Project Deposit"
                })
            });

            if (!response.ok) {
                throw new Error(`Server error: ${response.status}`);
            }

            // FIX 3: Backend returns a plain text URL, not JSON. Use response.text()
            const paymentUrl = await response.text();
            
            if (paymentUrl.startsWith("http")) {
                window.location.href = paymentUrl; // Redirect to Stripe
            } else {
                console.error("Invalid URL received:", paymentUrl);
                alert("Payment system error.");
            }
        } catch (error) {
            console.error("Payment redirect failed:", error);
            alert("Payment gateway offline. Please contact support.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-gray-800 p-6 rounded-lg border-l-4 border-green-500 shadow-lg">
            <h3 className="text-xl font-bold text-white mb-2">Project Initiation</h3>
            <p className="text-gray-400 mb-4">Secure $100 deposit to begin your AI implementation.</p>
            <button 
                onClick={handlePayment}
                disabled={loading}
                className="w-full bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-4 rounded transition duration-200 disabled:opacity-50"
            >
                {loading ? "Processing..." : "Secure with Stripe"}
            </button>
        </div>
    );
};

export default BookingForm;