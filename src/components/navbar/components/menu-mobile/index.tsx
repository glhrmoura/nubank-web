import React from 'react'

import {
  NubankButton,
} from '@/theme/global-styles'

import {
  MenuMobileContainer,
  LinkList,
  LinkItem,
  ButtonContainer
} from './styles'

interface MenuMobileProps {
  visible: boolean
}

const MenuMobile: React.FC<MenuMobileProps> = ({ visible }) => (
  <MenuMobileContainer className={visible ? 'menu-visible' : ''}>
    <LinkList>
      <LinkItem to="/">Início</LinkItem>
      <LinkItem to="/1">NuConta</LinkItem>
      <LinkItem to="/2">Cartão de crédito</LinkItem>
      <LinkItem to="/3">Rewards</LinkItem>
      <LinkItem to="/4">Empréstimo</LinkItem>
      <LinkItem to="/5">Sobre nós</LinkItem>
      <LinkItem to="/6">Carreiras</LinkItem>
    </LinkList>
    <ButtonContainer>
      <NubankButton to="/" className="block">
        Login
      </NubankButton>
    </ButtonContainer>
  </MenuMobileContainer>
)

export default MenuMobile 