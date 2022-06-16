import styled from "styled-components";

export const Container = styled.div`
  background-color: #e0ffff;
  margin: 10px;
  min-width: 300px;
  width: 300px;
  border-radius: 8px;
  height: 450px;

  p,
  span {
    display: flex;
  }

  h4 {
    margin-top: 10px;
    font-size: 20px;
    font-family: inter;
  }

  .categoria {
    font-size: 14px;
  }

  .fornecedor {
    font-size: 16px;
  }
`;

export const ContainerDescription = styled.div`
  margin-left: 20px;
  height: 45%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ContainerImg = styled.div`
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 8px 8px 0px 0px;
`;

export const Img = styled.img`
  max-width: 90%;
  max-height: 85%;
  border-radius: 8px;
`;

export const ContainerButton = styled.div`
  margin-left: 15px;
  width: 90%;
  display: flex;
  margin-top: 5px;
  justify-content: flex-end;
`;
