import { createContext, useContext, useState, ReactNode} from "react";
import {db} from '../../db/db'

interface ProductsProviderProps {
    children: ReactNode;
}

interface ProductsItems {
    id: string;
    categorie: string;
    product_name: string;
    supplier: string;
    price: string;
}

interface ProductsProviderData{
    listProducts: ProductsItems[];
    newProduct: ProductsItems;
    setNewProduct: React.Dispatch<React.SetStateAction<ProductsItems>>
    createNewProduct: (newProducts: ProductsItems) => void;
    removeProduct: (id: string) => void;
}

const ProductsContext = createContext<ProductsProviderData>({} as ProductsProviderData);

export const ProductsProvider = ({children}: ProductsProviderProps) => {
    const [listProducts, setListProducts] = useState<ProductsItems[]>(db);
    const [newProduct, setNewProduct] = useState<ProductsItems>({} as ProductsItems)
    
    const createNewProduct = (product: ProductsItems) => {
        setListProducts([...listProducts, product]);
    }

    const removeProduct = (id: string) => {
        const newListProducts = listProducts.filter((prod) => prod.id !== id)

        setListProducts(newListProducts)
    }

    const editProduct = (id: string) => {
        const product = listProducts.find(prod => prod.id === id );
        
    }
    
    return (
        <ProductsContext.Provider value={{listProducts, newProduct, setNewProduct, createNewProduct, removeProduct}}>
            {children}
        </ProductsContext.Provider>
    )
}

export const useProducts = () => useContext(ProductsContext);