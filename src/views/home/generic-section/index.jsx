import React from 'react';

import {
  GenericSectionContainer,
  GenericSectionContent,
  Title,
  CustomBorderLink,
} from './styles';

export default ({ backgroundUrl, title, link, linkLabel }) => (
  <GenericSectionContainer backgroundUrl={backgroundUrl}>
    <GenericSectionContent>
      <Title>
        {title}
      </Title>
      <CustomBorderLink to={link}>
        {linkLabel}
      </CustomBorderLink>
    </GenericSectionContent>
  </GenericSectionContainer>
);