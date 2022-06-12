import styled from "styled-components";

export const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 50px;

  input {
    height: 40%;
  }
  div span {
    color: red;
  }
`;

export const Input = styled.input.attrs({
  placeholderTextColor: "dark grey",
})`
  background-color: grey;

  :focus {
    border: 2px solid grey;
  }
`;
