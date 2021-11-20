import PropTypes from 'prop-types'

import { InputGroup, Wrapper } from './styles'

import { Input } from '../Input'
import { Select } from '../Select'
import { Button } from '../Button'

export default function Form({ title, page }) {
  return (
    <Wrapper>
      <h1>{title}</h1>

      <InputGroup>
        <label htmlFor="name">Nome do Produto</label>
        <Input
          type="text"
          name="name"
          id="name"
          placeholder="Ex.: Notebook Dell"
        />
      </InputGroup>

      <InputGroup>
        <label htmlFor="code">Código do Produto</label>
        <Input
          type="text"
          name="code"
          id="code"
          placeholder="Ex.: 123654"
        />
      </InputGroup>

      <InputGroup>
        <label htmlFor="category">Categoria do Produto</label>
        <Select
          type="text"
          name="category"
          id="category"
        >
          <option value="0">Eletrônicos</option>
        </Select>
      </InputGroup>

      <InputGroup>
        <label htmlFor="provider">Nome do Fornecedor</label>
        <Input
          type="text"
          name="provider"
          id="provider"
          placeholder="Ex.: Dell"
        />
      </InputGroup>

      <InputGroup>
        <label htmlFor="value">Valor do Produto</label>
        <Input
          type="text"
          name="value"
          id="value"
          placeholder="Ex.: 1560"
        />
      </InputGroup>

      <Button active>{page === 'home' ? 'Cadastar produto' : 'Editar produto'}</Button>
      <Button active={false}>{page === 'home' ? 'Ir para a lista de produtos' : 'Cancelar'}</Button>
    </Wrapper>
  )
}

Form.propTypes = {
  title: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
}
