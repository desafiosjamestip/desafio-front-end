import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 100px;
  border-bottom: 1px solid lightgrey;
  box-shadow: 2px 9px 15px -6px rgba(0, 0, 0, 0.7);

  h1 {
    margin: 0 auto;
    font-size: 30px;
  }

  button {
    display: flex;
    align-items: center;
    width: max-content;
    gap: 5px;
    border: none;
    border-radius: 5px;
    height: 30px;
    background-color: #05557d;
    color: lightgray;
    transition: 0.5s;
  }

  button:hover {
    background-color: #0588c9;
    cursor: pointer;
  }

  @media screen and (min-width: 780px) {
    button {
      position: absolute;
      left: 10px;
    }
  }
`;
