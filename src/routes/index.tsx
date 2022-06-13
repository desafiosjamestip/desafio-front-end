import { Switch, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import Products from "../pages/Products";
import Register from "../pages/Register";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
