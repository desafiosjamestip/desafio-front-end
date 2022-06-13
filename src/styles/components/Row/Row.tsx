import { ReactNode } from 'react';
import { Container } from './Row.styles';

interface RowProps {
  children: ReactNode;
  justifyContent?: 'center' | 'space-around' | 'space-between';
  alignItems?: 'center' | 'flex-start' | 'flex-end';
}

const Row = ({
  children,
  justifyContent = 'space-around',
  alignItems = 'center',
}: RowProps) => {
  return (
    <Container justifyContent={justifyContent} alignItems={alignItems}>
      {children}
    </Container>
  );
};
export { Row };
