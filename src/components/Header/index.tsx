import LogoWhite from "../../assets/img/logo-white.svg";
import { Container } from "./style";

const Header = () => {
  return (
    <Container>
      <img
        src={LogoWhite}
        alt="Uma logotipo da empresa Jamestip na cor branca com a escrita tip em verde"
      />
      <div className="title">
        <h1>Cadastro de produtos</h1>
      </div>
    </Container>
  );
};

export default Header;
