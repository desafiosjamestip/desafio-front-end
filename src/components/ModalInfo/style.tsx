import styled from "styled-components";

export const ModalScreen = styled.div`
  width: 100%;
  bottom: 0;
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
  height: 450px;
  background-color: var(--white);
  color: var(--black);
  position: relative;
  bottom: 0;
  z-index: 10;
  border-radius: 10px 10px 0 0;
  padding: 5px 10px;

  @media (min-width: 500px) {
    border-radius: 10px;
  }
`;

export const ModalHeader = styled.header`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 19px;
  color: var(--white);

  svg {
    width: 22px;
    height: 22px;
    background-color: var(--warning);
    border-radius: 5px;
  }
`;

export const ModalBody = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ModalInfoItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin: 10px 0;

  p {
    color: var(--green-dark);
    font-weight: 600;
    font-size: 25px;
  }

  span {
    font-weight: 600;
    font-size: 19px;
  }
`;
