/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types'
import { Link, useHistory } from 'react-router-dom'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { schema } from '../../schemas/schema'

import { InputGroup, Wrapper } from './styles'

import { Input } from '../Input'
import { Select } from '../Select'
import { Button } from '../Button'

import { useProduct } from '../../contexts/ProductContext'

export default function Form({ title, page }) {
  const { handleAddProduct, handleDisplayAlert } = useProduct()
  const history = useHistory()

  function onSubmit(data) {
    handleAddProduct(data)
    handleDisplayAlert({ success: true, display: true })
    history.push('/produtos')
  }

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  })

  return (
    <Wrapper onSubmit={handleSubmit(onSubmit)}>
      <h1>{title}</h1>

      <InputGroup>
        <label htmlFor="name">Nome do Produto</label>
        <Input
          type="text"
          className={errors.name ? 'error' : ''}
          {...register('name')}
          name="name"
          id="name"
          placeholder="Ex.: Notebook Dell"
        />
        <span className="message">{errors.name?.message}</span>
      </InputGroup>

      <InputGroup>
        <label htmlFor="code">Código do Produto</label>
        <Input
          type="text"
          className={errors.name ? 'error' : ''}
          {...register('code')}
          name="code"
          id="code"
          placeholder="Ex.: 123654"
        />
        <span className="message">{errors.code?.message}</span>
      </InputGroup>

      <InputGroup>
        <label htmlFor="category">Categoria do Produto</label>
        <Select
          type="text"
          className={errors.name ? 'error' : ''}
          {...register('category')}
          name="category"
          id="category"
        >
          <option value="eletronicos">Eletrônicos</option>
          <option value="descartaveis">Descartáveis</option>
          <option value="mecanicos">Mecânicos</option>
        </Select>
        <span className="message">{errors.category?.message}</span>
      </InputGroup>

      <InputGroup>
        <label htmlFor="provider">Nome do Fornecedor</label>
        <Input
          type="text"
          className={errors.name ? 'error' : ''}
          {...register('provider')}
          name="provider"
          id="provider"
          placeholder="Ex.: Dell"
        />
        <span className="message">{errors.provider?.message}</span>
      </InputGroup>

      <InputGroup>
        <label htmlFor="value">Valor do Produto</label>
        <Input
          type="number"
          className={errors.name ? 'error' : ''}
          {...register('value')}
          name="value"
          id="value"
          placeholder="Ex.: 1560"
        />
        <span className="message">{errors.value?.message}</span>
      </InputGroup>

      <Button
        active
      >
        {page === 'home' ? 'Cadastar produto' : 'Editar produto'}
      </Button>

      <Link to="/produtos">
        <Button active={false}>{page === 'home' ? 'Ir para a lista de produtos' : 'Cancelar'}</Button>
      </Link>
    </Wrapper>
  )
}

Form.propTypes = {
  title: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
}
