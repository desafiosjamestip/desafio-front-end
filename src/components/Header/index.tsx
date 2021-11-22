

import { useState } from 'react';
import { Container, Content, LinkRoute } from './styles';
import Modal from 'react-modal'
import Logo from '../../assets/devshop.svg'
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi'
interface HeaderProps {
  onOpenNewProduct: () => void;
}
export function Header({ onOpenNewProduct }: HeaderProps) {

  return (
    <Container>
      <Content>
        <img src={Logo} alt="dt Money" />
        <button type="button" onClick={onOpenNewProduct}>
          New product
        </button>
        <LinkRoute to='/shop'>
          <FiLogIn size={16} color="#E02041" />
          Shopp
        </LinkRoute >

      </Content>
    </Container>
  )
}