import React from 'react';
import FormNewProduct from './FormNewProduct';
import { ContainerNP } from './styles';
import { GlobalStyle } from '../../GlobalStyles';

export default function NewProduct() {
  return (
    <>
      <GlobalStyle />
      <ContainerNP>
        <FormNewProduct />
      </ContainerNP>
    </>
  );
}
