import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
// import { initFirebase } from './firebase/config.js';

const rootElement = document.getElementById('root');

const root = createRoot(rootElement);
// init initFirebase();

root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
);
