import { Header, InputStructure, SelectorStructure } from '@/components'
import DefaultButton from '@/components/Button'
import NavLink from '@/components/NavLink'
import React, { useState } from 'react'
import { FormDataContainer, FormSectionContainer } from './styled'

const FormSection: React.FC = () => {
    const [product, setProduct] = useState({
        name: '',
        code: '',
        categoy: 0,
        supplier: '',
        price: '',
    })

    const submitProduct = () => {
        localStorage.setItem('products', JSON.stringify(product))
    }

    return (
        <>
            <FormSectionContainer>
                <FormDataContainer>
                    <Header placeholder="Cadastre um Novo Produto" />
                    <InputStructure
                        label="Nome do Produto"
                        onChange={e =>
                            setProduct(prevState => {
                                return { ...prevState, name: e.target.value }
                            })
                        }
                    />
                    <InputStructure
                        label="Código do Produto"
                        onChange={e =>
                            setProduct(prevState => {
                                return { ...prevState, code: e.target.value }
                            })
                        }
                    />
                    <SelectorStructure label="Categoria do Produto" />
                    <InputStructure
                        label="Nome do Fornecedor"
                        onChange={e =>
                            setProduct(prevState => {
                                return {
                                    ...prevState,
                                    supplier: e.target.value,
                                }
                            })
                        }
                    />
                    <InputStructure
                        label="Preço"
                        onChange={e =>
                            setProduct(prevState => {
                                return { ...prevState, price: e.target.value }
                            })
                        }
                    />
                    <DefaultButton
                        content="Cadastrar"
                        onClick={submitProduct}
                    />
                </FormDataContainer>
                <NavLink to="products" linkName="Ver Produtos Cadastrados" />
            </FormSectionContainer>
        </>
    )
}

export default FormSection
