import styled from "styled-components";

export const PageBody = styled.article`
  width: 100vw;
  height: 80vh;
  display: flex;
  flex-direction: row;
`;

export const PageAdd = styled.section`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const PageForm = styled.form`
  width: 80%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 2%;
  @media (max-width: 500px) {
    width: 95%;
  }
`;

export const Title = styled.h2`
  padding-top: 6%;
  padding-bottom: 4%;
  font-weight: 1000;
  font-size: 35px;
  color: ${function (props) {
    return props.theme.blue.primary;
  }};
`;
export const PageImg = styled.img`
  width: 50%;
  height: 100%;
  @media (max-width: 800px) {
    display: none;
  }
`;

export const Input = styled.input`
  width: 90%;
  height: 40px;
  padding-left: 20px;
  font-size: 15px;
  background-color: ${function (props) {
    return props.theme.gray.secondary;
  }};
  border: none;
`;

export const Select = styled.select`
  width: 90%;
  height: 40px;
  padding-left: 20px;
  font-size: 15px;
  background-color: ${function (props) {
    return props.theme.gray.secondary;
  }};
  border: none;
`;
export const Span = styled.span`
  display: flex;
  align-items: flex-start;
  width: 90%;
  padding-right: 18px;
  padding-left: 2px;
  padding-bottom: 5px;

  font-weight: bold;
  font-size: 12px;
  color: ${function (props) {
    return props.theme.helpers.error;
  }};
`;
