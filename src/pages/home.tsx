import { ProductCard } from '../components/ProductCard';
import { useProducts } from '../hooks/useProducts';
import { Container, Title } from '../styles/globalStyles';

export default function Home() {
  const { productsStoraged } = useProducts();

  return (
    <Container>
      <Title>Produtos Cadastrados</Title>
      {productsStoraged.products.length > 0
        ? productsStoraged.products.map((product) => {
            return <ProductCard product={product} key={product.sku} />;
          })
        : 'Nenhum produto cadastrado'}
    </Container>
  );
}
