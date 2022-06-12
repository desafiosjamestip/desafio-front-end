import styled from 'styled-components';

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
    height: 95vh;
    border: none;
    box-shadow: none;
    padding: 0;
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
`

export const Title = styled.h2`
  margin: 30px;
`

export const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  background: #4d5bf9;
  border: 1px solid #dedede;
`
export const ItemDesc = styled.h5 `
  color: #fff;
  padding: 15px 0;
  margin: 0 5px;
  @media(max-width: 760px) {
    color: #fff;
    padding: 15px 0;
    font-size: 12px;
  }
`

export const Button = styled.button `
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