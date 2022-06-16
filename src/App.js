import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Routes from "./router";

import { Reset, RootVariables, GlobalStyles } from "./styles";

function App() {
  return (
    <div className="App">
      <Reset />
      <RootVariables />
      <GlobalStyles />

      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
