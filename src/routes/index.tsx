import { Route, Switch } from "react-router-dom";

import LandingPage from '../pages/LandingPage';
import DashBoard from '../pages/Dashboard';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/dashboard" component={DashBoard} />
    </Switch>
  );
};

export default Routes;
