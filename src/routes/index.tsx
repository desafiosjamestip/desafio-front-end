import { Route, Switch } from "react-router-dom";
import { FormProductPage } from "../pages/FormProduct";
import { ProductsPage } from "../pages/Products";

export const Routes = () => (
  <Switch>
    <Route exact path="/" component={FormProductPage} />
    <Route exact path="/products" component={ProductsPage} />
  </Switch>
);
