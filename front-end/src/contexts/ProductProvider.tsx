import { useContext, useState } from "react";
import { Product } from "../types/Product";
import { useApi } from "../services/api";
import { ProductContext } from './ProductContext';
import { Category } from "../types/Category";

export const ProductProvider = ({children}: {children: JSX.Element}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const api = useApi();

  const listProducts = async () => {
    const data = await api.listProducts();
    setProducts(data);
    return products;
  }

  const createProduct = async (name: string, provider: string, category: string, price: string) => {
    await api.createProduct(name, provider, category, price);
  }

  const deleteProduct = async (id: string) => {
    await api.deleteProduct(id);
  }

  const editProduct = async (id: string ,name: string, provider: string, category: string, price: string) => {
    await api.editProduct(id ,name, provider, category, price);
  }

  const listCategories = async () => {
    const data = await api.listCategories();
    setCategories(data);
    return categories;
  }

  const createCategory = async (name: string) => {
    await api.createCategory(name);
    listCategories();
  }

  const deleteCategory = async (id: string) => {
    await api.deleteCategory(id)
  }

  return (
    <ProductContext.Provider value={{
      listProducts,
      createProduct,
      deleteProduct,
      editProduct,
      products,
      listCategories,
      createCategory,
      deleteCategory,
      categories
    }}>
      {children}
    </ProductContext.Provider>
  )
}

export const useProductContext = () => useContext(ProductContext);