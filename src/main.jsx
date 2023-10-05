import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { initFirebase } from './firebase/config.js';

const rootElement = document.getElementById('root');

const root = createRoot(rootElement);

initFirebase();

root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
);
