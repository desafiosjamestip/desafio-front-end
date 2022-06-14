import React, { ReactNode } from 'react';
import { RowStyle, JustifyContentType } from './Row.styles';

type RowProps = {
  children: ReactNode;
  justifyContent?: JustifyContentType;
  width?: string;
  flexWrap?: string;
};

const Row = ({
  children,
  justifyContent = 'normal',
  width = '100%',
  flexWrap = 'nowrap',
}: RowProps) => {
  return (
    <RowStyle justifyContent={justifyContent} width={width} flexWrap={flexWrap}>
      {children}
    </RowStyle>
  );
};

export { Row };
