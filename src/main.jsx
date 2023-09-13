import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

const rootElement = document.getElementById('root');

const root = createRoot(rootElement);

root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
);
