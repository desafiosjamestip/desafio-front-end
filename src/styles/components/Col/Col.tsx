import { ReactNode } from 'react';
import { Container } from './Col.styles';

interface ColProps {
  children: ReactNode;
  justifyContent?: 'center' | 'space-around' | 'space-between';
  alignItems?: 'center' | 'flex-start' | 'flex-end';
}

const Col = ({
  children,
  justifyContent = 'space-between',
  alignItems = 'center',
}: ColProps) => {
  return (
    <Container justifyContent={justifyContent} alignItems={alignItems}>
      {children}
    </Container>
  );
};
export { Col };
