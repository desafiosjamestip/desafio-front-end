import { Route, Switch } from 'react-router-dom';

import Cadastro from './pages/cadastro';
import Editar from './pages/editar';
import Home from './pages/home';

const Routes = (): JSX.Element => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/cadastro" component={Cadastro} />
      <Route path="/editar/:sku" component={Editar} />
    </Switch>
  );
};

export default Routes;
