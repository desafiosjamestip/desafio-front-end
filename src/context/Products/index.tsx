import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import {
  IProductList,
  IChildrenProps,
} from "../../interfaces/providersInterface";

const initialContent = JSON.parse(localStorage.getItem("products") || "[]");
const ProductContext = createContext(initialContent);

export const ProductProvider = ({ children }: IChildrenProps) => {
  // faz a criação inicial dos dados em localStorage, utilizando o valor contido em "initialContent"
  const [products, setProducts] = useState(initialContent);

  // função para adicionar um produto
  // como parâmetro recebo o item a ser adicionado, que foi enviado lá do formulário
  const addProduct = (product: IProductList) => {
    // neste caso, estou definindo o "code" como se fosse um "id",
    // não permitindo que ele se repita e tenhamos cadastros de códigos duplicados

    //primeiro faço uma checagem se o código do produto já existe
    const checkDatabase = products.find(
      (item: IProductList) => item.code === product.code
    );

    // Condições caso o produto já exista ou não
    if (checkDatabase) {
      toast.error("Produto já cadastrado");
    } else {
      setProducts([...products, product]);
      toast.success("Produto cadastrado!");
    }
  };

  // Função para remover um produto, no qual recebo um "code" como parâmetro
  const removeProduct = (code: any) => {
    // com o valor recebido, faço um filter com o código recebido e retorno
    // todos os itens que não entram na condição abaixo. Após isso, salvo os dados

    // aqui, vale complementar, não tenho uma condicional checando se o "code" existe porque
    // o valor enviado sempre vai existir, observando-se que o usuário não tem o poder de
    // alterar esse código enviado como parâmetro dessa função
    const newList = products.filter((item: IProductList) => item.code !== code);
    toast.success("Produto removido!");
    setProducts(newList);
  };

  // Função para fazer a atualização de um produto
  const updateProduct = (product: IProductList) => {
    // Primeiro encontro o produto a ser feito a atualização
    // novamente não há a necessidade de validar o retorno do find abaixo
    const itemToUpdate = products.find(
      (item: IProductList) => item.code === product.code
    );

    // Aqui tenho algumas variáveis para armazenar as possíveis alterações em um produto
    // Como a atualização pode ser apenas parcial, e não completa, faço a checagem se em cada input teve alguma alteração.
    // Caso sim, esse novo valor é inserido.
    // Caso não, mantem-se o valor original

    // OBS: por ser como um "id", o valor de "code" não pode ser alterado.
    // Caso tenha errado o valor de "code", precisará deletar e cadastrar novamente o item
    const newCode = product.code && itemToUpdate!.code;
    const newCategory = product.category
      ? (itemToUpdate!.category = product.category)
      : itemToUpdate!.category;
    const newProductName = product.productName
      ? (itemToUpdate!.productName = product.productName)
      : itemToUpdate!.productName;
    const newProviderName = product.providerName
      ? (itemToUpdate!.providerName = product.providerName)
      : itemToUpdate!.providerName;
    const newValue = product.value
      ? (itemToUpdate!.value = product.value)
      : itemToUpdate!.value;

    // Aqui faço um filter dos produtos já existentes, menos o que está sendo atualizado
    const updatedList = products.filter(
      (item: IProductList) => item.code !== product.code
    );

    // Aqui faço a nova inserção dos dados em localStorage, pegando o valor de "updatedList"
    // e adicionando o produto que foi feito a atualização
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
