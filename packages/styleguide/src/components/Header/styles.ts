import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  display: flex;
  background: #1e1e1e;
`;

export const HeaderWrapper = styled.div`
  width: 990px;
  display: flex;
  margin: 0 auto;
  padding: 24px;

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
