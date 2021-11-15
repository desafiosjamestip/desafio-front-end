import styled from "styled-components";

export const ModalUp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 75%;
  top: 20%;
  left: 12%;

  border-radius: 5px;
  background-color: #7392db;

  svg {
    margin-left: 85%;
    margin-top: 10px;
    width: 20px;
    height: 20px;
    color: var(--white);
  }

  form {
    max-width: 400px;
    min-width: 290px;
    width: 55%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 5px;
    gap: 20px;

    .account {
      width: 60%;
    }

    h2 {
      color: var(--white);
      margin-top: 20px;
      font-weight: 600;
    }

    input {
      color: var(--white);
      &::placeholder {
        color: var(--white);
      }
    }

    span {
      color: var(--yellow);
    }

    button {
      width: 100%;
      padding: 6px;
      border: none;
      border-radius: 8px;
      color: var(--white);
      background-color: var(--primary);
      font-weight: bold;
      font-size: 18px;
    }
  }

  @media only screen and (min-width: 1024px) {
    width: 50%;
    height: 50vh;
    top: 30%;
    left: 25%;

    form {
      width: 35%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 20px;

      button {
        opacity: 1;
        color: var(--white);
        background-color: var(--orangeCore);
      }
    }
  }
`;
