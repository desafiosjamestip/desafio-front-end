import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: left;
  border: 1px solid #dedede;
  transition: .5s;
  h5 {
    padding: 20px 0;
    margin: 0 20px;
  }
  .name {
    margin-left: 50px;
    width: 100%;
  }
`

export const Actions = styled.div`
  margin-right: 10px;
  button {
    border: none;
    color: red;
    cursor: pointer;
  }
`