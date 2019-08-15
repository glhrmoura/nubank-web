import { connect } from 'react-redux';
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

const Navbar = ({ isMobile }) => {
  const [ menuVisible, setMenuVisible ] = useState(false);

  return (
    <NavbarContainer>
      <NubankIcon
        src={require('../../../assets/icons/nubank.svg')}
        alt="Nubank Icon"
      />
      <LinksContainer>
        <LinkList>
          <LinkItem exact to="/">Início</LinkItem>
          <LinkItem to="/1">NuConta</LinkItem>
          <LinkItem to="/2">Cartão de crédito</LinkItem>
          <LinkItem to="/3">Rewards</LinkItem>
          <LinkItem to="/4">Empréstimo</LinkItem>
          <LinkItem to="/5">Sobre nós</LinkItem>
          <LinkItem to="/6">Carreiras</LinkItem>
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
      {isMobile && <MenuMobile className={menuVisible && 'menu-visible'} />}
    </NavbarContainer>
  )
};

const mapStateToProps = state => {
  return {
    isMobile: state.isMobile,
  }
}

export default connect(mapStateToProps, null)(Navbar);