import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';

import App from './App';
import { store } from './store/index';
import ToggleColorMode from './utis/toggleColorMode';

const El = document.getElementById('root');
const root = ReactDOM.createRoot(El);
root.render(
  <Provider store={store}>
    <ToggleColorMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ToggleColorMode>
  </Provider>
);
