import React from 'react'
import PictureSources from '../../components/picture-sources';

import {
  BorderLink,
} from '../../styles';

import {
  CreditCardContainer,
  CreditCardContent,
  TitleContainer,
  Title,
  Description,
  CreditCardPicture,
  CreditCardImage,
} from './styles';

export default () => {
  return (
    <CreditCardContainer>
      <CreditCardContent>
        <TitleContainer>
          <Title>
            Cartão de crédito
          </Title>
          <Description>
            Moderno, simples e gratuito. Tudo para deixar o controle nas suas mãos.
          </Description>
          <BorderLink to="/">
            Saiba Mais
          </BorderLink>
        </TitleContainer>
          <CreditCardPicture>
            <PictureSources
              sources={[
                {
                  media: '(min-width: 1280px)',
                  src: require('../../../assets/images/holding-card-vertical-3x.png'),
                },
                {
                  media: '(min-width: 1024px)',
                  src: require('../../../assets/images/holding-card-vertical-2x.png'),
                },
                {
                  media: '(min-width: 768px)',
                  src: require('../../../assets/images/holding-card-vertical-1x.png'),
                },
                {
                  media: '(min-width: 480px)',
                  src: require('../../../assets/images/holding-card-vertical-0.75x.png'),
                },
                {
                  media: '(min-width: 0px)',
                  src: require('../../../assets/images/holding-card-vertical-0.5x.png'),
                }
              ]}
            />
            <CreditCardImage
              importance="high"
              srcSet={require('../../../assets/images/holding-card-vertical-1x.png')}
              alt="Uma mão segurando o cartão roxo do Nubank"
            />
        </CreditCardPicture>
      </CreditCardContent>
    </CreditCardContainer>
  )
}
