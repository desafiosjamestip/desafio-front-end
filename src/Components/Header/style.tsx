import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  height: 80px;
  align-items: center;
  justify-content: space-between;
  background-color: #8a2be2;
  a {
    text-decoration: none;
    font-size: 3vh;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    font-weight: bold;
    color: white;
    cursor: pointer;
    font-family: "Alfa Slab One", cursive;
    font-family: "Hepta Slab", serif;
    font-family: "Julius Sans One", sans-serif;
  }
  a:hover {
    transform: scale(1.05);
  }
`;
