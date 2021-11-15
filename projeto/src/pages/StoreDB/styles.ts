import styled from "styled-components";

export const ContainerBD = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding-top: 20px;

  text-align: center;
  background-color: var(--primary);
`;

export const CardProducts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 160px;
  height: 270px;
  padding: 10px;
  margin: 5px;

  /* border-radius: 10px; */
  box-shadow: 4px 4px 5px -2px rgba(0, 0, 0, 0.67);

  background-color: #3ecd7b;
  color: var(--primary);

  span {
    margin: 1px 0px;
    font-size: 15px;
    transform: translateY(-8px);
  }

  .description {
    font-weight: bold;
    color: red;
  }

  button {
    padding: 5px;
    border: none;
    border-radius: 5px;
    color: var(--white);
    background-color: #383838;
  }
`;
