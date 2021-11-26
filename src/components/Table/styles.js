import styled from "styled-components";

export const ContainerTable =  styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 50px;
  justify-content: center;

  --green: #00D0B3;

  .titles {
    display: flex;
    justify-content: space-between;
    text-align: center;
    width: 100%;
    color: var(--green);
    padding: 20px;
  }

  .titles h2 {
    flex: 1;
    align-self: center;
  }
`;

export const ContainerList = styled.div`
  .div-list {
    padding: 20px;
    display: flex;
    margin: 15px 0;
    border-bottom: 1px solid #6D6D6D;
    justify-content: space-between;
    align-items: center;
  }
  p {
    flex: 1;
    text-align: center;
  }
  svg {
    font-size: 20px;
    cursor: pointer;
  }
`;

export const ContainerHeader = styled.header`
  background-color: #333;
  display: flex;
  justify-content: center;
  background-color: #101010;
`;