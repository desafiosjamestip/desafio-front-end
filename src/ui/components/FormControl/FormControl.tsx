import React, { ReactNode } from 'react';
import { FormControlStyle } from './FormControl.styles';

interface FormControlProps {
  children: ReactNode;
}

const FormControl = ({ children }: FormControlProps) => {
  return <FormControlStyle>{children}</FormControlStyle>;
};

export { FormControl };
