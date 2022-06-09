import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  max-width: 700px;
  padding: 0px 10px;
  margin: 0 auto;

  header {
    height: 30px;

    /* 
      button {
      width: 300px;
      border-radius: 8px;
      background-color: var(--green-3);
      color: var(--white);
      font-size: 20px;
    } 
    */
  }
`;

export const ContainerItem = styled.div`
  width: 100%;
  height: 550px;
  background-color: var(--white);
  border-radius: 8px;
  padding: 5px 5px;
`;

export const ContainerCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: fit-content;
  min-height: 50px;
  background-color: var(--green-3);
  border-radius: 5px;
  margin: 5px 0;
  transition: 0.2s;
  padding-left: 10px;
  cursor: pointer;

  :hover {
    background-color: var(--green-dark);
  }

  span {
    width: fit-content;
    /* min-width: 20%; */
    word-wrap: break-word;
    color: var(--white);
    padding: 0 5px;
    font-size: 14px;
    text-align: center;
  }

  svg {
    width: 20px;
    height: 20px;
    margin: 0 5px;
  }
  .update {
    color: var(--black);
  }
  .trash {
    color: var(--black);
  }
  .info {
    color: var(--black);
  }

  .item {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .options {
    width: 40%;
    /* max-width: 100px; */
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
  }
`;
