import React from 'react'

import PictureSources from '@/components/picture-sources'

import {
  Description,
  RewardsBorderLink,
  RewardsContainer,
  RewardsContent,
  RewardsImage,
  RewardsPicture,
  Title,
  TitleContainer,
} from './styles'

const RewardsSection: React.FC = () => (
  <RewardsContainer>
    <RewardsContent>
      <TitleContainer>
        <Title>
          Rewards
        </Title>
        <Description>
          Um programa de pontos justo e com recompensas que você vai querer.
        </Description>
        <RewardsBorderLink to="/">
          Saiba mais
        </RewardsBorderLink>
      </TitleContainer>
      <RewardsPicture>
        <PictureSources
          sources={[
                          {
                media: '(min-width: 1280px)',
                src: '/images/rewards-home-card-3x.png',
              },
              {
                media: '(min-width: 1024px)',
                src: '/images/rewards-home-card-2x.png',
              },
              {
                media: '(min-width: 768px)',
                src: '/images/rewards-home-card-1x.png',
              },
              {
                media: '(min-width: 480px)',
                src: '/images/rewards-home-card-0.75x.png',
              },
              {
                media: '(min-width: 0px)',
                src: '/images/rewards-home-card-0.5x.png',
              }
          ]}
        />
        <RewardsImage
          src="/images/rewards-home-card-1x.png"
          alt="Celular com o aplicativo do Nubank aberto na seção de Rewards e o cartão roxo do Nubank"
        />
      </RewardsPicture>
    </RewardsContent>
  </RewardsContainer>
)

export default RewardsSection 