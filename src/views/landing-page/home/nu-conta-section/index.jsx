import React from 'react';

import {
  BorderLink,
} from '../../../styles';

import {
  NuContaContainer,
  NuContaContent,
  NuContaPicture,
  NuContaImage,
  TitleContent,
  Title,
} from './styles';

export default () => (
  <NuContaContainer>
    <NuContaContent>
      <TitleContent>
        <Title>
          <span className="highlight">NuConta</span><br/>
          Rende mais que a poupança e você não paga nada por isso.
        </Title>
        <BorderLink to="/">
          Débito: entre na lista de espera
        </BorderLink>
      </TitleContent>
      <NuContaPicture>
        <source media="(min-width: 1280px)" srcSet={require('../../../../assets/images/nuconta-inclined-device-3x.png')} />
        <source media="(min-width: 1024px)" srcSet={require('../../../../assets/images/nuconta-inclined-device-2x.png')} />
        <source media="(min-width: 768px)" srcSet={require('../../../../assets/images/nuconta-inclined-device-1x.png')} />
        <source media="(min-width: 480px)" srcSet={require('../../../../assets/images/nuconta-inclined-device-0.75x.png')} />
        <source media="(min-width: 0px)" srcSet={require('../../../../assets/images/nuconta-inclined-device-0.5x.png')} />
        <NuContaImage src={require('../../../../assets/images/nuconta-inclined-device-1x.png')} alt="Celular inclinado com o aplicativo do Nubank aberto na seção da NuConta" />
      </NuContaPicture>
    </NuContaContent>
  </NuContaContainer>
);