import React, { useState, FormEvent } from 'react'
import { nanoid } from 'nanoid'
import useProducts from '../../../hooks/useProducts'
import { Container, Header, Content, Footer } from './styles'
import { MdOutlineSaveAlt } from 'react-icons/md'
import theme from '../../../styles/themes/dark'
import Input from '../../../components/Input'
import Button from '../../../components/Button'

const initialState = () => {
    return {
        id: nanoid(6),
        name: '',
        category: '',
        provider: '',
        price: '',
        created_at: '',
        updated_at: ''
    }
}

const Register: React.FC = () => {
    const [product, setProduct] = useState(initialState())
    const { productsList, createProduct } = useProducts()

    const onChange = (event: FormEvent<HTMLInputElement>): void => {
        const { name, value } = event.currentTarget
        setProduct({
            ...product,
            [name]: value
        })
    }

    const handleAddItem = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        createProduct(product)
        setProduct(initialState)
    }

    return (
        <Container>
            <Header>
                <h2>Adicionar novo produto</h2>
                <p>Adicione seus produtos informando os dados abaixo:</p>
            </Header>
            <Content>
                <form onSubmit={handleAddItem}>
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
                        value={product.price}
                    ></Input>
                    <Footer>
                        <Button
                            name="save"
                            label="Adicionar"
                            type="submit"><MdOutlineSaveAlt /></Button>
                        <Button
                            name="cancel"
                            label="Cancelar"
                            type="button"
                            color={theme.colors.decline}></Button>
                    </Footer>
                </form>
            </Content>
        </Container>
    )
}

export default Register