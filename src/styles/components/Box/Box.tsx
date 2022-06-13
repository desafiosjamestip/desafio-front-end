import { ReactNode } from 'react';
import { Container } from './Box.styles';
import { colors } from '../../tokens';

interface BoxProps {
  children: ReactNode;
  width?: string;
  backgroundColor?: string;
  height?: string;
  justifyContent?: 'center' | 'space-around' | 'space-between';
  alignItems?: 'center' | 'start';
}

const Box = ({
  children,
  width = 'auto',
  height = 'auto',
  backgroundColor = colors.background,
  justifyContent = 'center',
  alignItems = 'center',
}: BoxProps) => {
  return (
    <Container
      width={width}
      height={height}
      backgroundColor={backgroundColor}
      justifyContent={justifyContent}
      alignItems={alignItems}
    >
      {children}
    </Container>
  );
};
export { Box };
