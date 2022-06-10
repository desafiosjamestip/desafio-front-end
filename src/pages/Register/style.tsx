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
    color: var(--green);
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

export const Form = styled.form`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  label {
    color: var(--white);
    margin-bottom: 5px;
  }

  input {
    height: 55px;
    padding: 8px;
    border-radius: 8px;
    font-size: 15px;
    font-weight: 500;
  }

  button {
    height: 55px;
    width: 100%;
    margin-top: 20px;
    border-radius: 24px;
    background-color: var(--green);
    color: var(--background);
    font-size: 25px;
    font-weight: 600;
    transition: 0.2s;

    :hover {
      background-color: var(--green-3);
    }
  }

  .products {
    background-color: #000;
    color: var(--white);

    :hover {
      background-color: var(--black);
    }
  }

  input,
  button {
    max-width: 400px;
  }
`;

export const ContainerInput = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 5px;

  .error {
    color: var(--warning);
    font-size: 12px;
    filter: contrast(2);
  }
`;
