import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  max-width: 1100px;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 516px) {
    flex-direction: row;
  }

  @media (min-width: 1100px) {
    margin: 0 auto;
  }

  .title {
    width: 100%;
    /* flex-grow: 1; */
    /* margin-left: 20px; */
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  h1 {
    font-size: 20px;
    text-align: center;
    color: var(--green);
    /* border-width: 100%; */
    /* line-height: 60px; */
    @media (min-width: 516px) {
      text-align: end;
    }
  }

  img {
    width: 150px;
    margin: 15px 0;

    @media (min-width: 425px) {
      width: 50%;
      max-width: 300px;
    }
  }
`;
