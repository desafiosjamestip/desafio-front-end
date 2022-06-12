import { Header } from '@/components'
import React from 'react'
import {
    ProductsContainer,
    ProductsHeaderContainer,
    ProductsListContainer,
} from './styled'
import { ProductCard } from '@/features/ProductList/components'
import NavLink from '@/components/NavLink'
import { useProductContext } from '@/contexts/product'
import { Product } from '@/types/IProducts'

const ProductsStructure: React.FC = () => {
    const [products, { dispatchRemoveProduct }] = useProductContext()

    const removeProduct = (deletedProduct: Product) => {
        dispatchRemoveProduct(deletedProduct)
    }
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
                    {products.map(product => (
                        <>
                            {' '}
                            <ProductCard
                                title={product.name}
                                category={product.category}
                                supplier={product.supplier}
                                price={product.price}
                                code={product.code}
                                onClick={() => removeProduct(product!)}
                            />
                        </>
                    ))}
                </ProductsListContainer>
            </ProductsContainer>
        </>
    )
}

export default ProductsStructure
