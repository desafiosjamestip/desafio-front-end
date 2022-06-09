import Header from "../../components/Header";
import Styled from "./styles";
import notFound from "../../assets/404.svg";
import Button from "../../components/Button";
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate()
  return (
    <>
      <Header showButton fullWidth>
        <Styled.Container>
          <Styled.Image src={notFound} alt="Não encontramos a página que você procura" />
          <Styled.Paragraph>
            Não encontramos a página que você procura
          </Styled.Paragraph>
          <Button id="add-product" title="Voltar para o inicio" onClick={() => navigate("/")}>
            <FiArrowLeft strokeWidth={3} />
            Voltar para o inicio
          </Button>
        </Styled.Container>
      </Header>
    </>
  );
}
