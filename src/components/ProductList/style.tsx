import styled from "styled-components";

export const Variants = {
  // hidden: {
  //   opacity: 0,
  // },
  // visible: {
  //   opacity: 1,
  //   transition: { delay: 1.5, duration: 1.5 },
  // },
  exit: {
    x: "-100vh",
    transition: { ease: "easeInOut" },
  },
};

export const Container = styled.div`
  width: 100%;
  /* height: 100vh; */
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
    background-color: var(--green);
    border-radius: 5px;
    cursor: pointer;
    transition: 0.2s;

    :hover {
      background-color: var(--green-3);
    }
    @media (min-width: 515px) {
      position: static;
      margin-top: 10px;
      margin-left: 5px;
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
  /* overflow: auto; */
  /* background-color: var(--white); */
  border-radius: 8px;
  padding: 5px 5px;

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
      background-color: var(--green);
      color: var(--background);
      font-size: 20px;
      font-weight: 600;
      transition: 0.2s;

      :hover {
        background-color: var(--green-3);
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
  padding: 0 14px;

  div {
    color: var(--green);
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
  padding: 0 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  border-top: 1px solid rgba(255, 255, 255, 0.1);

  cursor: pointer;

  :hover {
    background-color: var(--green);
  }

  span {
    width: fit-content;
    word-wrap: break-word;
    color: var(--white);
    padding: 0 5px;
    font-size: 14px;
    text-align: center;

    @media (min-width: 650px) {
      font-size: 19px;
    }
    @media (min-width: 1000px) {
      font-size: 23px;
    }
  }

  .productName {
    font-weight: 700;
  }

  svg {
    width: 20px;
    height: 20px;
    margin: 0 5px;
  }

  .box-item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 30px;
    background-color: var(--green);
    border-radius: 5px;
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
    /* max-width: 100px; */
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
  }
`;
