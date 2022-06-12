import { ProductCard } from "../../components/ProductCard";

import { Container, ProductSection } from "./styles";

import { Button } from "../../components/Button";

import { useProduct } from "../../contexts/Product";

export function Home() {
  const { products } = useProduct();

  return (
    <Container>
      <div className="button-wrapper">
        <Button to="/products/new">Novo produto</Button>
      </div>
      <ProductSection>
        {products.map((product) => (
          <ProductCard key={product.code} data={product} />
        ))}
      </ProductSection>
    </Container>
  );
}
