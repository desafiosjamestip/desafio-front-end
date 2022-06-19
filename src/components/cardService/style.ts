import styled from "styled-components";

export const Box = styled.div`
  height: 210px;
  width: 210px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 3px solid;
  border-radius: 10px;
  margin-left: 1.5%;
  margin-right: 1.5%;
  border-color: ${function (props) {
    return props.theme.black.primary;
  }};
  color: ${function (props) {
    return props.theme.gray.primary;
  }};
  :hover {
    transition-duration: 1s;
    cursor: pointer;
    border-color: ${function (props) {
      return props.theme.gray.primary;
    }};
    box-shadow: 0px -1px 21px 7px #60ce71;
  }
`;

export const StyledIcon = styled.div`
  font-size: 150px;
  color: ${function (props) {
    return props.theme.blue.primary;
  }};
`;
