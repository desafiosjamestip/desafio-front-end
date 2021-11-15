import styled, { keyframes } from "styled-components";

const appearFromTop = keyframes`
  from {
    opacity: 0;
    transform: translateY(-150px)
  }
  to {
    opacity: 1;
    transform: translateX(0px)
  }
`;

export const ContainerImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 80%;
    animation: ${appearFromTop} 1.5s;
  }

  @media only screen and (min-width: 400px) {
    width: 80%;
    margin: 80px 0px;

    img {
      width: 80%;
      animation: ${appearFromTop} 1.5s;
    }
  }

  @media only screen and (min-width: 600px) {
    img {
      width: 80%;
      animation: ${appearFromTop} 1.5s;
    }
  }

  @media only screen and (min-width: 800px) {
    img {
      width: 40%;
      margin-top: -40px;
      animation: ${appearFromTop} 1.5s;
    }
  }
`;
