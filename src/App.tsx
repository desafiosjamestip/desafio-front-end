import { BrowserRouter } from 'react-router-dom';
import { Menu } from './components/Menu';
import { ProductsProvider } from './hooks/useProducts';
import Routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <ProductsProvider>
        <Menu />
        <Routes />
      </ProductsProvider>
    </BrowserRouter>
  );
}

export default App;
