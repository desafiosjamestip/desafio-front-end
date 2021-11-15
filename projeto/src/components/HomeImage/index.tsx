import Home from "../../assets/Home.svg";
import { ContainerImage } from "./styles";

/*
Função retorna o svg que aparece na page Home
*/
export const HomeImage = () => {
  return (
    <>
      <ContainerImage className="hidden">
        <img src={Home} alt="home" />
      </ContainerImage>
    </>
  );
};
