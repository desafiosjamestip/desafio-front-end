import Register from "../../assets/Register.svg";
import { ContainerImage } from "./styles";

/*
Função que retorna o svg que aparece na page Register
*/
export const RegisterImage = () => {
  return (
    <>
      <ContainerImage className="hidden">
        <img src={Register} alt="register" />
      </ContainerImage>
    </>
  );
};
