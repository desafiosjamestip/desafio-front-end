import styled from "styled-components";
import { keyframes } from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
  background-color: #54595f;
  flex-direction: column;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  overflow-y: auto;
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
`;

export const Form = styled.form`
  padding: 20px 0px 20px 0px;
  width: 90%;
  height: 90%;
  max-width: 350px;
  text-align: center;
`;
