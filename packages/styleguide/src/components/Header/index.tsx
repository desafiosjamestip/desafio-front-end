import React from "react";

import logo from "../../assets/logo-james.svg";

import { Container, HeaderWrapper } from "./styles";

export function Header({ children }) {
  return (
    <Container>
      <HeaderWrapper>
        <div>
          <img src={logo} alt="logo jamestip" />
        </div>
        {children}
      </HeaderWrapper>
    </Container>
  );
}
