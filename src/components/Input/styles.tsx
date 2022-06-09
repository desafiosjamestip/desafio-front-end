import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: auto;
`;

const Input = styled.input`
  width: 100%;
  border-radius: 0.4rem;
  background-color: #fff;
  color: #000;
  font-weight: 500;
  padding: 0.8rem 1.4rem;
  border: none;
  margin: 0.4rem 0;

  &::placeholder {
    color: #0000004d;
  }

  &:disabled {
    background-color: #f3f5ff;
    border: 1px solid #0000004d;
    color: #0000004d;
    font-weight: 500;
    cursor: no-drop;
  }
`;

const Label = styled.label`
  color: #969CB2;
  font-weight: 400;
  margin: 0.8rem 0;
`;

export default { Container, Input, Label };
