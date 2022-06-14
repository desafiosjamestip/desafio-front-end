import React, { useState } from 'react';
import { useProduct } from '../../context/useProduct';
import { ProductTable } from './Table.styles';
import { Product } from '../../models/Product';
import { ItemTable } from './ItemTable';
import { Section } from '../Section';
import { spaces } from '../../ui/tokens';
import { Center, Typography } from '../../ui/components';

const Table = () => {
  const [openActive, setOpenActive] = useState(true);
  const { products } = useProduct();
  function handleSelectOpenActive(open: boolean) {
    setOpenActive(open);
  }
  const headerHeight = '75px';
  return (
    <Section
      id="Cadastro"
      padding={`calc(${headerHeight} + ${spaces.large}) ${spaces.large} ${spaces.xHuge}`}
    >
      <Center>
        <Typography variant="subTitle" align="center" margin="20 0">
          Tabela de Produtos
        </Typography>
      </Center>
      <ProductTable>
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>Codígo</th>
            <th>Name</th>
            <th>Fornecedor</th>
            <th>Preço</th>
            <th>Categoria</th>
            {openActive ? <th>Ações</th> : ''}
          </tr>
        </thead>
        <tbody>
          {products?.map((product: Product) => {
            return (
              <tr data-testid="product" key={product.id}>
                <ItemTable
                  product={product}
                  handleSelectOpenActive={handleSelectOpenActive}
                />
              </tr>
            );
          })}
        </tbody>
      </ProductTable>
    </Section>
  );
};

export { Table };
