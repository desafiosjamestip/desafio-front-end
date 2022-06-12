import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { ProductProvider } from './contexts/ProductProvider';
import { Toaster } from 'react-hot-toast';

import { AppRoutes } from './pages/routes';

function App() {
  return (
    <BrowserRouter>
      <Toaster />
      <ProductProvider>
        <AppRoutes />
      </ProductProvider> 
    </BrowserRouter>  
  );
}

export default App;
