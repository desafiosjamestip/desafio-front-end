import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  body {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.gray[900]};
  }

  button {
    cursor: pointer;
  }
`;
