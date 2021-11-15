import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";
import toast from "react-hot-toast";
import { History } from "history";
import { UserAuthData } from "../../types/AuthUser";
import api from "../../Services";

/*
Provider de Autenticação (login)

contém as intefaces de de validação de typescript

## AuthProps - valida a função de provider (UserAuthProvider)
## AuthData - valida a função de criação de context (UserAuthContext) e de suas respectivas sub funções. 
*/

interface AuthProps {
  children: ReactNode;
}

interface AuthData {
  userLogin: (data: UserAuthData, history: History) => void;
  token: string;
  setToken: Dispatch<SetStateAction<string>>;
}

const UserAuthContext = createContext<AuthData>({} as AuthData);

export const UserAuthProvider = ({ children }: AuthProps) => {
  const getToken = localStorage.getItem("token") || "";
  const [token, setToken] = useState(getToken);

  /*
  userLogin - valida o login do usuário, salva o token no localstorege e redireciona para o dashboard
  */
  const userLogin = (data: UserAuthData, history: History) => {
    api
      .post("/login", data)
      .then((res) => {
        localStorage.clear();
        localStorage.setItem("token", res.data.accessToken);
        setToken(res.data.accessToken);
        history.push("/dashboard");
        toast.success("Seja bem vindo!");
      })
      .catch((_) => {
        toast.error("Email ou senha inválidos");
      });
  };

  return (
    <UserAuthContext.Provider value={{ token, setToken, userLogin }}>
      {children}
    </UserAuthContext.Provider>
  );
};

export const useAuthLogin = () => useContext(UserAuthContext);
