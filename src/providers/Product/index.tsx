import { createContext, ReactNode, useContext, useState } from "react";

interface ProviderProps {
    children: ReactNode;
}

interface Product {
    name: string,
    provider: string,
    category: string,
    price: number,
    id: number
}

interface ProductData {
    productList: Product[];

    createNewProduct: (newProduct: Product) => void;
}

const ProductContext = createContext<ProductData>({} as ProductData);

export const ProductProvider = ({ children }: ProviderProps) => {

    const [productList, setProductList] = useState<Product[]>([]);

    const randomID = () => {
        return Math.floor(Date.now() * Math.random()).toString(36);
    }

    const createNewProduct = (newProduct: Product) => {
        setProductList([...productList, newProduct])
    }

    return (
        <ProductContext.Provider
            value={{
                productList,
                createNewProduct
            }}
        >
            {children}
        </ProductContext.Provider>
    );
};
export const useProduct = () => useContext(ProductContext);