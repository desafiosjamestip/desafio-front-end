import { createContext, useState } from "react";
import { v4 as uuid } from "uuid";

export const VitrineContext = createContext([]);

export const ListProductsProviders = ({ children }) => {
  const [listProducts, setListProducts] = useState(
    JSON.parse(localStorage.getItem("listProducts")) || []
  );

  const [productInfo, setProductInfo] = useState({});

  const addProduct = (item) => {
    item = {
      img: item.img,
      codigo: item.codigo,
      categoria: item.categoria,
      nome: item.nome,
      fornecedor: item.fornecedor,
      valor: item.valor,
      id: uuid(),
    };

    setListProducts([...listProducts, item]);

    const list = listProducts;

    const newList = [...list, item];

    localStorage.setItem("listProducts", JSON.stringify(newList));
  };

  console.log(listProducts);

  const removeProduct = (item) => {
    console.log(listProducts);

    const newListProducts = listProducts.filter(
      (product) => product.id !== item.id
    );
    setListProducts(newListProducts);

    const list = listProducts;

    const newList = list.filter((product) => product.id !== item.id);

    localStorage.setItem("listProducts", JSON.stringify(newList));
  };

  const updateProduct = (id, data) => {
    const newList = listProducts.map((item) => {
      if (id === item.id) {
        return {
          ...item,
          ...data,
        };
      }
      return item;
    });

    setListProducts(newList);
  };

  return (
    <VitrineContext.Provider
      value={{ listProducts, addProduct, removeProduct, updateProduct }}
    >
      {children}
    </VitrineContext.Provider>
  );
};
