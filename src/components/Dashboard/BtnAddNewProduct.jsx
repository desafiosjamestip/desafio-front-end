import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Buttons } from '../../GlobalStyles';

export default function BtnAddNewProduct() {
  const { pathname } = useLocation();
  return (
    <Buttons type="button" data-testid="add-new-product">
      <Link to={ pathname === '/' ? 'newProduct' : '/' }>
        { pathname === '/' ? 'Adicionar Novo Produto' : 'Voltar para Dashboard' }
      </Link>
    </Buttons>
  );
}
