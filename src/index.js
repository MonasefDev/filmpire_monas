import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const El = document.getElementById('root');
const root = ReactDOM.createRoot(El);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
