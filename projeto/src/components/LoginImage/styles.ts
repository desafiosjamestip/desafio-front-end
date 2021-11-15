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
  display: none;

  @media only screen and (min-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;

    img {
      width: 60%;
      animation: ${appearFromTop} 1.5s;
    }
  }
`;
