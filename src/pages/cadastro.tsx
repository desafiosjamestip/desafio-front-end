import { useState } from 'react';
import { useProducts } from '../hooks/useProducts';
import { Container, Title } from '../styles/globalStyles';
import { InputContainer, FormContainer, Button } from '../styles/formStyles';

export default function Cadastro() {
  const { productsStoraged } = useProducts();

  const [sku, setSku] = useState('');
  const [category, setCategory] = useState('');
  const [name, setName] = useState('');
  const [supplier, setSupplier] = useState('');
  const [price, setPrice] = useState('');

  // Adicionar novo produto ao localStorage
  function handleSubmit() {
    const newProduct = {
      sku,
      category,
      name,
      supplier,
      price: Number(price.replace(',', '.')),
    };

    productsStoraged.products.push(newProduct);

    window.localStorage.setItem('products', JSON.stringify(productsStoraged));

    setSku('');
    setCategory('');
    setName('');
    setSupplier('');
    setPrice('');

    window.location.assign('/');
  }

  return (
    <Container>
      <Title>Cadastro de produtos</Title>
      <FormContainer>
        <InputContainer>
          <input
            type="text"
            value={sku}
            onChange={(e) => setSku(e.target.value)}
            placeholder="Código do produto"
          />
        </InputContainer>
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
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Valor do Produto"
          />
        </InputContainer>
      </FormContainer>
      <Button onClick={handleSubmit}>Cadastrar</Button>
    </Container>
  );
}
