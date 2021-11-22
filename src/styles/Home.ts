import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  aside {
    width: 448px;
    background: linear-gradient(329.54deg, #29b6d105 0%, #00c7c7 100%);
    padding: 80px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  aside h2 {
    font-size: 40px;
    font-weight: 800;
    line-height: 42px;
    margin-top: 64px;
  }
  aside p {
    line-height: 28px;
    margin-top: 24px;
  }
  aside footer {
    display: flex;
    flex-direction: column;
    line-height: 24px;
  }
  aside footer strong {
    font-weight: 800;
  }
`;
