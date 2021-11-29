import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './pages/Main';
import Navbar from './components/Navbar';
import Adicionar from './pages/Adicionar';
import {GlobalStyles} from './styles';
import Editar from './pages/Editar';
import Product from './pages/Product';


function App() {
  return (
    <>
      <GlobalStyles/>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/adicionar" element={<Adicionar/>} />
          <Route path="/editar/:index" element={<Editar/>} />
          <Route path="/product/:index" element={<Product/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
