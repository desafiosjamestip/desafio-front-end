import styled from "styled-components";

export const ContainerNP = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:center;
  margin: 0 auto;
  text-align: center;
  form {
    display: flex;
    justify-content: center;
    flex-direction: column;
    background-color: #333;
    padding: 20px 10px;
    width: 500px;
    margin: 0 auto;
    padding: 50px;
    border: 1px solid white;
    border-radius: 5px;
  }
  label {
    color: #01CFB3;
    font-weight: bold;
    margin: 10px 5px;
  }
  input, select {
    color: white;
    background-color: #333;
    border: 1px solid grey;
    border-radius: 5px;
    margin: 0 10px;
    height: 25px;
    padding: 2px;
  }

  input:hover, select:hover {
    background-color: grey;
    transition: 0.2s ease;
  }

  form button {
    margin-top: 20px;
    margin: 0 auto;
  }
`;