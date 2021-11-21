/* eslint-disable react/jsx-props-no-spreading */
import { useEffect } from 'react'

import PropTypes from 'prop-types'
import { Link, useHistory, useParams } from 'react-router-dom'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { schema } from '../../schemas/schema'

import { useProduct } from '../../contexts/ProductContext'

import { InputGroup, Wrapper } from './styles'

import { Input } from '../Input'
import { Select } from '../Select'
import { Button } from '../Button'

export default function Form({ title, page }) {
  const { handleAddProduct, handleDisplayAlert } = useProduct()
  const history = useHistory()
  const params = useParams()
  const { state } = useProduct()

  const { id } = params

  const editedProduct = state.products.find((product) => product.code === id)

  const {
    register, handleSubmit, setValue, formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  function onSubmit(data) {
    if (page === 'home') {
      handleAddProduct(data)
      handleDisplayAlert({
        message: 'O produto foi adicionado com sucesso!',
        success: true,
        display: true,
      })
      history.push('/produtos')
    } else {
      editedProduct.name = data.name
      editedProduct.code = data.code
      editedProduct.category = data.category
      editedProduct.provider = data.provider
      editedProduct.value = data.value
      handleDisplayAlert({
        message: 'O produto foi editado com sucesso!',
        success: true,
        display: true,
      })
      history.push('/produtos')
    }
  }

  useEffect(() => {
    if (page !== 'home') {
      setValue('name', editedProduct.name)
      setValue('code', editedProduct.code)
      setValue('provider', editedProduct.provider)
      setValue('value', editedProduct.value)
    }
  }, [page])

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
