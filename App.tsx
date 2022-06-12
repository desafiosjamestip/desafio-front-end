import React from "react";
import Routes from "./routes/route";


import GlobalContext from "./context/index";
export const App: React.FC = () => {
  return (
    <GlobalContext>
      <h1 style={{color:"#DB7093"}}>Desafio Front-End</h1>
      <Routes />
    </GlobalContext>
  );
};

export default App;
