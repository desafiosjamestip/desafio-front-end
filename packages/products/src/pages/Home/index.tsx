import { useHistory } from "react-router-dom";

import { useProduct } from "../../contexts/Product";

import { ProductCard } from "../../components/ProductCard";
import { Button } from "../../components/Button";

import { Container, ProductSection, EmptyProduct } from "./styles";

export function Home() {
  const { products } = useProduct();
  const history = useHistory();

  function handleNavigate() {
    history.push("/products/new");
  }

  return (
    <Container>
      <div className="button-wrapper">
        <Button type="button" onClick={handleNavigate}>
          Novo produto
        </Button>
      </div>
      {products.length >= 1 ? (
        <ProductSection>
          {products.map((product) => (
            <ProductCard key={product.code} data={product} />
          ))}
        </ProductSection>
      ) : (
        <EmptyProduct>
          <h1>Nenhum produto cadastrado</h1>
        </EmptyProduct>
      )}
    </Container>
  );
}
