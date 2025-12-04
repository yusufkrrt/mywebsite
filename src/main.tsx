import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import logoNoBg from './assets/logo_no_background.png';

const favicon = document.querySelector<HTMLLinkElement>("link[rel='icon']");
if (favicon) {
  favicon.href = logoNoBg;
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);