import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  .animated-face {
    width: 100%;
    display: flex;
    justify-content: center;
    img {
      width: 60%;
      max-width: 260px;
      opacity: 0.5;
      filter: drop-shadow(0 0 10px var(--green));
    }
  }

  .animated-welcome {
    margin-top: 20px;
    color: white;
  }

  .text {
    font-size: 20px;
    text-align: center;
    span {
      color: var(--green);
      font-weight: 700;
    }

    @media (min-width: 320px) {
      font-size: 25px;
      text-align: center;
      span {
        color: var(--green);
        font-weight: 700;
      }
    }
  }

  .animated-btn {
    display: flex;
    justify-content: center;
    width: 100%;

    .btn {
      width: 100%;
      max-width: 250px;
      margin-top: 30px;

      button {
        width: 100%;
        height: 55px;
        background-color: transparent;
        color: var(--white);
        border: 3px solid var(--green);
        border-radius: 24px;
        font-size: 25px;
        font-weight: 600;
        cursor: pointer;
        transition: 0.2s;

        :hover {
          color: black;
          background-color: var(--green);
          filter: drop-shadow(0 0 20px var(--green)) contrast(1.2)
            brightness(1.2);
        }
      }
    }
  }
`;
