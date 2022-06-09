import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction:column;
  align-items: center;
  gap: 2.4rem;
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

export default { Container, Image, Paragraph };
