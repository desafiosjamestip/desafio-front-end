import styled from 'styled-components';

interface ContainerProps {
  width: string;
  backgroundColor: string;
  height: string;
  justifyContent: string;
  alignItems: string;
}
const Container = styled.div<ContainerProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background: ${({ backgroundColor }) => backgroundColor};
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
`;
export { Container };
