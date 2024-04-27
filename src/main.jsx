import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';

const YOUR_TRACKING_ID = 'G-6J656MK6WQ';

// Function to initialize Google Analytics
function initializeAnalytics() {
  const script = document.createElement('script');
  script.src = `https://www.googletagmanager.com/gtag/js?id=${YOUR_TRACKING_ID}`;
  script.async = true;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  gtag('js', new Date());
  gtag('config', YOUR_TRACKING_ID);
}

// Render the React application
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Initialize Google Analytics after rendering the application
initializeAnalytics();
