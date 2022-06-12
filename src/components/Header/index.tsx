import { HTMLAttributes, ReactNode } from "react";
import { FiPlus } from "react-icons/fi";
import Button from "../Button";
import Styled from "./styles";

import logo from "../../assets/jt_logo.png";
import { useNavigate } from "react-router-dom";

interface HeaderProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  showButton?: boolean;
  fullWidth?: boolean;
}

const Header: React.FC<HeaderProps> = ({
  showButton = false,
  fullWidth = false,
  children,
  ...rest
}) => {
  const navigate = useNavigate();

  return (
    <>
      <Styled.Header {...rest}>
        <Styled.Container showButton={showButton}>
          {showButton && <div></div>}
          <Styled.Image src={logo} alt="" />
          {showButton && (
            <Button
              id="novo-produto"
              onClick={() => navigate("/prod/create")}
              aria-label="Novo Produto"
              title="Novo Produto"
            >
              <FiPlus strokeWidth={3} />
              Novo Produto
            </Button>
          )}
        </Styled.Container>
      </Styled.Header>
      <Styled.MainContainer>
        <Styled.Main fullWidth={fullWidth}>{children}</Styled.Main>
        <Styled.Paragraph>Dev with ❤️ by Filipe Batista</Styled.Paragraph>
      </Styled.MainContainer>
    </>
  );
};

export default Header;
