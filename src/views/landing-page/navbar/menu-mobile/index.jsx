import React from 'react';

import {
  NubankButton,
} from '../../../styles';

import {
  MenuMobileContainer,
  LinkList,
  LinkItem,
  ButtonContainer
} from './styles';

export default props => (
  <MenuMobileContainer {...props}>
    <LinkList>
      <LinkItem exact to="/">Início</LinkItem>
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
);