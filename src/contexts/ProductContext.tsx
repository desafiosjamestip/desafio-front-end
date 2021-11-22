
import React, { createContext, FunctionComponent, useContext, useEffect, useState } from "react";
import { listProducts, createProduct, deleteProduct, updateProduct } from "../services/products";
export interface IProduct {
  uuid?: string;
  code: number;
  name: string;
  category: string;
  provider: string;
  value: number;
  imageUrl: string
}
interface ProductContextState {
  products: IProduct[];
  storeProduct: (product: IProduct) => void;
  removeProduct: (uuid: string) => void;
  editProduct: (product: IProduct) => void;

}
const defaultValues: ProductContextState = {
  products: [],
  storeProduct: () => { },
  removeProduct: () => { },
  editProduct: () => { }
}
export const ProductContext = createContext<ProductContextState>(defaultValues)

export const ProductProvider: FunctionComponent = ({ children }) => {
  const [products, setProducts] = useState<IProduct[]>([])
  const storeProduct = (product: IProduct) => {
    createProduct(product)
    setProducts(listProducts())
  }
  const removeProduct = (uuid: string) => {
    deleteProduct(uuid)
    setProducts(listProducts())
  }
  const editProduct = (product: IProduct) => {
    updateProduct(product)
    setProducts(listProducts())

  }
  useEffect(() => {
    setProducts(listProducts())
  }, [])

  return (
    <ProductContext.Provider value={{ products, storeProduct, removeProduct, editProduct }}>
      {children}
    </ProductContext.Provider>
  )
}

export const useProduct = (): ProductContextState => useContext(ProductContext) ?? defaultValues

export const withProductProvider = (Component: React.FC) => () => (<ProductProvider> <Component /> </ProductProvider>)