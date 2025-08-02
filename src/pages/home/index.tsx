import React from 'react'

import MainSection from './components/main-section'
import NuContaSection from './components/nu-conta-section'
import CreditCardSection from './components/credit-card-section'
import RewardsSection from './components/rewards-section'
import GenericSection from './components/generic-section'

const Home: React.FC = () => (
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
        desktop: '/src/assets/images/challenge-system-large.jpg',
        mobile: '/src/assets/images/challenge-system-large.jpg',
      }}
    />
    <GenericSection
      link="/"
      linkLabel="Tire dúvidas, compartilhe ideias e faça parte."
      contentSize={650}
      title={['NuCommunity', 'A comunidade oficial do Nubank.']}
      backgroundUrl={{
        desktop: '/src/assets/images/nucommunity-3x.jpg',
        mobile: '/src/assets/images/nucommunity-0.5x.jpg',
      }}
    />
    <GenericSection
      link="/"
      linkLabel="Conheça o Fala, Nubank"
      title="Um blog para você repensar o seu dinheiro."
      contentSize={500}
      backgroundPosition="center top"
      backgroundUrl={{
        desktop: '/src/assets/images/holding-device-smile-3x.jpg',
        mobile: '/src/assets/images/holding-device-smile-0.5x.jpg',
      }}
    />
  </div>
)

export default Home 