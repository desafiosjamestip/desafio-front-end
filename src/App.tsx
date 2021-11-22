import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { withProductProvider } from './contexts/ProductContext';
import { Routes } from './routes'
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default withProductProvider(App);
