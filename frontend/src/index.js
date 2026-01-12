import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Ensure global Tailwind styles are loaded first
import './App.css';   // Load custom pulse/glow animations
import App from './app.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);