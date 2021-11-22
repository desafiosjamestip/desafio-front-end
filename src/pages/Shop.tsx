import { Container, ContainerProduto, ImgProduct } from '../styles/Shop'
import { useProduct } from "../contexts/ProductContext";
import { ButtonShop, ContainerShop } from '../components/InputShop/index'
export default function Shop() {
  const { products } = useProduct()

  console.log("products", products)
  return (
    <Container>
      {products.map(product => (
        <ContainerProduto key={product.uuid}>
          {console.log(product)}
          <ImgProduct src={product.imageUrl} alt="" />
          <h3>{product.name}</h3>
          <span>Categoria:{product.category}</span>
          <ContainerShop>
            <h3>R${product.value}</h3>
            <ButtonShop>Add</ButtonShop>
          </ContainerShop>

        </ContainerProduto>
      ))}
    </Container>
  )
}