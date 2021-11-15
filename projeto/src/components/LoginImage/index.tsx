import Login from "../../assets/Login.svg";
import { ContainerImage } from "./styles";

/*
Função que retorna o svg que aparece na page Login
*/

export const LoginImage = () => {
  return (
    <>
      <ContainerImage className="hidden">
        <img src={Login} alt="register" />
      </ContainerImage>
    </>
  );
};
