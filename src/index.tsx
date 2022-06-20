import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "styled-components";
import { theme } from "./themes/theme";
import { Providers } from "./providers";
import { GlobalStyle } from "./themes/global";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Providers>
      <ThemeProvider theme={theme}>
        <ChakraProvider>
          <GlobalStyle />
          <App />
        </ChakraProvider>
      </ThemeProvider>
    </Providers>
  </React.StrictMode>
);

reportWebVitals();
