import { createContext, useContext, useState } from "react";
import { ReactNode } from "react";

interface IForms {
  children: ReactNode;
}

interface IFormsProps {
  removeProduct: (id: number) => void;
  editProduct: () => void;
  id: number;
  data: IFormsContext[];
  setData: React.Dispatch<React.SetStateAction<IFormsContext[]>>;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  code: number;
  setCode: React.Dispatch<React.SetStateAction<number>>;
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
  provider: string;
  setProvider: React.Dispatch<React.SetStateAction<string>>;
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: () => void;
  editar: IFormsContext;
}

interface IFormsContext {
  code: number;
  category: string;
  name: string;
  provider: string;
  value: number;
  id: number;
}

const FormsContext = createContext({} as IFormsProps);
export const FormsProvider = ({ children }: IForms) => {
  const [data, setData] = useState<IFormsContext[]>([] as IFormsContext[]);
  const [id, setId] = useState<number>(0);
  const [editar, setEditar] = useState<IFormsContext>(Object);
  const [name, setName] = useState<string>("");
  const [code, setCode] = useState<number>(0);
  const [category, setCategory] = useState<string>("");
  const [provider, setProvider] = useState<string>("");

  const [value, setValue] = useState<number>(0);

  const removeProduct = (id: number) => {
    const filtered = data.filter((item) => item.id !== id);
    setData(filtered);
    localStorage.setItem("products", JSON.stringify(filtered));
  };

  const handleSubmit = () => {
    const productsStorageList: IFormsContext[] = JSON.parse(
      localStorage.getItem("products") || "[]"
    );
    const newProduct = { name, category, code, provider, value };
    const newId = data.reduce(
      (acc, item) => (item.id >= acc ? item.id + 1 : acc),
      1
    );
    setData([...data, { ...newProduct, id: newId }]);
    setId(newId);
    productsStorageList.push({ ...newProduct, id: newId });
    localStorage.setItem("products", JSON.stringify(productsStorageList));
  };

  const editProduct = () => {
    const productsStorageList: IFormsContext[] = JSON.parse(
      localStorage.getItem("products") || "[]"
    );
    const newProduct = { name, category, code, provider, value };
    const newId = productsStorageList.reduce(
      (acc, item) => (item.id >= acc ? item.id + 1 : acc),
      1
    );
    const newProductsList = productsStorageList.filter(
      (product) => product.id !== id
    );
    console.log(id);
    console.log(productsStorageList);
    setData([...newProductsList, { ...newProduct, id: newId }]);
    setId(newId);
    console.log(newProductsList);
    newProductsList.push({ ...newProduct, id: newId });
    localStorage.setItem("products", JSON.stringify(newProductsList));
  };

  return (
    <FormsContext.Provider
      value={{
        removeProduct,
        setData,
        editProduct,
        data,
        id,
        editar,
        name,
        setCategory,
        setCode,
        setName,
        setProvider,
        setValue,
        value,
        category,
        code,
        provider,
        handleSubmit,
      }}
    >
      {children}
    </FormsContext.Provider>
  );
};

export const useForms = () => useContext(FormsContext);

export default FormsProvider;
