import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  max-width: 1100px;
  padding: 0px 10px;
  margin: 0 auto;

  .container-backBtn {
    display: flex;
    position: absolute;
    justify-content: center;
    align-items: center;
    top: 10px;
    width: 45px;
    height: 25px;
    background-color: var(--green-1);
    border-radius: 5px;
    cursor: pointer;
    transition: 0.2s;

    :hover {
      background-color: var(--green-2);
    }
    @media (min-width: 515px) {
      position: static;
      margin-top: 10px;
      margin-bottom: 10px;
    }
    .backBtn {
      position: relative;
      margin-right: 4px;
      stroke-width: 50px;
      color: var(--background);
    }
  }
`;

export const ContainerItem = styled.div`
  width: 100%;
  height: 640px;
  border-radius: 8px;

  .not-found {
    width: 100%;
    height: 650px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
      width: 145px;
    }

    p {
      color: var(--white);
      font-size: 20px;
      text-align: center;
      margin-top: 20px;
    }

    button {
      height: 55px;
      width: 100%;
      max-width: 300px;
      margin-top: 20px;
      border-radius: 24px;
      background-color: var(--green-1);
      color: var(--background);
      font-size: 20px;
      font-weight: 600;
      transition: 0.2s;

      :hover {
        background-color: var(--green-2);
      }
    }
  }
`;

export const ContainerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: fit-content;
  min-height: 50px;
  border-radius: 5px;
  margin: 5px 0;
  transition: 0.2s;

  div {
    color: var(--green-1);
    font-weight: 600;
    font-size: 13px;

    @media (min-width: 768px) {
      font-size: 17px;
    }
  }
`;

export const ContainerCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: fit-content;
  min-height: 50px;
  border-radius: 5px;
  margin: 5px 0;
  transition: 0.2s;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  cursor: default;

  :hover {
    background-color: var(--green-1);
  }

  span:nth-child(1) {
    text-align: start;
    width: 25%;
  }

  span {
    width: 50%;
    word-wrap: break-word;
    color: var(--white);
    font-size: 14px;
    text-align: center;

    @media (min-width: 650px) {
      font-size: 19px;
    }
  }

  .productName {
    max-width: 12ch;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: 700;

    @media (min-width: 425px) {
      max-width: 18ch;
    }

    @media (min-width: 600px) {
      max-width: 25ch;
      overflow: hidden;
    }

    @media (min-width: 1000px) {
      max-width: 35ch;
      overflow: hidden;
    }
  }

  svg {
    width: 20px;
    height: 20px;
    margin: 0 5px;
  }

  .teste {
    display: flex;
    justify-content: flex-end;
    width: 25%;
  }

  .box-item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 30px;
    background-color: var(--green-1);
    border-radius: 5px;
    -webkit-box-shadow: -1px 1px 5px 0px #161616;
    box-shadow: -1px 1px 5px 0px #161616;
    cursor: pointer;
    transition: 0.3s;

    @media (min-width: 768px) {
      width: 80px;
    }

    :hover {
      background-color: var(--green-2);
    }
  }

  .info {
    color: var(--white);
  }

  .item {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .options {
    width: 40%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
  }
`;
