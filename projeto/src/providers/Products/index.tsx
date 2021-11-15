import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { ProductsData } from "../../types/ProductsData";
import { UpdateProductsData } from "../../types/UpdateProductsData";

import jwt_decode from "jwt-decode";
import { useAuthLogin } from "../Auth";
import toast from "react-hot-toast";
import api from "../../Services";

interface ProductsProviderProps {
  children: ReactNode;
}

interface ProductsDataProps {
  store: ProductsData[] | UpdateProductsData[];
  setStore: React.Dispatch<React.SetStateAction<ProductsData[]>>;
  registerProducts: (data: ProductsData) => void;
  updateProducts: (data: UpdateProductsData, productId: number) => void;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  openModal: boolean;
  setCodeProduct: Dispatch<SetStateAction<number>>;
  codeProduct: number;
  loadStore: () => void;
}

interface Decoded {
  email: string;
  iat: number;
  exp: number;
  sub: string;
}

export const ProductsContext = createContext<ProductsDataProps>(
  {} as ProductsDataProps
);

export const ProductsProvider = ({ children }: ProductsProviderProps) => {
  /*
  openModal - faz o controle de abertura do modal de update, está aqui para ser compartilhado
  nas pages necessárias
  */
  const [openModal, setOpenModal] = useState<boolean>(false);

  /*
  codeProduct - recebe o id do produto (na page StoreBD) para realizar o update
  */
  const [codeProduct, setCodeProduct] = useState(0);

  /*
  token - token que vem do provider Auth
  */
  const { token } = useAuthLogin();

  /*
  a condicional abaixo verifica se o token exsite  e faz a decodificação no JWT
  */
  if (token) {
    const decoded = jwt_decode<Decoded>(token);
    localStorage.setItem("userId", JSON.stringify(decoded.sub));
  }

  /*
  userId - recebe o token decodificado pelo JWT
   */
  const userId = localStorage.getItem("userId");

  /*
  store - recebe os produtos da api
  */
  const [store, setStore] = useState<ProductsData[]>(
    JSON.parse(localStorage.getItem("store") || "[]")
  );

  /*
  registerProducts - recebe os dados do formulário de cadastro e registra o produto na api
  */
  const registerProducts = (data: ProductsData) => {
    api
      .post(
        "/products",
        { ...data, userId },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((resp) => {
        setStore([...store, resp.data]);
        toast.success("Produto adicionado ao registro geral!");
      })
      .catch((_) => toast.error("Não possível cadastrar, tente novamente."));
  };

  /*
  updateProducts - realiza o update das informações dos produtos
  */
  const updateProducts = (data: UpdateProductsData, productId: number) => {
    api
      .patch(`/products/${productId}`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((_) => {
        toast.success("Produto atualizado com sucesso!");
      })
      .catch((_) =>
        toast.error("Não foi possível atualizar os dados, tente novamente.")
      );
  };

  /*
  loadStore - tentativa de manter os produtos atualizados após o update
  */
  const loadStore = () => {
    api
      .get("/products", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((resp) => {
        setStore(resp.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <ProductsContext.Provider
      value={{
        store,
        setStore,
        registerProducts,
        updateProducts,
        setOpenModal,
        openModal,
        setCodeProduct,
        codeProduct,
        loadStore,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);
