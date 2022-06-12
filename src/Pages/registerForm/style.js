import styled from "styled-components";
import { keyframes } from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
  justify-content: center;
  background-color: #101010;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;

  img {
    width: 50vw;

    @media (max-width: 900px) {
      display: none;
    }
  }
`;

const animationAppearFromRight = keyframes`
  from{
      opacity: 0;
      transform: translateX(50px)
  }
  to{
      opacity: 1;
      transform: translateX(0px)
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${animationAppearFromRight} 1s;
  width: 100%;

  form {
    width: 100%;
    max-width: 450px;
    text-align: center;
  }
`;
