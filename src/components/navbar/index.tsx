import React, { useState } from 'react'
import MenuMobile from './components/menu-mobile'

import {
  NubankButton,
} from '@/theme/global-styles'

import {
  NavbarContainer,
  LinksContainer,
  LinkList,
  LinkItem,
  ToggleMenu,
  RightLinks,
} from './styles'

import Logo from '@/components/icons/Logo'
import Bar from '@/components/icons/Bar'
import Enter from '@/components/icons/Enter'

const Navbar: React.FC = () => {
  const [menuVisible, setMenuVisible] = useState<boolean>(false)

  return (
   <>
      <NavbarContainer>
        <Logo />
        <LinksContainer>
          <LinkList>
            <LinkItem to="/">Início</LinkItem>
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
          <NubankButton to="/">Quero ser Nubank</NubankButton>
        </RightLinks>
        <ToggleMenu onClick={() => setMenuVisible(!menuVisible)}>
          <Bar />
        </ToggleMenu>
      </NavbarContainer>
      <MenuMobile visible={menuVisible} />
   </>
  )
}

export default Navbar 