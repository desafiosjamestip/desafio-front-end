import styled from "styled-components";

export const Container = styled.div`
  .button-wrapper {
    width: 240px;
    margin-bottom: 24px;
  }
`;

export const ProductSection = styled.section`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 20px;
`;

export const EmptyProduct = styled.div`
  width: 100;
  margin: 0 auto;

  h1 {
    color: ${({ theme }) => theme.colors.primary.main};
    text-align: center;
  }
`;
