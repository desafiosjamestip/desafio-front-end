import { Switch, Route, useLocation } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import Products from "../pages/Products";
import Register from "../pages/Register";
import { AnimatePresence } from "framer-motion";
import Header from "../components/Header";

const Routes = () => {
  const location = useLocation();
  return (
    <>
      <Header />
      <AnimatePresence>
        <Switch location={location} key={location.key}>
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
      </AnimatePresence>
    </>
  );
};

export default Routes;
