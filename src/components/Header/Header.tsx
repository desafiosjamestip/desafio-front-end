import React, { useCallback, useState } from 'react';
import { NavBar } from '../../ui/components';
import { BurgerIcon } from '../../ui/icons';

import {
  MainMenu,
  MainMenuContents,
  MainMenuButtons,
  Menu,
  BurgerIconButton,
} from './Header.styles';

const Header = () => {
  const [displayMenu, setDisplayMenu] = useState(false);

  const toggleMenu = useCallback(
    () => setDisplayMenu(!displayMenu),
    [displayMenu]
  );
  const closeMenu = useCallback(() => setDisplayMenu(false), []);

  return (
    <MainMenu>
      <MainMenuContents>
        <a href="#"></a>
        <MainMenuButtons>
          <BurgerIconButton onClick={toggleMenu}>
            <BurgerIcon />
          </BurgerIconButton>
          <Menu displayMenu={displayMenu}>
            <NavBar
              items={[
                {
                  title: 'Cadastro',
                  id: '',
                  action: closeMenu,
                },
                {
                  title: 'Produtos',
                  id: 'products',
                  action: closeMenu,
                },
              ]}
            />
          </Menu>
        </MainMenuButtons>
      </MainMenuContents>
    </MainMenu>
  );
};

export { Header };
