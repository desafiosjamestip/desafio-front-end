import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  padding: 24px;
  display: flex;
  background: #1e1e1e;

  nav {
    margin-left: 48px;
    display: flex;
    align-items: center;

    button {
      color: #fff;
      background: none;
      border: none;
      font-size: 1rem;
      font-family: "Inter", sans-serif;
      font-weight: bold;
    }

    button + button {
      margin-left: 12px;
    }
  }
`;
