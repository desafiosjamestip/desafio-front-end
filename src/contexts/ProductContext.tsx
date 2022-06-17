import React, { createContext, useState, useEffect } from 'react'

type ProductProviderProps = {
    children?: React.ReactNode
}

export type ProductProps = {
    id: string
    name: string
    category: string
    provider: string
    price: string
    created_at: string
    updated_at: string
}

interface IProductContext {
    productsList: ProductProps[]
    createProduct: (product: ProductProps) => void
    updateProduct: () => void
    removeProduct: (product: ProductProps[]) => void
}

export const ProductContext = createContext<IProductContext>({} as IProductContext)

export const ProductProvider: React.FC<ProductProviderProps> = ({ children }) => {
    const storedProducts = localStorage.getItem('@jamestips:products-list')
    const [productsList, setProductsList] = useState<ProductProps[]>([])
    const now = () => String(new Date())

    useEffect(() => {
        storedProducts
            ? setProductsList(JSON.parse(storedProducts))
            : localStorage.setItem('@jamestips:products-list', '[]')
    }, [storedProducts])

    const saveProduct = (data: ProductProps[]) => {
        localStorage.setItem('@jamestips:products-list', JSON.stringify(data))
        setProductsList(data)
    }

    const createProduct = (product: ProductProps) => {
        const newProduct = {
            ...product,
            created_at: now(),
            updated_at: now()
        }
        const newProductsList = [...productsList, newProduct]
        saveProduct(newProductsList)
    }

    const updateProduct = () => { }
    const removeProduct = (product: ProductProps[]) => { 
        saveProduct(product)
    }

    return (
        <ProductContext.Provider
            value={{
                productsList,
                createProduct,
                updateProduct,
                removeProduct
            }}>
            {children}
        </ProductContext.Provider>
    )
}