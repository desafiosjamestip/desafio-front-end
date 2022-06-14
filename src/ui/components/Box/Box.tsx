import React, { ReactNode } from 'react';
import { BoxBase } from './Box.styles';

type BoxProps = {
  children: ReactNode;
  width?: string;
  height?: string;
  justifyContent?:
    | 'space-around'
    | 'space-between'
    | 'flex-start '
    | 'center'
    | 'flex-end';
  alignItems?: 'flex-start' | 'flex-end' | 'center';
  flexDirection?: 'row' | 'column';
  background?: string;
  margin?: string;
};

const Box = ({
  children,
  width = '100%',
  height = '100%',
  justifyContent = 'space-around',
  alignItems = 'center',
  flexDirection = 'row',
  background = 'transparent',
  margin = '0',
}: BoxProps) => {
  return (
    <BoxBase
      width={width}
      height={height}
      justifyContent={justifyContent}
      flexDirection={flexDirection}
      alignItems={alignItems}
      background={background}
      margin={margin}
    >
      {children}
    </BoxBase>
  );
};

export { Box };
