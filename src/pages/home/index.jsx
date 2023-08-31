import React from 'react';

import MainSection from './components/main-section';
import NuContaSection from './components/nu-conta-section';
import CreditCardSection from './components/credit-card-section';
import RewardsSection from './components/rewards-section';
import GenericSection from './components/generic-section';

export default () => (
  <div>
    <MainSection />
    <NuContaSection />
    <CreditCardSection />
    <RewardsSection />
    <GenericSection
      link="/"
      linkLabel="É nisso que acreditamos."
      title="Reinventando a relação das pessoas com o dinheiro"
      backgroundUrl={{
        desktop: require('../../assets/images/challenge-system-large.jpg'),
        mobile: require('../../assets/images/challenge-system-large.jpg'),
      }}
    />
    <GenericSection
      link="/"
      linkLabel="Tire dúvidas, compartilhe ideias e faça parte."
      contentSize={650}
      title={['NuCommunity', 'A comunidade oficial do Nubank.']}
      backgroundUrl={{
        desktop: require('../../assets/images/nucommunity-3x.jpg'),
        mobile: require('../../assets/images/nucommunity-0.5x.jpg'),
      }}
    />
    <GenericSection
      link="/"
      linkLabel="Conheça o Fala, Nubank"
      title="Um blog para você repensar o seu dinheiro."
      contentSize={500}
      backgroundPosition="center top"
      backgroundUrl={{
        desktop: require('../../assets/images/holding-device-smile-3x.jpg'),
        mobile: require('../../assets/images/holding-device-smile-0.5x.jpg'),
      }}
    />
  </div>
);