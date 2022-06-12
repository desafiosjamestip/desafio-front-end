import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

import { Product } from "../@types/Product";

import firstProduct from "../services/products";

interface ProductContext {
  registerProduct: (data: Product) => void;
  editProduct: (id: string, data: Product) => void;
  removeProduct: (id: string) => void;
  products: Product[];
}

const STORAGE_KEY = "@jamestip/products";

export const ProductContext = createContext({} as ProductContext);

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);

  const getStorage = useCallback((): Product[] | null => {
    const storageItems = localStorage.getItem(STORAGE_KEY);

    if (!storageItems) {
      return null;
    }

    return JSON.parse(storageItems);
  }, []);

  const setStorage = useCallback((data) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }, []);

  const getProducts = useCallback(() => {
    const productsList = getStorage();

    if (!productsList) {
      return;
    }

    setProducts((oldProducts) => [...oldProducts, ...productsList]);
  }, []);

  const registerProduct = useCallback((data: Product) => {
    const oldProducts = getStorage();

    if (!oldProducts) {
      const newProduct = new Array(data);
      setStorage(newProduct);
    } else {
      const productsList = [...oldProducts, data];
      setStorage(productsList);
    }

    console.log(oldProducts);
  }, []);

  const editProduct = useCallback((id: string, data: Product) => {}, []);

  const removeProduct = useCallback((id: string) => {}, []);

  useEffect(() => {
    getProducts();
    // localStorage.clear();
    // registerProduct(firstProduct);
  }, []);

  return (
    <ProductContext.Provider
      value={{ registerProduct, editProduct, removeProduct, products }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export function useProduct() {
  const context = useContext(ProductContext);

  if (!context) {
    throw new Error("useProduct must be used within an ProductProvider");
  }

  return context;
}
