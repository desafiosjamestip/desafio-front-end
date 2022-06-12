import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #d8d8d8;
  width: 30%;
  min-width: 280px;
  max-width: 400px;
  height: 400px;
  margin: 60px auto;
  padding: 10px;
  border: 2px solid black;
  border-radius: 8px;

  button {
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
`;
