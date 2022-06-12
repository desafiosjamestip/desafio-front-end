import styled from "styled-components";

export const CardLi = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 20%;
  min-width: 280px;
  max-width: 350px;
  height: 200px;
  border: 2px solid grey;
  background-color: #d4d3d3ed;
  border-radius: 8px;
  margin: 10px;
  padding: 10px;

  button {
    border: none;
    border-radius: 5px;
    height: 25px;
    background-color: #05557d;
    color: lightgray;
    transition: 0.5s;
  }

  button:hover {
    background-color: #0588c9;
    cursor: pointer;
  }
`;
