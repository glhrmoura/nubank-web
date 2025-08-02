import React from 'react'

import PictureSources from '@/components/picture-sources'
import {
  BorderLink,
} from '@/theme/global-styles'

import {
  CreditCardContainer,
  CreditCardContent,
  CreditCardImage,
  CreditCardPicture,
  Description,
  Title,
  TitleContainer,
} from './styles'

const CreditCardSection: React.FC = () => {
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
                src: '/images/holding-card-vertical-3x.png',
              },
              {
                media: '(min-width: 1024px)',
                src: '/images/holding-card-vertical-2x.png',
              },
              {
                media: '(min-width: 768px)',
                src: '/images/holding-card-vertical-1x.png',
              },
              {
                media: '(min-width: 480px)',
                src: '/images/holding-card-vertical-0.75x.png',
              },
              {
                media: '(min-width: 0px)',
                src: '/images/holding-card-vertical-0.5x.png',
              }
              ]}
            />
            <CreditCardImage
              srcSet="/images/holding-card-vertical-1x.png"
              alt="Uma mão segurando o cartão roxo do Nubank"
            />
        </CreditCardPicture>
      </CreditCardContent>
    </CreditCardContainer>
  )
}

export default CreditCardSection 