import React from 'react';

import MainSection from './main-section';
import NuContaSection from './nu-conta-section';
import CreditCardSection from './credit-card-section';
import RewardsSection from './rewards-section';
import GenericSection from './generic-section';

export default () => (
  <div>
    <MainSection />
    <NuContaSection />
    <CreditCardSection />
    <RewardsSection />
    <GenericSection
      link="/"
      linkLabel="Saiba mais"
      title="Desafiando o sistema para redefinir a relação das pessoas com o dinheiro"
      backgroundUrl={require('../../assets/images/challenge-system-large.jpg')}
    />
    <GenericSection
      link="/"
      linkLabel="Tire dúvidas, compartilhe ideias e faça parte."
      title="NuCommunity A comunidade oficial do Nubank."
      backgroundUrl={require('../../assets/images/nucommunity.jpg')}
    />
  </div>
);