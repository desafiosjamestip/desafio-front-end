import styled from "styled-components";

const Container = styled.div`
  width: 100%
  display: flex;
  flex-direction: column;
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

const Section = styled.section`
  display: block;
  width: 100%;
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  border-spacing: 0 0.5rem;
  color: #969cb3;
`;

const Thead = styled.thead``;

const Tr = styled.tr`
  opacity: 0.7;

  &:hover {
    opacity: 1;
  }
`;

const Th = styled.th`
  background: white;

  font-weight: normal;
  padding: 1rem 2rem;

  text-align: left;

  &:first-child {
    border-radius: 0.25rem 0 0 0.25rem;
  }
  &:last-child {
    border-radius: 0 0.25rem 0.25rem 0;
  }
`;

const Tbody = styled.tbody``;

const Td = styled.td`
  background: white;
  padding: 1rem 2rem;
  color: #000;

  &:first-child {
    border-radius: 0.25rem 0 0 0.25rem;
  }
  &:last-child {
    border-radius: 0 0.25rem 0.25rem 0;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  & button{
    background: transparent;
  }
`;

export default {
  Container,
  Image,
  Paragraph,
  Section,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  ButtonGroup,
};
