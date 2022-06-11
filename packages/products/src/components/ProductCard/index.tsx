import { Container } from "./styles";

interface ProductProps {
  data: {
    categorie: string;
    name: string;
    image: string;
    provider: string;
    price: string;
  };
}

export function ProductCard({ data }: ProductProps) {
  return (
    <Container>
      <header>
        <small>{data.categorie}</small>
        <span>{data.name}</span>
      </header>
      <div className="image-wrapper">
        <img src={data.image} alt={`Imagem do produto ${data.name}`} />
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
