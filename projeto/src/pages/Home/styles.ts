import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  h1 {
    color: var(--secondary);
  }
  h2 {
    color: var(--white);
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px 0px;

  button {
    margin: 5px 10px;
    padding: 10px;
    border: none;
    background: linear-gradient(to right, #308f0a, #87de41, #308f0a, #87de41);
    color: var(--primary);
    font-weight: bold;
    background-size: 300% 100%;
  }

  button:hover {
    background-position: 100% 0;
    -o-transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
  }

  @media only screen and (min-width: 800px) {
    flex-direction: row;
  }
`;
