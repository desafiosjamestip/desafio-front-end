import styled from "styled-components";

export const Container = styled.div `
  position: absolute;
  top: 0;
  right: 0;
  width: calc(100% - 350px);
  height: 95vh;
  padding: 10px;
  margin: 20px;
  border: 1px solid #dedede;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 760px) {
    width: 100%;
    margin: 0;
    height: 90vh;
    border: none;
    box-shadow: none;
  }
`

export const Title = styled.h2`
  margin-bottom: 50px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 500px;
  width: 100%;
  label {
    margin: 10px;
  }
  input {
    display: block;
    padding: 10px;
    width:100%;
    text-align: center;
    margin-top: 5px;
  }
  select {
    display: block;
    padding: 10px;
    width: 100%;
    text-align: center;
  }
  .categoryAdd {
    width: 150px;
    height: 40px;
    white-space: nowrap;
    margin: 20px 10px;
    border: none;
    cursor: pointer;
    color: #fff;
    font-weight: 600;
    background: #4d5bf9;
  }
`

export const Button = styled.button`
  width: 150px;
  height: 40px;
  white-space: nowrap;
  margin: 20px 10px;
  border: none;
  cursor: pointer;
  color: #fff;
  font-weight: 600;
  background: #4d5bf9;
`