import { Header, InputStructure, SelectorStructure } from '@/components'
import DefaultButton from '@/components/Button'
import NavLink from '@/components/NavLink'
import { useProductContext } from '@/contexts/product'
import React, { useState } from 'react'
import { FormDataContainer, FormSectionContainer } from './styled'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const FormSection: React.FC = () => {
    const [product, setProduct] = useState({
        name: '',
        code: '',
        category: '',
        supplier: '',
        price: '',
    })
    const [, { dispatchProducts }] = useProductContext()

    const submitProduct = () => {
        /* localStorage.setItem('products', JSON.stringify(product)) */
        dispatchProducts(product)
        setProduct({
            name: '',
            code: '',
            category: '',
            supplier: '',
            price: '',
        })
        toast.success('Produto registrado!', {
            position: toast.POSITION.TOP_CENTER,
        })
    }

    return (
        <>
            <FormSectionContainer>
                <FormDataContainer>
                    <Header placeholder="Cadastre um Novo Produto" />
                    <InputStructure
                        label="Nome do Produto"
                        value={product.name}
                        onChange={e =>
                            setProduct(prevState => {
                                return { ...prevState, name: e.target.value }
                            })
                        }
                    />
                    <InputStructure
                        label="Código do Produto"
                        value={product.code}
                        onChange={e =>
                            setProduct(prevState => {
                                return { ...prevState, code: e.target.value }
                            })
                        }
                    />
                    <SelectorStructure label="Categoria do Produto" />
                    <InputStructure
                        label="Nome do Fornecedor"
                        value={product.supplier}
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
                        value={product.price}
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
                <ToastContainer />
                <NavLink to="products" linkName="Ver Produtos Cadastrados" />
            </FormSectionContainer>
        </>
    )
}

export default FormSection
