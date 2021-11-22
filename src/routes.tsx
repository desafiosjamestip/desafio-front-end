
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home'
import Shop from './pages/Shop';
export const Routes = (): JSX.Element => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/shop" component={Shop} />
    </Switch>
  );
};

