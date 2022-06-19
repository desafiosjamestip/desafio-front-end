import styled from "styled-components";

export const PageBody = styled.article`
  width: 100vw;
  padding-left: 5vw;
  padding-right: 5vw;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ContainerTitleAndSearch = styled.section`
  width: 100%;
  padding-top: 3%;
  padding-bottom: 2.5%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 615px) {
    flex-direction: column;
    align-items: center;
  } ;
`;
export const PageSearch = styled.section`
  width: 40%;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-left: auto;
  @media (max-width: 800px) {
    padding: 0;
    width: 50%;
  }
  @media (max-width: 615px) {
    width: 80%;
    margin-top: 3%;
    margin-bottom: 3%;
    margin-left: 0;
  } ;
`;

export const Title = styled.h2`
  font-weight: 1000;
  font-size: 35px;
  color: ${function (props) {
    return props.theme.blue.primary;
  }};
`;

export const Input = styled.input`
  width: 80%;
  height: 40px;
  padding-left: 20px;
  font-size: 15px;
  border-radius: 5px;
  background-color: ${function (props) {
    return props.theme.gray.secondary;
  }};
  border: none;
`;

export const ButtonSearch = styled.button`
  width: 40px;
  height: 40px;
  border: 0;
  background-color: ${function (props) {
    return props.theme.black.primary;
  }};
  color: ${function (props) {
    return props.theme.green.primary;
  }};
  font-size: 20px;
  margin-left: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    transition-duration: 1s;
    cursor: pointer;
    border-color: ${function (props) {
      return props.theme.gray.primary;
    }};
    box-shadow: 0px -1px 21px 7px #60ce71;
  }
`;

export const ContainerCards = styled.section`
  width: 100%;
  height: 90%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;
