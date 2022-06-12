import { createContext, useState } from "react";
import { v4 as uuid } from "uuid";

export const VitrineContext = createContext([]);

export const ListProductsProviders = ({ children }) => {
  const [listProducts, setListProducts] = useState(
    JSON.parse(localStorage.getItem("listProducts")) || []
  );

  const addProduct = (item) => {
    item = {
      img: item.img,
      alt: item.alt,
      codigo: item.codigo,
      categoria: item.categoria,
      nome: item.nome,
      fornecedor: item.fornecedor,
      preco: item.preco,
      id: uuid(),
    };

    setListProducts([...listProducts, item]);

    const list = JSON.parse(localStorage.getItem("listProducts")) || [];

    const newList = [...list, item];

    localStorage.setItem("listProducts", JSON.stringify(newList));
  };

  const removeProduct = (item) => {
    const newListProducts = listProducts.filter(
      (product) => product.id !== item.id
    );
    setListProducts(newListProducts);

    const list = JSON.parse(localStorage.getItem("listProducts")) || [];

    const newList = list.filter((products) => products.id !== item.id);

    localStorage.setItem("listProducts", JSON.stringify(newList));
  };

  return (
    <VitrineContext.Provider
      value={{ listProducts, addProduct, removeProduct }}
    >
      {children}
    </VitrineContext.Provider>
  );
};
