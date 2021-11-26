import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
    background-color: #333;
  }

  *, button, input {
    border: 0;
    outline: 0;
    font-family: 'Roboto', sans-serif;
  }
  p {
    color: white;
  }
`;

export const Buttons = styled.button`
  top: 0px;
  float: left;
  cursor: pointer;
  border: 0;
  outline: 0;
  margin-bottom: 10px;
  color: #333;
  width: 250px;
  height: 40px;
  font-size: 15px;
  border-radius: 5px;
  font-weight: bold;
  background-color: #00D0B3;
  a {
    color: #333;
    text-decoration: none;
    padding: 10px 40px;
  }
  :hover {
    border: white 1px solid;
    transition: 0.3s ease;
  }
`;