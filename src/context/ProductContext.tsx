import React, { createContext, ReactNode, useEffect, useState } from "react";

export type ProductInterface = {
  id: string;
  name: string;
  provider: string;
  category: string;
  value: string;
}

interface ProductInterfaceContext {
  products: ProductInterface[];
  setProducts: React.Dispatch<React.SetStateAction<ProductInterface[]>>;
  selectedProduct: ProductInterface;
  setSelectedProduct: React.Dispatch<React.SetStateAction<ProductInterface>>;
  addItem: (data: ProductInterface) => void;
  updateItem: (data: ProductInterface) => void;
  removeItem: (data: ProductInterface) => void;
}

type ProductProvider = {
  children: ReactNode;
};

const ProductContext = createContext({} as ProductInterfaceContext);

const ProductProvider = (props: ProductProvider) => {
  const [products, setProducts] = useState<ProductInterface[]>(
    [] as ProductInterface[]
  );
  const [selectedProduct, setSelectedProduct] = useState<ProductInterface>(
    {} as ProductInterface
  );

  function saveData(data: ProductInterface[], message:string){
    localStorage.setItem("data", JSON.stringify(data));
    setProducts(data);

    alert(message);
  }
  
  function removeItem(data: ProductInterface) {
    const newProductsArray = products.filter(
      (product) => data.id !== product.id
    );

    saveData(newProductsArray, "Produto removido com sucesso!")
  }

  function updateItem(data: ProductInterface) {
    const newProductsArray = products.filter(
      (product) => data.id !== product.id
    );
    newProductsArray.push(data);

    saveData(newProductsArray, "Produto atualizado com sucesso!")
  }

  function addItem(data: ProductInterface) {
    const newProductsArray = [...products, data];
    saveData(newProductsArray, "Produto adicionado com sucesso!")
  }

  function loadTable() {
    const localStorageData = localStorage.getItem("data");

    if (localStorageData) {
      setProducts(JSON.parse(localStorageData));
    } else {
      localStorage.setItem("data", "[]");
    }
  }

  useEffect(() => {
    loadTable();
  }, []);

  return (
    <ProductContext.Provider
        value={{
        products,
        setProducts,
        selectedProduct,
        setSelectedProduct,
        addItem,
        updateItem,
        removeItem
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export { ProductProvider };
export default ProductContext;
