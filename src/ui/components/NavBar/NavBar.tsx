import React from 'react';
import { Typography } from '../Typography';
import { Nav, NavItem } from './NavBar.styles';

type MenuProps = {
  items?: Array<{
    title: string;
    id: string;
    action?: () => void;
  }>;
};

const NavBar = ({ items = [] }: MenuProps) => {
  return (
    <Nav>
      {items?.map((item) => {
        return (
          <NavItem
            key={item.id}
            href={`/${item.id}`}
            onClick={() => {
              if (item.action) item.action();
            }}
          >
            <Typography variant="button" cursor="pointer">
              {item.title}
            </Typography>
          </NavItem>
        );
      })}
    </Nav>
  );
};

export { NavBar };
