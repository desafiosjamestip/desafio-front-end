import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useProducts } from '../hooks/useProducts';
import { Container, Title } from '../styles/globalStyles';
import {
  InputContainer,
  FormContainer,
  Button,
  DisabledInputContainer,
  DeleteButton,
} from '../styles/formStyles';

interface EditarParams {
  sku: string;
}

export default function Editar() {
  const { sku } = useParams<EditarParams>();
  const { productsStoraged } = useProducts();

  // Filtrando produto pelo SKU no endereço para preencher os campos
  const productIndex = productsStoraged.products.findIndex((product) => {
    return product.sku === sku.replace('/', '');
  });

  const product = productsStoraged.products[productIndex];

  const [category, setCategory] = useState(product?.category);
  const [name, setName] = useState(product?.name);
  const [supplier, setSupplier] = useState(product?.supplier);
  const [price, setPrice] = useState(product?.price);

  // Atualizar produto com os novos valores
  function handleUpdate() {
    productsStoraged.products[productIndex] = {
      sku,
      name,
      category,
      supplier,
      price,
    };

    window.localStorage.setItem('products', JSON.stringify(productsStoraged));

    window.location.assign('/');
  }

  // Excluir produto do localstorage
  function handleDelete() {
    productsStoraged.products = productsStoraged.products.filter((product) => {
      return product.sku !== sku.replace('/', '');
    });

    window.localStorage.setItem('products', JSON.stringify(productsStoraged));

    window.location.assign('/');
  }

  return (
    <Container>
      <Title>Edição de produto</Title>
      <FormContainer>
        <DisabledInputContainer>
          <input
            type="text"
            value={sku}
            disabled
            placeholder="Código do produto"
          />
        </DisabledInputContainer>
        <InputContainer>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Categoria do Produto (ex.: Eletrônico)"
          />
        </InputContainer>
        <InputContainer>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nome do Produto"
          />
        </InputContainer>
        <InputContainer>
          <input
            type="text"
            value={supplier}
            onChange={(e) => setSupplier(e.target.value)}
            placeholder="Nome do Fornecedor"
          />
        </InputContainer>
        <InputContainer>
          <input
            type="number"
            value={price}
            step="0.01"
            onChange={(e) => setPrice(Number(e.target.value))}
            placeholder="Valor do Produto"
          />
        </InputContainer>
      </FormContainer>
      <div>
        <Button onClick={handleUpdate}>Atualizar</Button>
        <DeleteButton onClick={handleDelete}>Excluir</DeleteButton>
      </div>
    </Container>
  );
}
