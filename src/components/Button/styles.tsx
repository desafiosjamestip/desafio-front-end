import styled from "styled-components";

const Button = styled.button`
  width: fit-content;
  height: auto;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  padding: 0.8rem 1.4rem;
  font-weight: 700;
  border: none;
  border-radius: 2.4rem;
  background-color: #00CFB3;
  color: #000;

  font-family:'Poppins', sans-serif;

  cursor:pointer;
  transition: 0.3s;

  &:disabled {
    background-color: #797a85;
    cursor: no-drop;
  }

  &:hover{
    filter: brightness(0.8);
  }

  &:active{
    filter: brightness(0.8);
  }
`;

export default { Button };
