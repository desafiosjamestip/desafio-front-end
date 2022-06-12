import { useEffect } from 'react';
import ProductCard from '../ProductCard';
import { Container, TableItems, Title, Header, ItemDesc, Button } from './styles';
import { useProductContext } from '../../contexts/ProductProvider';
import { useNavigate } from 'react-router-dom';

const List = () => {
  const navigate = useNavigate();
  
  const { products, listProducts } = useProductContext();

  useEffect(() => {
    listProducts();
  }, [])

  return (
    <Container>
      <Title>Produtos Cadastrados</Title>
      <TableItems>
        <Header>
          <ItemDesc>Código</ItemDesc>
          <ItemDesc>Nome do Produto</ItemDesc>
          <ItemDesc>Categoria</ItemDesc>
          <ItemDesc>Fornecedor</ItemDesc>
          <ItemDesc>Preço</ItemDesc>
          <ItemDesc>Ações</ItemDesc>
        </Header>
          {products.length === 0 ? 
            (<h4>Nenhum produto cadastrado</h4>) :
            (products.map((product) => (
              <ProductCard key={product.id} product={product}/>
            )))
          }
      </TableItems>
      <Button onClick={() => navigate('form')}>Criar produto</Button>
    </Container>
  )
}

export default List;