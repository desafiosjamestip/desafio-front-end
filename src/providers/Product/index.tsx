import { createContext, ReactNode, useContext, useState } from "react";

import Product from "../../types/product";

interface ProviderProps {
    children: ReactNode;
}

interface ProductData {
    productList: Product[];
    visible: boolean;

    changeModalVisibility: (boolean: boolean) => void;
    createNewProduct: (newProduct: Product) => void;
}

const ProductContext = createContext<ProductData>({} as ProductData);

export const ProductProvider = ({ children }: ProviderProps) => {

    const [productList, setProductList] = useState<Product[]>([]);
    const [visible, setVisible] = useState<boolean>(false)

    const changeModalVisibility = (boolean: boolean) => {
      return setVisible(boolean)
    }

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
                createNewProduct,
                visible,
                changeModalVisibility
            }}
        >
            {children}
        </ProductContext.Provider>
    );
};
export const useProduct = () => useContext(ProductContext);