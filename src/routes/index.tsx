import { Switch, Route } from "react-router-dom";
import ProductsListPage from "../pages/ProductsListPage";
import ProductRegistration from "../pages/RegisterProdutPage";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <ProductRegistration />
      </Route>
      <Route path="/products_registered">
        <ProductsListPage />
      </Route>
    </Switch>
  );
};

export default Routes;
