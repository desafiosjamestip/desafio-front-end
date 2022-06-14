import React, { ReactNode } from 'react';
import { ColumnStyle, JustifyContentType } from './Column.styles';

type RowProps = {
  children: ReactNode;
  justifyContent?: JustifyContentType;
  height?: string;
  flexWrap?: string;
  width?: string;
};

const Column = ({
  children,
  justifyContent = 'normal',
  height = 'auto',
  flexWrap = 'nowrap',
  width = '100%',
}: RowProps) => {
  return (
    <ColumnStyle
      justifyContent={justifyContent}
      height={height}
      flexWrap={flexWrap}
      width={width}
    >
      {children}
    </ColumnStyle>
  );
};

export { Column };
