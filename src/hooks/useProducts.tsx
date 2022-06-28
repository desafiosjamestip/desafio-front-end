import { createContext, PropsWithChildren, useContext, useState, useEffect } from "react";

export interface Product {
    id: String,
    category: String,
    name: String,
    provider: String,
    price: String
}

interface ProductsContextData {
    products: Product[],
    addProduct: (product: Product) => void,
    deleteProduct: (product: Product) => void
}

const initialProducts: Product[] = [

    {
        id: "1",
        category: "eletrônicos",
        name: "Relógio digital",
        provider: "Oficina do relógio",
        price: "50,99"
    },
    {
        id: "2",
        category: "eletrônicos",
        name: "Cabo USB",
        provider: "amazon",
        price: "20,00"
    },
    {
        id: "3",
        category: "eletrônicos",
        name: "Carregador de celular",
        provider: "apple",
        price: "100,00"
    },
    {
        id: "4",
        category: "eletrônicos",
        name: "Carregador de celular",
        provider: "amazon",
        price: "40,00"
    }
]

const ProductsContext = createContext<ProductsContextData>({} as ProductsContextData);

export function ProductProvider({ children }: PropsWithChildren) {
    const [products, setProducts] = useState<Product[]>(
        () => {
            const saved = localStorage.getItem("product") || JSON.stringify(initialProducts);
            const initialValue = JSON.parse(saved);
            return initialValue || "";
        }
    );

    const addProduct = (product: Product) => {
        const newProduct = {
            ...product
        }
        setProducts([...products, newProduct]);
        localStorage.setItem("product", JSON.stringify(products))
    }

    useEffect(() => localStorage.setItem("product", JSON.stringify(products)), [products])

    const deleteProduct = (product: Product) => {
        const newProducts = products.filter((element) => element.id !== product.id);
        setProducts(newProducts);
        localStorage.setItem("product", JSON.stringify(products));
    }

    useEffect(() => console.log(products), [products])

    return (
        <ProductsContext.Provider value={{ products, addProduct, deleteProduct }}>
            {children}
        </ProductsContext.Provider>
    )
}

export function useProducts() {
    const context = useContext(ProductsContext)
    return context;
}