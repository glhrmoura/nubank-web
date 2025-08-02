import React from 'react'

import CreditCardSection from '@/pages/home/components/credit-card-section'
import GenericSection from '@/pages/home/components/generic-section'
import MainSection from '@/pages/home/components/main-section'
import NuContaSection from '@/pages/home/components/nu-conta-section'
import RewardsSection from '@/pages/home/components/rewards-section'

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
        desktop: '/images/challenge-system-large.jpg',
        mobile: '/images/challenge-system-large.jpg',
      }}
    />
    <GenericSection
      link="/"
      linkLabel="Tire dúvidas, compartilhe ideias e faça parte."
      contentSize={650}
      title={['NuCommunity', 'A comunidade oficial do Nubank.']}
      backgroundUrl={{
        desktop: '/images/nucommunity-3x.jpg',
        mobile: '/images/nucommunity-0.5x.jpg',
      }}
    />
    <GenericSection
      link="/"
      linkLabel="Conheça o Fala, Nubank"
      title="Um blog para você repensar o seu dinheiro."
      contentSize={500}
      backgroundPosition="center top"
      backgroundUrl={{
        desktop: '/images/holding-device-smile-3x.jpg',
        mobile: '/images/holding-device-smile-0.5x.jpg',
      }}
    />
  </div>
)

export default Home 