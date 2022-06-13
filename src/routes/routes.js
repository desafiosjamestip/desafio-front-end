import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ProductList, ProductForm } from '../components';
export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductForm />} />
        <Route path="/list" element={<ProductList />} />
      </Routes>
    </Router>
  );
}
