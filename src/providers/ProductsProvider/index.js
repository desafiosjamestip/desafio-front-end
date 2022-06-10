import { createContext, useContext, useState } from "react";

const ProductsContext = createContext([])

export const ProductsProvider = ({children}) =>{
    const [products,setProducts] = useState(JSON.parse(localStorage.getItem("@desafioJamesTip:Cadastro")) || [])

    const registerProduct = (product) =>{
        console.log(product)
        setProducts([...products,product])
        localStorage.setItem("@desafioJamesTip:Cadastro", JSON.stringify([...products,product]))
    }

    return(
        <ProductsContext.Provider value={{products,setProducts,registerProduct}}>
            {children}
        </ProductsContext.Provider>
    )
}

export const useProducts = () => useContext(ProductsContext)