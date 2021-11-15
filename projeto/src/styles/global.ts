import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  :root {
      --white: #fff;
      --yellow: #F0BC12;
      --primary: #0F1144;
      --secondary: #87de41;
      --button: #3ecd7b;
  }

  body {
    background: #0F1144;
;
    font-family: 'Comfortaa', cursive;
    -webkit-font-smoothing: antialiased !important
  }

  body, input, button {
    font-family: 'Comfortaa', cursive;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  li {
    list-style-type: none;
  }
`;
