import { createContext, ReactNode, useContext, useState } from 'react';

interface ProductsProviderProps {
  children: ReactNode;
}

interface Product {
  sku: string;
  category: string;
  name: string;
  supplier: string;
  price: number;
}

interface ProductsLocalStorage {
  productsStoraged: {
    products: Product[];
  };
}

interface ProductsContextData {
  productsStoraged: {
    products: Product[];
  };
}

const ProductsContext = createContext<ProductsContextData>(
  {} as ProductsContextData
);

export function ProductsProvider({
  children,
}: ProductsProviderProps): JSX.Element {
  // Acessar conteúdo no localstorage e criar caso não tenha
  const [products, setProducts] = useState<ProductsLocalStorage>(() => {
    let productsStorage = {
      products: [] as Product[],
    };

    const localStorage = window.localStorage.getItem('products');

    if (localStorage !== null) {
      productsStorage = JSON.parse(localStorage);
    }

    return {
      productsStoraged: productsStorage,
    };
  });

  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  );
}

export function useProducts(): ProductsContextData {
  const context = useContext(ProductsContext);

  return context;
}
