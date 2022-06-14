import React from "react";
import { Switch, Route } from "react-router-dom";
import ChildrenOne from "../components/dashboard";
import FormData from "../pages/form";

const Routes = () => {
    return (
      <div>
        <Switch>
        
        <Route exact path="/">
            <FormData />
          </Route>  
          <Route exact path="/products">
            <ChildrenOne />
          </Route>  
         
        </Switch>
      </div>
    );
  };
  
  export default Routes;
  