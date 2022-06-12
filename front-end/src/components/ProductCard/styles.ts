import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  border: 1px solid #dedede;
  transition: .5s;
  h5 {
    padding: 20px 0;
    margin: 0 20px;
    width: 500px;
  }
  .category {
    margin-left: 90px;
  }
  .provider {
    margin-left: 60px;
  }
  .price {
    margin-left: 50px;
  }
  @media (max-width: 760px) {
    h5 {
      font-size: 12px;
      width: 0;
      margin: 0 15px;
      white-space: nowrap;
    }
    .price {
      margin-left: 50px;
    }
  }
`

export const Actions = styled.div`
  display: flex;
  button {
    background: transparent;
    border: none;
    .edit {
    margin: 0 10px;
    color: green;
    cursor: pointer;
    }
    .trash {
    margin: 0 10px;
    color: red;
    cursor: pointer;
    }
  }
  @media (max-width: 760px) {
    button{
      .edit {
      margin: 0 5px;
     }
    }
  }
`