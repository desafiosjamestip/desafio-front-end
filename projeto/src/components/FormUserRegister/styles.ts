import styled, { keyframes } from "styled-components";

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px)
  }
  to {
    opacity: 1;
    transform: translateX(0px)
  }
`;

export const InputHidden = styled.div`
  visibility: hidden;
`;

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  animation: ${appearFromLeft} 1s;

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

    .button {
      width: 100%;
      padding: 6px;
      border: none;
      border-radius: 8px;
      color: var(--primary);
      background-color: var(--secondary);
      font-weight: bold;
      font-size: 18px;
    }

    .register {
      color: var(--secondary);
    }

    h5 {
      color: var(--secondary);
      transform: translateX(30px);
    }
  }

  @media only screen and (min-width: 1024px) {
    width: 50%;
    height: 60vh;

    form {
      width: 45%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 20px;
    }
  }
`;
