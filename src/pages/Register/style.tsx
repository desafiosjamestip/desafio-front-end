import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  h1 {
    font-size: 24px;
    text-align: center;
    color: var(--green);
  }
`;

export const Header = styled.header`
  max-width: 1100px;
  padding: 25px 10px;
  display: flex;
  justify-content: center;

  @media (min-width: 425px) {
    padding: 15px 10px;
  }

  @media (min-width: 1100px) {
    margin: 0 auto;
  }

  img {
    width: 150px;

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
    border-radius: 8px;
    background-color: var(--green);
    color: var(--white);
    font-size: 25px;
    font-weight: 600;
  }

  a {
    width: 100%;
  }
  .products {
    background-color: var(--gray-dark-2);
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

  .error {
    color: var(--warning);
    font-size: 12px;
  }
`;
