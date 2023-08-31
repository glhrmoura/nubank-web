import React from 'react';
import PictureSources from '../../../../components/picture-sources';

import {
  MainSectionContainer,
  PictureBackground,
  MainSectionContent,
  ImageBackground,
  Title,
  PictureCard,
  ImageCard,
  TitleContainer,
  Description,
  ButtonFixed,
} from './styles.js';

export default () => {
  return (
    <MainSectionContainer>
      <MainSectionContent>
        <PictureBackground>
          <PictureSources
            sources={[
              {
                media: '(min-width: 1280px)',
                src: require('../../../../assets/images/woman-jumping-3x.jpg'),
              },
              {
                media: '(min-width: 1024px)',
                src: require('../../../../assets/images/woman-jumping-2x.jpg'),
              },
              {
                media: '(min-width: 768px)',
                src: require('../../../../assets/images/woman-jumping-1x.jpg'),
              },
              {
                media: '(min-width: 480px)',
                src: require('../../../../assets/images/woman-jumping-0.75x.jpg'),
              },
              {
                media: '(min-width: 0px)',
                src: require('../../../../assets/images/woman-jumping-0.5x.jpg'),
              }
            ]}
          />
          <ImageBackground
            importance="high"
            srcSet={require('../../../../assets/images/woman-jumping-1x.jpg')}
            alt="Mulher jovem de macacão jeans pulando uma calçada expressando liberdade."
          />
        </PictureBackground>
        <TitleContainer>
          <Title>Ser Nubank é reinventar sua vida financeira.</Title>
          <Description>
            NuConta com rendimento acima da poupança e cartão de crédito sem anuidade.
          </Description>
        </TitleContainer>
        <PictureCard>
          <PictureSources
            sources={[
              {
                media: '(min-width: 1280px)',
                src: require('../../../../assets/images/home_products-3x.png'),
              },
              {
                media: '(min-width: 768px)',
                src: require('../../../../assets/images/home_products-1x.png'),
              },
              {
                media: '(min-width: 480px)',
                src: require('../../../../assets/images/home_products-0.75x.png'),
              },
              {
                media: '(min-width: 0px)',
                src: require('../../../../assets/images/home_products-0.5x.png'),
              }
            ]}
          />
          <ImageCard
            src={require('../../../../assets/images/home_products-1x.png')}
            alt="Celular com o aplicativo do Nubank aberto na seção da NuConta e o cartão roxo do Nubank"
          />
        </PictureCard>
      </MainSectionContent>
    </MainSectionContainer>
  )
};