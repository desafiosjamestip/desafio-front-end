import { Header } from '@/components'
import React from 'react'
import {
    ProductsContainer,
    ProductsHeaderContainer,
    ProductsListContainer,
} from './styled'
import { ProductCard } from '@/features/ProductList/components'
import NavLink from '@/components/NavLink'

const ProductsStructure: React.FC = () => {
    return (
        <>
            <ProductsContainer>
                <ProductsHeaderContainer>
                    <Header placeholder="Lista de produtos" />
                    <NavLink
                        to="/"
                        linkName="Voltar para Cadastro de Produtos"
                    />
                </ProductsHeaderContainer>
                <ProductsListContainer>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </ProductsListContainer>
            </ProductsContainer>
        </>
    )
}

export default ProductsStructure
