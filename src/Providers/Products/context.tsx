import { createContext, useContext, useState, ReactNode} from "react";

interface ProductsProviderProps {
    children: ReactNode;
}

interface ProductsItems {
    id: number;
    categories: string;
    name: string;
    provider: string;
    price: number;
}

interface ProductsProviderData{
    listProducts: ProductsItems[];
    newProduct: ProductsItems;
    setNewProduct: React.Dispatch<React.SetStateAction<ProductsItems>>
    createNewProduct: (newProducts: ProductsItems) => void;
    removeProduct: (id: number) => void;
}

const ProductsContext = createContext<ProductsProviderData>({} as ProductsProviderData);

export const ProductsProvider = ({children}: ProductsProviderProps) => {
    const [listProducts, setListProducts] = useState<ProductsItems[]>([]);
    const [newProduct, setNewProduct] = useState<ProductsItems>({} as ProductsItems)
    
    const createNewProduct = (product: ProductsItems) => {
        setListProducts([...listProducts, product]);
    }

    const removeProduct = (id: number) => {
        const newListProducts = listProducts.filter((prod) => prod.id !== id)

        setListProducts(newListProducts)
    }
    
    return (
        <ProductsContext.Provider value={{listProducts, newProduct, setNewProduct, createNewProduct, removeProduct}}>
            {children}
        </ProductsContext.Provider>
    )
}

export const useProducts = () => useContext(ProductsContext);