import styled from "styled-components";

export const ContainerLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  h1 {
    color: var(--color-primary);
    font-size: var(--logo);
    margin-bottom: 35.7px;
    margin-top: 20px;
  }

  .container_login-form {
    background-color: var(--grey-3);
    width: 296px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 50px;
    margin-bottom: 20px;
  }

  h2 {
    color: var(--white-1);
    font-size: var(--title);
    font-weight: bold;
    margin: 33.5px 0 22.8px;
  }

  p {
    color: var(--grey-1);
    font-size: var(--headline);
    font-weight: 600;
    margin: 27.3px 0 17.6px;
  }

  @media screen and (min-width: 769px) {
    .container_login-form {
      width: 30%;
    }

    h2 {
      margin: 6.7vh 0 4.5vh;
    }

    p {
      margin: 5.4vh 0 3.5vh;
    }
  }
`;
