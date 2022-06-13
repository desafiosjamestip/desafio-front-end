import styled from "styled-components";

export const FormItself = styled.form`
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
    background-color: var(--green-1);
    color: var(--background);
    font-size: 25px;
    font-weight: 600;
    transition: 0.2s;

    :hover {
      background-color: var(--green-2);
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
