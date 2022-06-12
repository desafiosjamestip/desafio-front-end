import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

import firstProduct from "../services/products";

interface Product {
  name: string;
  category: string;
  code: string;
  provider: string;
  price: string;
}

interface ProductData {
  data: Product;
}

interface ProductContext {
  registerProduct: (data: ProductData) => void;
  editProduct: (id: string, data: ProductData) => void;
  removeProduct: (id: string) => void;
  products: Product[];
}

const STORAGE_KEY = "@jamestip/products";

export const ProductContext = createContext({} as ProductContext);

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const getStorage = useCallback((): Product[] | null => {
    const storageItems = localStorage.getItem(STORAGE_KEY);

    if (!storageItems) {
      console.log(storageItems);
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

  const registerProduct = useCallback((data: ProductData) => {
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

  const editProduct = useCallback((id: string, data: ProductData) => {}, []);

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
