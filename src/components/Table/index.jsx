import React from 'react';
import ListProducts from './ListProducts';
import { ContainerTable } from './styles';

export default function TableTitle() {
  return (
    <ContainerTable>
      <nav className="titles">
        <h2>Código do Produto</h2>
        <h2>Categoria do Produto</h2>
        <h2>Nome do Produto</h2>
        <h2>Nome do Fornecedor</h2>
        <h2>Valor do Produto</h2>
        <h2>Editar</h2>
        <h2>Deletar</h2>
      </nav>
      <ListProducts />
    </ContainerTable>
  )
}
