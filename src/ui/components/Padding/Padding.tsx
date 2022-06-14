import React from 'react';
import { PaddingProps } from './Padding.d';
import { PaddingStyle } from './Padding.styles';

const Padding = ({ children, padding, wide = true }: PaddingProps) => {
  return (
    <PaddingStyle padding={padding} wide={wide}>
      {children}
    </PaddingStyle>
  );
};

export { Padding };
