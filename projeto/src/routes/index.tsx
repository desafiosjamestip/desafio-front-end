import { Switch, Route } from "react-router-dom";

import { AnimatePresence } from "framer-motion";
import { Dashboard } from "../pages/Dashboard";
import { StoreBD } from "../pages/StoreDB";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Home } from "../pages/Home";

const Routes = () => {
  return (
    <AnimatePresence>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/storebd" component={StoreBD} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    </AnimatePresence>
  );
};

export default Routes;
