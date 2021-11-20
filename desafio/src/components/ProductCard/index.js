/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import PropTypes from 'prop-types'

import {
  ActionGroup, CardGroup, ProductButton, Wrapper,
} from './styles'

import edit from '../../assets/styles/images/edit.svg'
import cross from '../../assets/styles/images/cross.svg'
import { useProduct } from '../../contexts/ProductContext'

export default function ProductCard({
  product, code, category, provider, value,
}) {
  const { handleRemoveProduct } = useProduct()

  return (
    <Wrapper>
      <CardGroup>
        <h3>Produto</h3>
        <span>{product}</span>
      </CardGroup>

      <CardGroup>
        <h3>Código</h3>
        <span>
          #
          {code}
        </span>
      </CardGroup>

      <CardGroup>
        <h3>Categoria</h3>
        <span>{category}</span>
      </CardGroup>

      <CardGroup>
        <h3>Fornecedor</h3>
        <span>{provider}</span>
      </CardGroup>

      <CardGroup>
        <h3>Valor</h3>
        <span>
          R$
          {value}
        </span>
      </CardGroup>

      <ActionGroup>
        <ProductButton edit type="button">
          <img src={edit} alt="Editar" />
        </ProductButton>

        <ProductButton type="button">
          <img src={cross} alt="Excluir" onClick={() => handleRemoveProduct(code)} />
        </ProductButton>
      </ActionGroup>
    </Wrapper>
  )
}

ProductCard.propTypes = {
  product: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  provider: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}
