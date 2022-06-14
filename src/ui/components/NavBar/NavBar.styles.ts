import styled from 'styled-components/macro';
import { spaces } from '../../tokens';

const Nav = styled.nav`
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

const NavItem = styled.a`
  width: 68px;
  margin-right: ${spaces.medium};
  display: flex;
  flex-direction: row;
  align-items: center;

  &:last-of-type {
    margin-right: 0;
  }
`;

export { Nav, NavItem };
