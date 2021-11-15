import { useHistory } from "react-router";
import { HeaderContainer, MenuMobile, MenuDesk } from "./styles";
import { FiAlignJustify, FiX } from "react-icons/fi";
import { useState } from "react";

/*
Função que retorna o Header das pages Dashboard e storeBD, com 2 varioações: Desktop e Mobile
*/

export const Header = () => {
  const history = useHistory();

  /*
  O state abaixo (menuDrop) faz o controle da abertura e fechamento do menu mobile
  */
  const [menuDrop, setMenuDrop] = useState(false);

  const toSend = (path: string) => {
    return history.push(path);
  };

  /*
  OpenMobile - abre o menu mobile
  */
  const OpenMobile = () => {
    setMenuDrop(true);
  };
  /*
  CloseMobile - fecha o menu mobile
  */
  const CloseMobile = () => {
    setMenuDrop(false);
  };

  const Exit = () => {
    localStorage.clear();
    history.push("/");
  };

  return (
    <>
      <HeaderContainer>
        <h1>Logistc Tech</h1>
        {menuDrop ? (
          <FiX onClick={CloseMobile} />
        ) : (
          <FiAlignJustify onClick={OpenMobile} />
        )}

        {menuDrop ? (
          <MenuMobile>
            <li>
              <button onClick={() => toSend("/dashboard")}> Cadastro</button>
            </li>
            <li>
              <button onClick={() => toSend("/storebd")}> Produtos</button>
            </li>
            <li>
              <button onClick={Exit}>Sair</button>
            </li>
          </MenuMobile>
        ) : (
          <></>
        )}

        <MenuDesk>
          <ul>
            <li>
              <button onClick={() => toSend("/dashboard")}> Cadastro</button>
            </li>
            <li>
              <button onClick={() => toSend("/storebd")}> Produtos</button>
            </li>
          </ul>
        </MenuDesk>
      </HeaderContainer>
    </>
  );
};
