import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import App from './app.js';
// ensure this import exists (if your project was created with CRA PWA template)
import * as serviceWorker from './serviceWorker'; 

const root = ReactDOM.createRoot(document.getElementById('root'));

// 1. Render the App (Clean, no extra logic here)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// 2. Register the Service Worker (OUTSIDE the render loop)
// This enables the "Install App" feature and offline caching
serviceWorker.register();