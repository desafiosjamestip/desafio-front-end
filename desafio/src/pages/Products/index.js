import { Link } from 'react-router-dom'

import { ProductsHeader, Wrapper } from './styles'

import arrow from '../../assets/styles/images/arrow-left.svg'
import ProductCard from '../../components/ProductCard'
import Alert from '../../components/Alert'

export default function Products() {
  return (
    <Wrapper>
      <ProductsHeader>
        <Link to="/">
          <img src={arrow} alt="Voltar" />
        </Link>
        <h1>Produtos cadastrados</h1>
      </ProductsHeader>

      <ProductCard
        product="Notebook"
        code="12364"
        category="Eletrônicos"
        provider="Dell"
        value="1256.40"
      />

      <ProductCard
        product="Notebook"
        code="12364"
        category="Eletrônicos"
        provider="Dell"
        value="1256.40"
      />

      <ProductCard
        product="Notebook"
        code="12364"
        category="Eletrônicos"
        provider="Dell"
        value="1256.40"
      />

      <ProductCard
        product="Notebook"
        code="12364"
        category="Eletrônicos"
        provider="Dell"
        value="1256.40"
      />

      <Alert display={false} success />
    </Wrapper>
  )
}
