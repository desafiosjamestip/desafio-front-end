import React, { createContext, useState } from "react";

//Tipando os dados que quero para usuário
type UserType = {
  cod: string;
  category: string;
  nameProduct: string;
  nameProvider: string;
  price: string;
};

//Tipando as Props do contexto
type PropsUserContext = {
  state: UserType;
  setState: React.Dispatch<React.SetStateAction<UserType>>;
};


const DEFAULT_VALUE = {
  state: {
    cod: "",
    category: "",
    nameProduct: "",
    nameProvider: "",
    price: "",
  },
  setState: () => {}, 
};


const UserContext = createContext<PropsUserContext>(DEFAULT_VALUE);


const UserContextProvider: React.FC = ({ children }) => {
  const [state, setState] = useState(DEFAULT_VALUE.state);
  return (
    <UserContext.Provider
      value={{
        state,
        setState,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export { UserContextProvider };
export default UserContext;
