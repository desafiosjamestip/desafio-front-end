import { Route, Switch } from "react-router-dom"
import Dashboard from "../pages/Dashboard"
import ProductRegister from "../pages/ProductRegister"

const Routes = () =>{
    return(
        <Switch>
            <Route exact path={'/'}>
                <ProductRegister/>
            </Route>
            <Route path={'/dashboard'}>
                <Dashboard/>
            </Route>
        </Switch>
    )
}

export default Routes