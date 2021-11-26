import { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard  from "./components/Dashboard";
import NewProduct from "./components/NewProduct";
import { MyProvider } from "./context/MyProvider";

function App() {

  useEffect(() => {
    if(localStorage.getItem('listProducts') === null) {
      localStorage.setItem('listProducts', '[]');
    }
  }, [])

  return (
    <MyProvider>
      <Switch>
        <Route exact path="/" component={ Dashboard } />
        <Route path="/newProduct" component={ NewProduct } />
      </Switch>
    </MyProvider>
  );
}

export default App;
