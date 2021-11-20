import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import EditProduct from './pages/EditProduct'
import Products from './pages/Products'
import NotFound from './pages/NotFound'

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/editar/:id" component={EditProduct} />
      <Route path="/produtos" component={Products} />
      <Route path="*" component={NotFound} />
    </Switch>
  )
}
