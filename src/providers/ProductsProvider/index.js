import { createContext, useContext, useState } from "react";

const ProductsContext = createContext([])

export const ProductsProvider = ({children}) =>{
    //state para armazenar os produtos cadastrados, se não tiver nada no localstorage ele inicia como um array vazio
    const [products,setProducts] = useState(JSON.parse(localStorage.getItem("@desafioJamesTip:Cadastro")) || [])

    //função pro cadastro de produtos
    const registerProduct = (product) =>{
        setProducts([...products,product])
        localStorage.setItem("@desafioJamesTip:Cadastro", JSON.stringify([...products,product]))
    }

    //função para edição de produtos
    const editProduct = (product, newProduct) =>{
        const productIndex = products.findIndex(item => product === item)
        const arr = [...products]
        arr[productIndex] = newProduct
        setProducts(arr)
        localStorage.setItem("@desafioJamesTip:Cadastro", JSON.stringify(arr))
    }

    //função para deleção de produtos
    const deleteProduct = (product) =>{
        const filtered = products.filter(item => item !== product)
        setProducts(filtered)
        localStorage.setItem("@desafioJamesTip:Cadastro", JSON.stringify(filtered))
    }

    return(
        <ProductsContext.Provider value={{ products,setProducts,registerProduct,editProduct,deleteProduct }}>
            {children}
        </ProductsContext.Provider>
    )
}

export const useProducts = () => useContext(ProductsContext)