import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ListProductsProviders } from "./Providers/listProducts";

ReactDOM.render(
  <React.StrictMode>
    <ListProductsProviders>
      <App />
    </ListProductsProviders>
  </React.StrictMode>,
  document.getElementById("root")
);
