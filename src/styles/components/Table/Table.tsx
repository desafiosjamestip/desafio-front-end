import { Container, ProductTable } from './Table.styles';
import { IProduct } from '../../../interfaces/Product.interfaces';
import { useState } from 'react';
import { ItemTable } from './ItemTable';
interface TableProps {
  data?: Array<IProduct>;
}
const Table = ({ data }: TableProps) => {
  const [openActive, setOpenActive] = useState(true);
  function handleSelectOpenActive(open: boolean) {
    setOpenActive(open);
  }
  return (
    <Container>
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
          {data?.map((product: IProduct) => {
            return (
              <>
                <ItemTable
                  key={product.id}
                  product={product}
                  handleSelectOpenActive={handleSelectOpenActive}
                />
              </>
            );
          })}
        </tbody>
      </ProductTable>
    </Container>
  );
};

export { Table };
