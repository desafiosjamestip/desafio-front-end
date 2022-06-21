import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { GlobalStyle } from './styles/GlobalStyle';

import Providers from './providers';

import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Providers>
    <BrowserRouter>
      <React.StrictMode>
        <GlobalStyle />
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Providers>
);
