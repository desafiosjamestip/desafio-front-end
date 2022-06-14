import styled from 'styled-components/macro';
import { rgba } from 'polished';
import { Nav, NavItem } from '../../ui/components';
import { colors, spaces, screens, opacity, zIndex } from '../../ui/tokens';

const MainMenu = styled.header`
  width: 100%;
  height: 75px;
  border-bottom: 1px solid ${colors.primary};
  background-color: ${colors.white};
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: ${zIndex.heaven};
`;

const MainMenuContents = styled.div`
  height: 100%;
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 ${spaces.medium};
`;

const MainMenuButtons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
`;

const Menu = styled.div<{ displayMenu: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;

  @media screen and (max-width: ${screens.sm}) {
    pointer-events: ${({ displayMenu }) => (displayMenu ? 'auto' : 'none')};
    top: ${({ displayMenu }) => (displayMenu ? '75px' : '-400px')};
    z-index: ${zIndex.mountains};
    flex-direction: column;
    background-color: white;
    position: absolute;
    width: 100%;
    left: 0;
    text-align: center;
    height: auto;
    transition: top 0.3s ease;
    padding: 0 0 ${spaces.large};
    border-bottom: 1px solid ${colors.primary};

    ${Nav} {
      flex-direction: column;
      width: 100%;
      height: auto;
      margin: ${spaces.large} 0 ${spaces.large};
    }

    ${NavItem} {
      width: 100%;
      margin: 0;
      flex-direction: column;
      height: 50px;
      justify-content: center;

      &:hover {
        background-color: ${rgba(colors.green_200, opacity[5])};
      }
    }
  }
`;

const BurgerIconButton = styled.button`
  @media screen and (min-width: ${screens.smMin}) {
    display: none;
  }
`;

export { MainMenu, MainMenuContents, MainMenuButtons, Menu, BurgerIconButton };
