import React, { useState } from 'react';
import MenuMobile from './components/menu-mobile';

import {
  NubankButton,
} from '../../theme/global-styles';

import {
  NavbarContainer,
  LinksContainer,
  LinkList,
  LinkItem,
  ToggleMenu,
  RightLinks,
} from './styles';

import Logo from '../icons/Logo'
import Bar from '../icons/Bar'
import Enter from '../icons/Enter'

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
   <>
      <NavbarContainer>
        <Logo />
        <LinksContainer>
          <LinkList>
            <LinkItem exact to="/">Início</LinkItem>
            <LinkItem to="/nu-Conta">NuConta</LinkItem>
            <LinkItem to="/card">Cartão de crédito</LinkItem>
            <LinkItem to="/rewards">Rewards</LinkItem>
            <LinkItem to="/loan">Empréstimo</LinkItem>
            <LinkItem to="/about-us">Sobre nós</LinkItem>
            <LinkItem to="/careers">Carreiras</LinkItem>
          </LinkList>
        </LinksContainer>
        <RightLinks>
          <NubankButton to="/" className="outline">
            Login
            <Enter />
          </NubankButton>
          <NubankButton>Quero ser Nubank</NubankButton>
        </RightLinks>
        <ToggleMenu onClick={() => setMenuVisible(!menuVisible)}>
          <Bar />
        </ToggleMenu>
      </NavbarContainer>
      <MenuMobile visible={menuVisible} />
   </>
  )
};

export default Navbar;