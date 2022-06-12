import styled from "styled-components";

export const Container = styled.div`
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
  @media (max-width: 760px) {
    width: 100%;
    margin: 0;
    height: 92vh;
    top: 0;
    left: 0;
    box-shadow: none;
    border: none;
    padding: 0;
    margin: 0;
  }
`

export const Title = styled.h2`
  width: 100%;
  text-align: left;
  margin: 30px 0 30px 30px;
  @media (max-width: 760px) {
    margin: 15px 0 15px 0;
    text-align: center;
  }
`
export const TableItems = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  h4 {
    text-align: center;
    margin: 50px 0;
  }
  @media (max-width: 760px) {
    height: 90%;
  }
`

export const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  background: #4d5bf9;
  border: 1px solid #dedede;
`

export const ItemDesc = styled.div`
  color: #fff;
  padding: 15px 0;
  margin: 0 15px;
`

export const CreateCategory = styled.div`
  position: absolute;
  bottom: 5%;
  padding: 10px;
  width: 50%;
  text-align: center;
  margin-bottom: 20px;
  input {
    padding: 10px 20px;
  }
  @media (max-width: 760px) {
    input{
      margin-bottom: 20px; 
      margin-left: -10px;
    }
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
  @media (max-width: 760px) {
    margin: 0;
  }
`