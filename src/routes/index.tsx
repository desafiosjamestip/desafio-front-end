import { Route, BrowserRouter, Routes } from "react-router-dom";
import { ProductsPage } from "../pages/productsPage";
import { RegisterProductsPage } from "../pages/registerProductsPage";
import { ServicesPage } from "../pages/ServicesPage";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<ServicesPage />} />
        <Route path={"/registerProducts"} element={<RegisterProductsPage />} />
        <Route path={"/products"} element={<ProductsPage />} />
        <Route path={"/*"} element={<ServicesPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
