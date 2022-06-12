import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import ProductsList from "../Pages/ProductsList";
import RegisterForm from "../Pages/registerForm";

const Routes = () => {
  return (
    <Switch>
      <Route exact path={"/"}>
        <ProductsList />
      </Route>
      <Route exact path="/register">
        <RegisterForm />
      </Route>
    </Switch>
  );
};

export default Routes;
