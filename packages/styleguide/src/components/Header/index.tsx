import React from "react";

import logo from "../../assets/logo-james.svg";

import { Container } from "./styles";

export function Header({ children }) {
  return (
    <Container>
      <div>
        <img src={logo} alt="logo jamestip" />
      </div>
      {children}
    </Container>
  );
}
