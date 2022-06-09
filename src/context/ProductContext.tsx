import React, { createContext, ReactNode, useEffect, useState } from "react";

interface ProductInterface {
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
  
  function removeItem(data: ProductInterface) {
    const newProductsArray = products.filter(
      (product) => data.id !== product.id
    );

    localStorage.setItem("data", JSON.stringify(newProductsArray));
    setProducts(newProductsArray);

    alert("Produto removido com sucesso!");
  }

  function updateItem(data: ProductInterface) {
    const newProductsArray = products.filter(
      (product) => data.id !== product.id
    );
    newProductsArray.push(data);

    localStorage.setItem("data", JSON.stringify(newProductsArray));
    setProducts(newProductsArray);

    alert("Produto atualizado com sucesso!");
  }

  function addItem(data: ProductInterface) {
    const newProductsArray = [...products, data];
    localStorage.setItem("data", JSON.stringify(newProductsArray));
    setProducts(newProductsArray);
    alert("Produto adicionado com sucesso!");
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
