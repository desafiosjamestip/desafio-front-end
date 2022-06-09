import { createContext, useContext, useState, ReactNode} from "react";

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
    setListProducts: React.Dispatch<React.SetStateAction<ProductsItems[]>>;
    createNewProduct: (newProducts: ProductsItems) => void;
    removeProduct: (id: string) => void;
    editProduct: (product: ProductsItems, id: string) => void;
}

const ProductsContext = createContext<ProductsProviderData>({} as ProductsProviderData);



export const ProductsProvider = ({children}: ProductsProviderProps) => {
    
    
    const [listProducts, setListProducts] = useState<ProductsItems[]>(JSON.parse(localStorage.getItem("@listProducts") || "[]") || []);
    
    
    const createNewProduct = (product: ProductsItems) => {
        localStorage.setItem("@listProducts", JSON.stringify([...listProducts, product]));
        setListProducts([...listProducts, product]);        
    }

    const removeProduct = (id: string) => {
        const newListProducts = listProducts.filter((prod) => prod.id !== id)
        localStorage.setItem("@listProducts", JSON.stringify([...newListProducts]))
        setListProducts([...newListProducts])        
    }

    const editProduct = (product: ProductsItems, id: string) => {
        const newListProducts = listProducts.filter(prod => prod.id !== id)
        localStorage.setItem("@listProducts", JSON.stringify([...newListProducts, product]))         
        setListProducts([...newListProducts, product])        
    }
    
    return (
        <ProductsContext.Provider value={{listProducts, setListProducts, createNewProduct, removeProduct, editProduct}}>
            {children}
        </ProductsContext.Provider>
    )
}

export const useProducts = () => useContext(ProductsContext);