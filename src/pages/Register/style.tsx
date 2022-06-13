import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Header = styled.header`
  width: 100%;
  max-width: 1100px;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 516px) {
    flex-direction: row;
  }

  @media (min-width: 1100px) {
    margin: 0 auto;
  }

  h1 {
    font-size: 20px;
    text-align: center;
    color: var(--green-1);
    @media (min-width: 516px) {
      text-align: end;
    }
  }

  img {
    width: 150px;
    margin: 15px 0;

    @media (min-width: 425px) {
      width: 50%;
      max-width: 300px;
    }
  }
`;

export const ContainerForm = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 10px;
`;
