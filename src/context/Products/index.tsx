import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import {
  IProductList,
  IChildrenProps,
  IProductToDelete,
} from "../../interfaces/providersInterface";

const initialContent = JSON.parse(localStorage.getItem("products") || "[]");
const ProductContext = createContext(initialContent);

export const ProductProvider = ({ children }: IChildrenProps) => {
  const [products, setProducts] = useState(initialContent);

  const addProduct = (product: IProductList) => {
    const checkDatabase = products.find(
      (item: any) => item.code === product.code
    );
    if (checkDatabase) {
      toast.error("Produto já cadastrado");
    } else {
      setProducts([...products, product]);
      toast.success("Produto cadastrado!");
    }
  };

  const removeProduct = (code: IProductToDelete) => {
    const newList = products.filter((item: any) => item.code !== code);
    toast.success("Produto removido!");
    setProducts(newList);
  };

  const updateProduct = (product: IProductList) => {
    console.log(product);
    const itemToUpdate = products.find(
      (item: IProductList) => item.code === product.code
    );

    const newCode = product.code
      ? (itemToUpdate.code = product.code)
      : itemToUpdate.code;
    const newCategory = product.category
      ? (itemToUpdate.category = product.category)
      : itemToUpdate.category;
    const newProductName = product.productName
      ? (itemToUpdate.productName = product.productName)
      : itemToUpdate.productName;
    const newProviderName = product.providerName
      ? (itemToUpdate.providerName = product.providerName)
      : itemToUpdate.providerName;
    const newValue = product.value
      ? (itemToUpdate.value = product.value)
      : itemToUpdate.value;

    const updatedList = products.filter(
      (item: any) => item.code !== product.code
    );

    setProducts([
      ...updatedList,
      {
        code: newCode,
        category: newCategory,
        productName: newProductName,
        providerName: newProviderName,
        value: newValue,
      },
    ]);
    toast.success("Item atualizado!");
  };

  localStorage.setItem("productList", JSON.stringify(products));

  return (
    <ProductContext.Provider
      value={{ products, addProduct, removeProduct, updateProduct }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);
