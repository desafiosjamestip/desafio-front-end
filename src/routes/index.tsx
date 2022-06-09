import { Switch, Route } from "react-router-dom";
import Products from "../pages/Products";
import Register from "../pages/Register";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Register />
      </Route>
      <Route path="/products">
        <Products />
      </Route>
    </Switch>
  );
};

export default Routes;
