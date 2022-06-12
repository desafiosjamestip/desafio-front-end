import styled from "styled-components";

const Container = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.4rem;

  & > button {
    width: 100%;
  }
  & button:last-child {
    background-color: #f64747 !important;
    color: #fff !important;
  }
`;

const Title = styled.h2`
  font-size: 1.6rem;
  font-weight: 700;
  text-align: center;
`;

const Image = styled.img`
  width: 15rem;
  height: auto;
`;

const Paragraph = styled.p`
  text-align: center;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
`;

export default { Container, Image, Title, Paragraph };
