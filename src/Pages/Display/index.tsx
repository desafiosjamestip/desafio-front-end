import image from "../../Assets/image.png";
import Header from "../../Components/Header";
import { Div, P } from "./style";
function Display() {
  return (
    <>
      <Header />
      <Div>
        <P> Cadastre novos produtos </P>
        <img src={image} width="45%" height="40%" />
      </Div>
    </>
  );
}

export default Display;
