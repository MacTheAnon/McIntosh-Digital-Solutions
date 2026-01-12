import React from 'react';

const BookingForm = () => {
    const handlePayment = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/bookings/initiate.', {
                method: 'POST',
            });
            const data = await response.json();
            if (data.url) {
                window.location.href = data.url; // Redirect to Stripe Checkout
            }
        } catch (error) {
            console.error("Payment redirect failed:", error);
            alert("Payment system offline. Please contact McIntosh support.");
        }
    };

    return (
        <div className="bg-gray-800 p-6 rounded-lg border-l-4 border-green-500 shadow-lg">
            <h3 className="text-xl font-bold text-white mb-2">Project Initiation</h3>
            <p className="text-gray-400 mb-4">Secure $100 deposit to begin your AI implementation.</p>
            <button 
                onClick={handlePayment}
                className="w-full bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-4 rounded transition duration-200"
            >
                Secure with Stripe
            </button>
        </div>
    );
};

export default BookingForm;