import styled from "styled-components";

export const ModalScreen = styled.div`
  width: 100%;
  top: 0;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  @media (min-width: 500px) {
    align-items: center;
  }
`;

export const ModalWrapper = styled.div`
  width: 100%;
  max-width: 500px;
  height: 500px;
  background-color: var(--white);
  color: var(--black);
  position: relative;
  z-index: 10;
  border-radius: 10px 10px 0 0;
  padding: 10px;

  @media (min-width: 500px) {
    border-radius: 10px;
  }
`;

export const ModalHeader = styled.header`
  width: 100%;
  height: 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 19px;
  color: var(--white);

  svg {
    width: 25px;
    height: 25px;
    background-color: var(--warning);
    border-radius: 5px;
  }
`;

export const ModalBody = styled.form`
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;

  input:disabled {
    background-color: #dfdfdf;
  }

  input {
    height: 50px;
    padding: 8px;
    border-radius: 8px;
    font-size: 15px;
    font-weight: 500;
    background-color: #efefef;
  }

  button {
    width: 300px;
    height: 55px;
    margin: 20px auto;
    border-radius: 8px;
    background-color: var(--green-3);
    color: var(--white);
    font-size: 20px;
  }
`;
