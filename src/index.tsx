import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { Providers } from "./providers";
import { theme } from "./providers/theme";

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <Providers>
        <HashRouter>
          <App />
        </HashRouter>
      </Providers>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
