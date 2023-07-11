import React, { useState } from 'react';
import MenuMobile from './menu-mobile';

import {
  NubankButton,
} from '../../styles';

import {
  NavbarContainer,
  NubankIcon,
  LinksContainer,
  LinkList,
  LinkItem,
  ToggleMenu,
  RightLinks,
} from './styles';

const Navbar = props => {
  const [ menuVisible, setMenuVisible ] = useState(false);

  return (
    <NavbarContainer>
      <NubankIcon
        src={require('../../../assets/icons/nubank.svg')}
        alt="Nubank Icon"
      />
      <LinksContainer>
        <LinkList>
          <LinkItem exact to="/nubank-web">Início</LinkItem>
          <LinkItem to="/nubank-web/nu-Conta">NuConta</LinkItem>
          <LinkItem to="/nubank-web/card">Cartão de crédito</LinkItem>
          <LinkItem to="/nubank-web/rewards">Rewards</LinkItem>
          <LinkItem to="/nubank-web/loan">Empréstimo</LinkItem>
          <LinkItem to="/nubank-web/about-us">Sobre nós</LinkItem>
          <LinkItem to="/nubank-web/careers">Carreiras</LinkItem>
        </LinkList>
      </LinksContainer>
      <RightLinks>
        <NubankButton to="/" className="outline">
          Login
        </NubankButton>
        <NubankButton>Quero ser Nubank</NubankButton>
      </RightLinks>
      <ToggleMenu onClick={() => setMenuVisible(!menuVisible)}>
        <img
          src={require('../../../assets/icons/bars.svg')}
          alt="Ícone menu hambúrguer"
        />
      </ToggleMenu>
      <MenuMobile visible={menuVisible} />
    </NavbarContainer>
  )
};

export default Navbar;