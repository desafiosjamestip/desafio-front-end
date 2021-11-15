import {
  CardContainer,
  CardTop,
  ProductSupplier,
  ProductName,
  ProductPrice,
} from './styles';
import { BiEdit } from 'react-icons/bi';

interface Product {
  sku: string;
  category: string;
  name: string;
  supplier: string;
  price: number;
}

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  // Formatação do preço do produto
  const formattedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(product.price);

  return (
    <CardContainer>
      <CardTop>
        <span>#{product.sku}</span>
        <span>{product.category}</span>
      </CardTop>
      <ProductSupplier>{product.supplier}</ProductSupplier>
      <ProductName>
        {product.name}
        <a href={`/editar/${product.sku}`}>
          <BiEdit />
        </a>
      </ProductName>
      <ProductPrice>{formattedPrice}</ProductPrice>
    </CardContainer>
  );
}
