import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const El = document.getElementById('root');
const root = ReactDOM.createRoot(El);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
