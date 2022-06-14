import styled from 'styled-components/macro';

type SectionContainerProps = {
  background: string;
  padding: string;
};

const SectionContainer = styled.div<SectionContainerProps>`
  height: auto;
  width: 100%;
  background: ${({ background }) => background};
  padding: ${({ padding }) => padding};
  display: flex;
  flex-direction: row;
  justify-content: center;
  min-height: 269px;
  align-items: center;
`;

const SectionWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
`;

export { SectionContainer, SectionWrapper };
