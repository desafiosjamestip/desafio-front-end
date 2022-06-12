import { useMemo } from "react";
import { Link } from "react-router-dom";

import { Product } from "../../@types/Product";

import { Container } from "./styles";

interface ProductProps {
  data: Product;
}

export function ProductCard({ data }: ProductProps) {
  const formattedProduct = useMemo(() => {
    return {
      name: data.name,
      category: data.category,
      provider: data.provider,
      code: data.code,
      price: Number(data.price).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      }),
    };
  }, [data]);

  return (
    <Container>
      <Link to={{ pathname: `/products/edit/${data.code}`, state: data }}>
        <header>
          <small>{formattedProduct.category}</small>
          <span>{formattedProduct.name}</span>
        </header>
        <div className="image-wrapper">
          <img
            src="https://www.hardware.com.br/static/wp/2021/09/10/3-1.jpg?fm=pjpg&ixlib=php-3.3.1"
            alt={`Imagem do produto ${formattedProduct.name}`}
          />
        </div>
        <footer>
          <div>
            <small>Fornecedor</small>
            <strong>{formattedProduct.provider}</strong>
          </div>
          <div>
            <span>{formattedProduct.price}</span>
          </div>
        </footer>
      </Link>
    </Container>
  );
}
