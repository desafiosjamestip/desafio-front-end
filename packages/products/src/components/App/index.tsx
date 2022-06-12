import Routes from "../../routes";

//@ts-ignore
import { theme } from "@james/styleguide";
import { BrowserRouter } from "react-router-dom";
import { Container } from "./styles";
import { ThemeProvider } from "styled-components";
import { ProductProvider } from "../../contexts/Product";

export default function App() {
  return (
    <ProductProvider>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Container>
            <Routes />
          </Container>
        </ThemeProvider>
      </BrowserRouter>
    </ProductProvider>
  );
}
