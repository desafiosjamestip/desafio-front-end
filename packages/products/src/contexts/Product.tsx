import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import { Product } from "../@types/Product";

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

  const setStorage = useCallback((data: Product | Product[]) => {
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
    try {
      const oldProducts = getStorage();

      if (!oldProducts) {
        const newProduct = new Array(data);
        setStorage(newProduct);
      } else {
        const productsList = [...oldProducts, data];
        setStorage(productsList);
      }

      toast.success("Produto cadastrado!");
    } catch {
      toast.error("Não foi possível cadastrar! Tente novamente!");
    }
  }, []);

  const editProduct = useCallback((id: string, data: Product) => {
    try {
      const oldProducts = getStorage();

      const updatedProducts = oldProducts.map((product) => {
        if (product.code === id) {
          return {
            ...product,
            ...data,
          };
        }

        return product;
      });

      setStorage(updatedProducts);
      toast.success("Produto editado!");
    } catch {
      toast.error("Não foi possível editar! Tente novamente!");
    }
  }, []);

  const removeProduct = useCallback((id: string) => {
    try {
      const oldProducts = getStorage();

      const updatedProducts = oldProducts.filter(
        (product) => product.code !== id
      );

      setStorage(updatedProducts);
      toast.success("Produto removido!");
    } catch {
      toast.error("Não foi possível remover! Tente novamente!");
    }
  }, []);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ProductContext.Provider
      value={{ registerProduct, editProduct, removeProduct, products }}
    >
      {children}
      <ToastContainer />
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
