import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100vw;
  height: 16vh;
  background: ${function (props) {
    return props.theme.black.primary;
  }};
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const Logo = styled.img`
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0 0 12px 0;

  background-color: ${function (props) {
    return props.theme.black.primary;
  }};

  @media (max-width: 800px) {
    display: none;
  } ;
`;

export const NavBar = styled.nav`
  width: 80%;
  height: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${function (props) {
    return props.theme.black.primary;
  }};
  button {
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: ${function (props) {
      return props.theme.black.primary;
    }};
    color: ${function (props) {
      return props.theme.green.primary;
    }};
    border: none;
    border-radius: 0;
    font-size: 20px;
    :hover {
      border-bottom: 1px solid;
      border-color: ${function (props) {
        return props.theme.white.primary;
      }};
    }
  }
  button#come-back-services {
    font-size: 30px;
    color: ${function (props) {
      return props.theme.white.primary;
    }};
  }
  p {
    font-size: 15px;
    margin-right: 3px;

    background-color: ${function (props) {
      return props.theme.black.primary;
    }};
    color: ${function (props) {
      return props.theme.white.primary;
    }};
  }
  @media (max-width: 800px) {
    width: 100%;
  }
`;
