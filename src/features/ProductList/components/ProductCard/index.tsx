import React from 'react'
import {
    ProductCategory,
    ProductCode,
    ProductPrice,
    ProductsCardContainer,
    ProductSupplier,
    ProductTitle,
} from './styled'

const ProductCard: React.FC = () => {
    return (
        <>
            <ProductsCardContainer>
                <ProductTitle>Produto 1</ProductTitle>
                <ProductCode>#1234</ProductCode>
                <ProductCategory>Eletrônico</ProductCategory>
                <ProductSupplier>Nubank</ProductSupplier>
                <ProductPrice>R$ 15,00</ProductPrice>
            </ProductsCardContainer>
        </>
    )
}

export default ProductCard
