import React, { useState } from 'react';

const CyberGame = () => {
    const [guess, setGuess] = useState('');
    const [feedback, setFeedback] = useState('System Standby: Enter a code (1-100)');

    const playRound = async () => {
        const response = await fetch('http://localhost:8000/game', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ guess: parseInt(guess) }),
        });
        const data = await response.json();
        setFeedback(data.message);
    };

    return (
        <div className="bg-black p-6 rounded-lg border border-red-500 shadow-2xl">
            <h3 className="text-red-500 font-mono font-bold mb-3 text-center">Threat Level Simulation</h3>
            <p className="text-xs text-gray-500 mb-4 text-center">{feedback}</p>
            <div className="flex flex-col gap-3">
                <input 
                    type="number"
                    value={guess}
                    onChange={(e) => setGuess(e.target.value)}
                    className="bg-gray-900 text-red-500 border border-red-900 p-2 text-center"
                    placeholder="Enter Code"
                />
                <button onClick={playRound} className="bg-red-900 text-white py-1 hover:bg-red-700">Intercept</button>
            </div>
        </div>
    );
};

export default CyberGame;