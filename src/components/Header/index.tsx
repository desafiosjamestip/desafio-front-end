import LogoWhite from "../../assets/img/logo-white.svg";
import { Container } from "./style";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <Container>
      <img
        src={LogoWhite}
        alt="Uma logotipo da empresa Jamestip na cor branca com a escrita tip em verde"
      />
      <div className="title">
        {location.pathname === "/register" ? (
          <h1>Cadastro de produtos</h1>
        ) : (
          <h1>Listagem de produtos</h1>
        )}
      </div>
    </Container>
  );
};

export default Header;
