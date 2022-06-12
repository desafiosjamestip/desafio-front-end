import { Header } from '@/components'
import React from 'react'
import {
    ProductsContainer,
    ProductsHeaderContainer,
    ProductsListContainer,
} from './styled'
import { ProductCard, EditionModal } from '@/features/ProductList/components'
import NavLink from '@/components/NavLink'
import { useProductContext } from '@/contexts/product'
import { Product } from '@/types/IProducts'

const ProductsStructure: React.FC = () => {
    const [products, { openModal, dispatchRemoveProduct }] = useProductContext()

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
                            <ProductCard
                                key={product.code}
                                title={product.name}
                                category={product.category}
                                supplier={product.supplier}
                                price={product.price}
                                code={product.code}
                                onClick={() => removeProduct(product!)}
                                onOpenModal={() => openModal(product!)}
                            />
                        </>
                    ))}
                </ProductsListContainer>
                <EditionModal />
            </ProductsContainer>
        </>
    )
}

export default ProductsStructure
