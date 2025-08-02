import React from 'react'
import PictureSources from '@/components/picture-sources'

import {
  BorderLink,
} from '@/theme/global-styles'

import {
  NuContaContainer,
  NuContaContent,
  NuContaPicture,
  NuContaImage,
  TitleContainer,
  Title,
} from './styles'

const NuContaSection: React.FC = () => (
  <NuContaContainer>
    <NuContaContent>
      <TitleContainer>
        <Title>
          <div className="highlight">
            NuConta
          </div>
          Rende mais que a poupança e você não paga nada por isso.
        </Title>
        <BorderLink to="/">
          Débito: entre na lista de espera
        </BorderLink>
      </TitleContainer>
      <NuContaPicture>
        <PictureSources
          sources={[
                          {
                media: '(min-width: 1280px)',
                src: '/images/nuconta-inclined-device-3x.png',
              },
              {
                media: '(min-width: 1024px)',
                src: '/images/nuconta-inclined-device-2x.png',
              },
              {
                media: '(min-width: 768px)',
                src: '/images/nuconta-inclined-device-1x.png',
              },
              {
                media: '(min-width: 480px)',
                src: '/images/nuconta-inclined-device-0.75x.png',
              },
              {
                media: '(min-width: 0px)',
                src: '/images/nuconta-inclined-device-0.5x.png',
              }
          ]}
        />
        <NuContaImage
          src="/images/nuconta-inclined-device-1x.png"
          alt="Celular inclinado com o aplicativo do Nubank aberto na seção da NuConta"
        />
      </NuContaPicture>
    </NuContaContent>
  </NuContaContainer>
)

export default NuContaSection 