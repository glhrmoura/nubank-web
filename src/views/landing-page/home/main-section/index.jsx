import React from 'react';

import {
  MainSectionContainer,
  PictureBackground,
  Article,
  ImageBackground,
  Title,
  PictureCard,
  ImageCard,
  TitleContainer,
  Description,
  ButtonFixed,
} from './styles.js';

export default () => (
  <MainSectionContainer>
    <Article>
      <PictureBackground>
        <source media="(min-width: 1280px)" srcSet={require('../../../../assets/images/woman-bus-3x.jpg')} />
        <source media="(min-width: 1024px)" srcSet={require('../../../../assets/images/woman-bus-2x.jpg')} />
        <source media="(min-width: 768px)" srcSet={require('../../../../assets/images/woman-bus-1x.jpg')} />
        <source media="(min-width: 480px)" srcSet={require('../../../../assets/images/woman-bus-0.75x.jpg')} />
        <source media="(min-width: 0px)" srcSet={require('../../../../assets/images/woman-bus-0.5x.jpg')} />
        <ImageBackground importance="high" srcSet={require('../../../../assets/images/woman-bus-1x.jpg')} alt="Mulher de camiseta listrada pulando a catraca dentro de um ônibus antigo" />
      </PictureBackground>
      <TitleContainer>
        <Title>Ser Nubank é ter uma vida financeira descomplicada.</Title>
        <Description>
          NuConta com rendimento acima da poupança e cartão de crédito sem anuidade.
        </Description>
        <ButtonFixed>Quero ser Nubank</ButtonFixed>
      </TitleContainer>
      <PictureCard>
        <source media="(min-width: 1280px)" srcSet={require('../../../../assets/images/home_products-3x.png')} />
        <source media="(min-width: 1024px)" srcSet={require('../../../../assets/images/home_products-3x.png')} />
        <source media="(min-width: 768px)" srcSet={require('../../../../assets/images/home_products-1x.png')} />
        <source media="(min-width: 480px)" srcSet={require('../../../../assets/images/home_products-0.75x.png')} />
        <source media="(min-width: 0px)" srcSet={require('../../../../assets/images/home_products-0.5x.png')} />
        <ImageCard src={require('../../../../assets/images/home_products-1x.png')} alt="Celular com o aplicativo do Nubank aberto na seção da NuConta e o cartão roxo do Nubank" />
      </PictureCard>
    </Article>
  </MainSectionContainer>
);