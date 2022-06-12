import { Container } from "./styles";

interface ProductProps {
  data: {
    name: string;
    category: string;
    provider: string;
    price: string;
  };
}

export function ProductCard({ data }: ProductProps) {
  return (
    <Container>
      <header>
        <small>{data.category}</small>
        <span>{data.name}</span>
      </header>
      <div className="image-wrapper">
        <img
          src="https://www.hardware.com.br/static/wp/2021/09/10/3-1.jpg?fm=pjpg&ixlib=php-3.3.1"
          alt={`Imagem do produto ${data.name}`}
        />
      </div>
      <footer>
        <div>
          <small>Fornecedor</small>
          <strong>{data.provider}</strong>
        </div>
        <div>
          <span>{data.price}</span>
        </div>
      </footer>
    </Container>
  );
}
