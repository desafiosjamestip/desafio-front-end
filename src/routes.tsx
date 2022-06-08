import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import { ProductProvider } from "./context/ProductContext";
import Form from "./pages/Form";
import Home from "./pages/Home";

function Routes() {
  return (
    <ProductProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/" element={<Home />} />
          <Route path="/prod/create" element={<Form />} />
          <Route path="/prod/edit/:id" element={<Form />} />
        </Switch>
      </BrowserRouter>
    </ProductProvider>
  );
}

export default Routes;
