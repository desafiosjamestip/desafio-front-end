import { ContainerImage } from "./styles";
import Enter from "../../assets/Enter.svg";

/*
Função que retora o svg que aparece na page Dashboard (cadastro de produtos)
*/

export const DashboardImage = () => {
  return (
    <>
      <ContainerImage className="hidden">
        <img src={Enter} alt={Enter} />
      </ContainerImage>
    </>
  );
};
