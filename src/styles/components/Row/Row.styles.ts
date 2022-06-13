import styled from 'styled-components';

interface ContainerProps {
  justifyContent: string;
  alignItems: string;
}
const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  width: 100%;
  height: 100%;
`;
export { Container };
