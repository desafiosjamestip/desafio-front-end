import { createContext, useContext } from "react";
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
  function getProducts(): IProduct[] {
    const products = localStorage.getItem("products");
    if (products) {
      return JSON.parse(products);
    }
    return [];
  }

  function registerProduct(product: IProduct) {
    localStorage.setItem(
      "products",
      JSON.stringify([...getProducts(), product])
    );
  }

  function deleteProduct(id: string) {
    const products = getProducts();
    const newProducts = products.filter((product) => product.id !== id);
    localStorage.setItem("products", JSON.stringify(newProducts));
  }

  function updateProduct(product: IProduct) {
    const products = getProducts();
    const newProducts = products.map((p) =>
      p.id === product.id ? { ...p, ...product } : p
    );
    localStorage.setItem("products", JSON.stringify(newProducts));
  }

  return (
    <ProductsContext.Provider
      value={{
        getProducts,
        registerProduct,
        updateProduct,
        deleteProduct,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

export { ProductsProvider, useProducts };
