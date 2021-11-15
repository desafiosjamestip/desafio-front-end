import styled, { keyframes } from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 10vh;
  width: 100%;
  border-bottom: var(--button) solid 0.5px;
  position: relative;

  h1 {
    padding: 20px;
    color: var(--white);
  }

  ul {
    display: flex;
  }

  li {
    padding: 0 15px;
    color: var(--white);
  }

  button {
    padding: 10px;
    border: none;
    border-radius: 20px;
    background-color: transparent;
    color: var(--white);
    font-weight: bold;
  }

  button:hover {
    background-color: var(--secondary);
    color: var(--primary);
    transition: all 0.5s;
  }

  svg {
    width: 30px;
    height: 30px;
    color: var(--white);
    z-index: 3;
    cursor: pointer;

    @media only screen and (min-width: 599px) {
      display: none;
    }
  }
`;

const appearFromLeft = keyframes`
	from {
		opacity: 0;
		transform: translateX(100%)
	}
	to {
		opacity: 1;
		transform: translateX(0)
	}
`;

export const ContainerMobile = styled.div`
  @media only screen and (min-width: 599px) {
    display: none;
  }
`;

export const MenuMobile = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0px;
  transition: all 3s ease;
  background: var(--primary);
  animation: ${appearFromLeft} 0.5s;

  li {
    z-index: 4;
    justify-content: center;
    align-items: center;
    list-style: none;
    padding: 10px;
  }

  button {
    font-size: 20px;
  }

  @media only screen and (max-width: 599px) {
    display: none;
  }
`;

export const MenuDesk = styled.div`
  display: none;

  @media only screen and (min-width: 600px) {
    display: flex;
  }
`;
