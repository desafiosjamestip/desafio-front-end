import styled from "styled-components";

interface MainProps {
  fullWidth: boolean;
}

interface ContainerProps {
  showButton: boolean;
}

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 2rem 2rem 10rem 2rem;
  text-align: center;
  background-color: #101010;

  width: 100vw;
`;

const Container = styled.div<ContainerProps>`
  max-width: 1024px;
  width: 100%;
  height: 52px;

  display: flex;
  flex-direction: row;
  align-items: center;
  
  justify-content: ${props => props.showButton ? "space-between" : "center"};

  & div {
    width: 12rem;
    height: 2.4rem;
    background: transparent;
  }
`;
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap:0.8rem;
  width: 100vw;
`;

const Main = styled.div<MainProps>`
  ${(props) =>
    props.fullWidth ? `max-width: 1024px; width: 100%;` : `width: fit-content;`};

  margin-top: -8rem;

  padding: 2rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  overflow-x: auto;
  background-color: #F7F7F7;
  border-radius: 0.8rem;
`;

const Image = styled.img`
  width: 15rem;
  height: auto;
`;

const Paragraph = styled.p`
  text-align: center;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
`;

export default { Header, Container, MainContainer, Main, Image, Paragraph };
