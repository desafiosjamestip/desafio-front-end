import styled from "styled-components";

export const Header = styled.header`
  width: 100vw;
  height: 15vh;
  display: flex;
  align-items: center;

  @media (max-width: 800px) {
    background-color: ${function (props) {
      return props.theme.black.secondary;
    }};
  }
`;

export const Logo = styled.div`
  width: 220px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0 0 12px 0;

  background-color: ${function (props) {
    return props.theme.black.primary;
  }};
  img {
    background-color: ${function (props) {
      return props.theme.black.primary;
    }};
  }
  @media (max-width: 800px) {
    width: 180px;
  }
  @media (max-width: 500px) {
    width: 140px;
  }
`;

export const TitleHeader = styled.h1`
  font-size: 48px;
  font-weight: bold;
  width: 75%;
  text-align: center;
  color: ${function (props) {
    return props.theme.blue.primary;
  }};
  @media (max-width: 800px) {
    font-size: 35px;
  }
  @media (max-width: 500px) {
    font-size: 25px;
  }
`;

export const UserItem = styled.div`
  width: 68px;
  height: 68px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${function (props) {
    return props.theme.black.primary;
  }};
  color: ${function (props) {
    return props.theme.blue.primary;
  }};
  font-size: 30px;
`;

export const PageBody = styled.div`
  width: 100vw;
  height: 80vh;
  display: flex;
  align-items: center;
  section {
    width: 100%;
    height: 210px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    @media (max-width: 500px) {
      height: 90%;

      flex-direction: column;
      justify-content: space-evenly;
    }
  }
`;
