import { StyledHeader, Logo, NavBar } from "./style";
import LogoImage from "../../assets/images/logo1.svg";
import { useNavigate } from "react-router-dom";
import { FaBookOpen, FaBoxOpen } from "react-icons/fa";
import { HiArrowNarrowRight } from "react-icons/hi";
export const Header = () => {
  const navigate = useNavigate();
  return (
    <StyledHeader>
      <Logo src={LogoImage} />
      <NavBar>
        <button onClick={() => navigate("/products")}>
          <p>Meus Produtos</p>
          <FaBookOpen />
        </button>
        <button onClick={() => navigate("/registerProducts")}>
          <p>Criar Produto</p>
          <FaBoxOpen />
        </button>
        <button id="come-back-services" onClick={() => navigate("/")}>
          <HiArrowNarrowRight />
        </button>
      </NavBar>
    </StyledHeader>
  );
};
