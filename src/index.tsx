import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Registration } from './pages/Registration';
import { Home } from './pages/Home';
import { ProductProvider } from "./hooks/useProducts"
import { ProductPage } from './pages/ProductPage';
import { GlobalStyle } from './styles/global'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ProductProvider>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro" element={<Registration />} />
          <Route path="/produto/:id" element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
    </ProductProvider>
  </React.StrictMode>
);
