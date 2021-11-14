import { Link } from "react-router-dom";
import { HeaderContainer } from "./style";

function Header() {
  return (
    <HeaderContainer>
      <Link to="/">JamesTip</Link>
      <Link to="/cadastro">Cadastrar produto</Link>
      <Link to="/produtos">Meus produtos</Link>
    </HeaderContainer>
  );
}
export default Header;
