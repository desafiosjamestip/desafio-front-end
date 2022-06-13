import { ReactNode } from 'react';
import { Container, Wrapper } from './ContainerHeader.styles';

interface HeaderProps {
  children: ReactNode;
}

const ContainerHeader = ({ children }: HeaderProps) => {
  return (
    <Container>
      <Wrapper>{children}</Wrapper>
    </Container>
  );
};
export { ContainerHeader };
