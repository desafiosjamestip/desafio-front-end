import { Link } from "react-router-dom";

import { ProductCard } from "../../components/ProductCard";

import { Container, ProductSection } from "./styles";

const firstProduct = {
  categorie: "Eletrônico",
  name: "Playstation 5",
  image:
    "https://www.hardware.com.br/static/wp/2021/09/10/3-1.jpg?fm=pjpg&ixlib=php-3.3.1",
  provider: "Kabum",
  price: "R$4.999,00",
};

export function Home() {
  return (
    <Container>
      <ProductSection>
        <ProductCard data={firstProduct} />
        <ProductCard data={firstProduct} />
        <ProductCard data={firstProduct} />
        <ProductCard data={firstProduct} />
        <ProductCard data={firstProduct} />
      </ProductSection>
    </Container>
  );
}
