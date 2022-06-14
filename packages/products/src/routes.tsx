import { Switch, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { NewProduct } from "./pages/NewProduct";
import { EditProduct } from "./pages/EditProduct";

export default function Routes() {
  return (
    <Switch>
      <Route path="/products" exact component={Home} />
      <Route path="/products/new" component={NewProduct} />
      <Route path="/products/edit/:id" component={EditProduct} />
    </Switch>
  );
}
