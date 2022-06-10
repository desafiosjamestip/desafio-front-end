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
  height: 500px;
  background-color: var(--white);
  color: var(--black);
  position: relative;
  bottom: 0;
  z-index: 10;
  border-radius: 10px 10px 0 0;
  padding: 5px 15px;

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
    width: 22px;
    height: 22px;
    margin-top: 15px;
    background-color: red;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.2s;
    z-index: 10;

    :hover {
      background-color: firebrick;
    }
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
  margin: 0 0 10px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  p {
    color: var(--green);
    font-weight: 600;
    font-size: 25px;
  }

  span {
    font-weight: 600;
    font-size: 19px;
  }
`;

export const ModalFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 5px;

  .update {
    background-color: var(--green);
    width: 45%;
    height: 50px;
    border-radius: 24px;
    font-size: 25px;
    font-weight: 600;
    transition: 0.2s;

    :hover {
      background-color: var(--green-3);
    }
  }

  .delete {
    background-color: var(--background);
    color: var(--green);
    width: 45%;
    height: 50px;
    border-radius: 24px;
    font-size: 25px;
    font-weight: 600;
    transition: 0.2s;

    :hover {
      background-color: var(--black);
    }
  }
`;
