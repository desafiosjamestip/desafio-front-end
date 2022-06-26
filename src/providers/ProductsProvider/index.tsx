import { createContext, useContext, useState } from "react";
import {
  IChildrenProps,
  IProduct,
  IProductsContextData,
} from "../../interfaces";

export const ProductsContext = createContext<IProductsContextData>(
  {} as IProductsContextData
);

function useProducts() {
  const context = useContext(ProductsContext);

  if (!context) {
    throw new Error("useProducts must be used within a ProductsProvider");
  }

  return context;
}

function ProductsProvider({ children }: IChildrenProps) {
  const [updater, setUpdater] = useState(true);
  function getProducts(): IProduct[] {
    try {
      const products = localStorage.getItem("products");
      if (products) {
        setUpdater(!updater);
        return JSON.parse(products);
      }
      return [];
    } catch (error) {
      throw new Error();
    }
  }

  function registerProduct(product: IProduct) {
    try {
      localStorage.setItem(
        "products",
        JSON.stringify([...getProducts(), product])
      );
      setUpdater(!updater);
    } catch (error) {
      throw new Error();
    }
  }

  function deleteProduct(id: string) {
    const products = getProducts();
    const newProducts = products.filter((product) => product.id !== id);
    localStorage.setItem("products", JSON.stringify(newProducts));
    setUpdater(!updater);
  }

  function updateProduct(product: IProduct) {
    const products = getProducts();
    console.log("products", products, "updatedProduct:", product);
    const newProducts = products.map((p) =>
      p.id === product.id ? { ...p, ...product } : p
    );
    localStorage.setItem("products", JSON.stringify(newProducts));
    setUpdater(!updater);
  }

  return (
    <ProductsContext.Provider
      value={{
        getProducts,
        registerProduct,
        updateProduct,
        deleteProduct,
        updater,
        setUpdater,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

export { ProductsProvider, useProducts };
