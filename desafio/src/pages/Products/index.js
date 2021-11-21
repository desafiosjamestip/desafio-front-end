import { Link } from 'react-router-dom'

import { ProductsHeader, Wrapper } from './styles'

import arrow from '../../assets/styles/images/arrow-left.svg'
import ProductCard from '../../components/ProductCard'
import Alert from '../../components/Alert'
import { useProduct } from '../../contexts/ProductContext'

export default function Products() {
  const { state } = useProduct()

  return (
    <Wrapper>
      <ProductsHeader>
        <Link to="/">
          <img src={arrow} alt="Voltar" />
        </Link>
        <h1>Produtos cadastrados</h1>
      </ProductsHeader>

      {state.products.map((product) => (
        <ProductCard
          key={product.code}
          product={product.name}
          code={product.code}
          category={product.category}
          provider={product.provider}
          value={product.value}
        />
      ))}

      <Alert display={state.alert.display} success={state.alert.success} />
    </Wrapper>
  )
}
