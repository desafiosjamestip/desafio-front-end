import { ReactNode } from 'react';
import { Container, Wrapper } from './Main.styles';

interface MainProps {
  children: ReactNode;
}

const Main = ({ children }: MainProps) => {
  return (
    <Container>
      <Wrapper>{children}</Wrapper>
    </Container>
  );
};
export { Main };
