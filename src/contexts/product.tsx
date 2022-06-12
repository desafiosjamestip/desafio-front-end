import { Product, ProductContextData } from '@/types/IProducts'
import React, { ReactNode, useContext, useEffect, useState } from 'react'

type ProductProviderProps = {
    children: ReactNode
}

export const ProductContext = React.createContext<ProductContextData>(
    {} as ProductContextData
)

export const ProductProvider: React.FC<ProductProviderProps> = ({
    children,
}: ProductProviderProps) => {
    const productsString = localStorage.getItem('products')
    const currentProducts = JSON.parse(productsString!)
    const [products, setProducts] = useState<Product[]>(currentProducts)
    useEffect(() => {
        localStorage.setItem('products', JSON.stringify(products))
    }, [products])

    const dispatchProducts = (product: Product) => {
        setProducts(products => [...products, product])
    }

    const dispatchRemoveProduct = (deletedProduct: Product) => {
        const filteredArray = products.filter(
            product => product.code !== deletedProduct.code
        )
        setProducts(filteredArray)
    }

    return (
        <ProductContext.Provider
            value={[
                products,
                {
                    dispatchProducts,
                    dispatchRemoveProduct,
                },
            ]}
        >
            {children}
        </ProductContext.Provider>
    )
}

export function useProductContext(): ProductContextData {
    return useContext(ProductContext)
}
