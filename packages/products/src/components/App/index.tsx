import Routes from "../../routes";

//@ts-ignore
import { theme } from "@james/styleguide";
import { BrowserRouter } from "react-router-dom";
import { Container } from "./styles";
import { ThemeProvider } from "styled-components";

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Container>
          <Routes />
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}
