import React, { useState, FormEvent, useEffect, useMemo } from 'react'
import { useParams } from 'react-router'
import { nanoid } from 'nanoid'
import useProducts from '../../../hooks/useProducts'
import formatCurrency, { unformatCurrency } from '../../../utils/formatCurrency'
import { Container, Header, Footer, Form } from './styles'
import { MdOutlineSaveAlt } from 'react-icons/md'
import theme from '../../../styles/themes/dark'
import Input from '../../../components/Input'
import Button from '../../../components/Button'
import MessageBox from '../../../components/MessageBox'

const initialState = {
    id: nanoid(6),
    name: '',
    category: '',
    provider: '',
    price: '0',
    created_at: '',
    updated_at: ''
}

const Register: React.FC = () => {
    const [product, setProduct] = useState(initialState)
    const { selectProductToUpate, selectedProduct, createProduct, updateProduct, message } = useProducts()
    const { currentURL } = useParams()
    const createForm = currentURL === "create"

    const formattedCurrency = useMemo(() => {
        return formatCurrency(product.price)
    }, [product.price])

    const onChange = (event: FormEvent<HTMLInputElement>): void => {
        let { name, value } = event.currentTarget
        setProduct({
            ...product,
            [name]: value,
        })
    }

    useEffect(() => {
        selectedProduct && setProduct(selectedProduct)
    }, [currentURL])

    const handleUnformatCurrency = () =>
        product.price = unformatCurrency(product.price)

    const handleAddItem = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        handleUnformatCurrency()
        createProduct(product)
        clearInputs()
    }

    const handleUpdateItem = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        updateProduct(product)
        clearInputs()
    }

    const clearInputs = () => {
        setProduct(initialState)
        selectProductToUpate(initialState)
    }

    return (
        <Container>
            <Header>
                <h2>{`${createForm ? 'Adicionar novo' : 'Editar'} produto`}</h2>
                <p>{createForm
                    ? 'Adicione seus produtos informando os dados abaixo:'
                    : 'Abaixo estão os valores originais do produto. Para editar os dados, altere os seus valores e clique em Salvar.'}</p>
            </Header>
            <Form onSubmit={createForm ? handleAddItem : handleUpdateItem}>
                <Input
                    required name="name"
                    placeholder="Nome do produto"
                    color={theme.colors.title}
                    onChange={onChange}
                    value={product.name}
                ></Input>
                <Input
                    required name="category"
                    placeholder="Categoria"
                    onChange={onChange}
                    value={product.category}
                ></Input>
                <Input
                    required name="provider"
                    placeholder="Fornecedor"
                    onChange={onChange}
                    value={product.provider}
                ></Input>
                <Input
                    required name="price"
                    placeholder="Valor do produto"
                    onChange={onChange}
                    value={formattedCurrency}
                ></Input>
                <Footer>
                    <Button
                        name="save"
                        label={createForm ? 'Adicionar' : 'Salvar'}
                        type="submit"><MdOutlineSaveAlt /></Button>

                </Footer>
                <MessageBox message={message} />
            </Form>
        </Container>
    )
}

export default Register