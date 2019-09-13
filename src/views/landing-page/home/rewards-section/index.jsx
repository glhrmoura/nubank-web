import React from 'react';

import {
  RewardsContainer,
  RewardsContent,
  TitleContainer,
  Title,
  RewardsImage,
  Description,
  RewardsBorderLink,
  RewardsPicture,
} from './styles';

export default () => (
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
        <source
          media="(min-width: 1280px)"
          srcSet={require('../../../../assets/images/rewards-home-card-3x.png')}
        />
        <source
          media="(min-width: 1024px)"
          srcSet={require('../../../../assets/images/rewards-home-card-2x.png')}
        />
        <source
          media="(min-width: 768px)"
          srcSet={require('../../../../assets/images/rewards-home-card-1x.png')}
        />
        <source
          media="(min-width: 480px)"
          srcSet={require('../../../../assets/images/rewards-home-card-0.75x.png')}
        />
        <source
          media="(min-width: 0px)"
          srcSet={require('../../../../assets/images/rewards-home-card-0.5x.png')}
        />
        <RewardsImage
          src={require('../../../../assets/images/rewards-home-card-1x.png')}
          alt="Celular com o aplicativo do Nubank aberto na seção de Rewards e o cartão roxo do Nubank"
        />
      </RewardsPicture>
    </RewardsContent>
  </RewardsContainer>
);