import styled from "styled-components";

export const Container = styled.button`
  font-size: ${(props) => (props.fontSize ? props.fontSize : "16px")};
  width: ${(props) => (props.width ? props.width : "max-content")};
  background-color: ${(props) => (props.bgcolor ? props.bgcolor : "#00D0B3")};
  color: ${(props) => (props.color ? props.color : "#000000")};
  padding: 3px 8px;
  border: none;

  border-radius: ${(props) => (props.bdradius ? props.bdradius : "8px")};
  cursor: pointer;
  height: ${(props) => (props.height ? props.height : "30px")};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  :hover {
    background-color: ${(props) =>
      props.deleteProduct ? "#FF0000" : "#00FA9A"};
  }
`;
