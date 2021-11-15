import { createContext, ReactNode, useContext, useEffect } from "react";
import { History } from "history";
import toast from "react-hot-toast";
import { UserRegisterData } from "../../types/RegisterUser";
import api from "../../Services";
import { useProducts } from "../Products";

/*
Função que faz o registro de usuários na api e contém as interfaces necessárias para as validações do
typescript
*/

interface UserProps {
  children: ReactNode;
}

interface UserData {
  userRegister: (data: UserRegisterData, history: History) => void;
}

const UserRegisterContext = createContext<UserData>({} as UserData);

export const UserProvider = ({ children }: UserProps) => {
  /*
  userRegister - faz a requicição de registro do usuário na api
   */
  const userRegister = (data: UserRegisterData, history: History) => {
    console.log(data);
    api
      .post("/register", data)
      .then((_) => {
        toast.success("Cadastro realizado com sucesso");
        return history.push("/login");
      })
      .catch((_) => {
        toast.error("Tente novamente");
      });
  };

  return (
    <UserRegisterContext.Provider value={{ userRegister }}>
      {children}
    </UserRegisterContext.Provider>
  );
};

export const useRegisterUser = () => useContext(UserRegisterContext);
