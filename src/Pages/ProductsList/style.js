import styled from "styled-components";

export const ContainerVitrini = styled.div`
  height: 100vh;
  background-color: #000000;
`;

export const ContainerHeader = styled.div`
  background-color: #000000;
  height: 20%;
  justify-content: space-between;
  padding: 20px;
  display: flex;
  align-items: center;
`;

export const H3 = styled.h3`
  color: #e0ffff;
  font-size: 30px;
  font-family: poppins;

  @media screen and (min-width: 500px) {
    font-size: 60px;
  }
`;
