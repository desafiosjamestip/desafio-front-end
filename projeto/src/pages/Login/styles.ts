import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;

  form {
    max-width: 400px;
    min-width: 290px;
    width: 55%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
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
      opacity: 1;
      color: var(--white);
      background-color: var(--button);
    }
  }

  @media only screen and (min-width: 1024px) {
    width: 100%;
    height: 80vh;
    flex-direction: row;

    form {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 20px;
      width: 45%;
    }
  }
`;
