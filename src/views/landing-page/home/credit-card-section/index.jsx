import React from 'react'

import {
  BorderLink,
} from '../../../styles';

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
            <source
              media="(min-width: 1280px)"
              srcSet={require('../../../../assets/images/holding-card-vertical-3x.png')}
            />
            <source
              media="(min-width: 1024px)"
              srcSet={require('../../../../assets/images/holding-card-vertical-2x.png')}
            />
            <source
              media="(min-width: 768px)"
              srcSet={require('../../../../assets/images/holding-card-vertical-1x.png')}
            />
            <source
              media="(min-width: 480px)"
              srcSet={require('../../../../assets/images/holding-card-vertical-0.75x.png')}
            />
            <source
              media="(min-width: 0px)"
              srcSet={require('../../../../assets/images/holding-card-vertical-0.5x.png')}
            />
            <CreditCardImage
              importance="high"
              srcSet={require('../../../../assets/images/holding-card-vertical-1x.png')}
              alt="Uma mão segurando o cartão roxo do Nubank"
            />
        </CreditCardPicture>
      </CreditCardContent>
    </CreditCardContainer>
  )
}
