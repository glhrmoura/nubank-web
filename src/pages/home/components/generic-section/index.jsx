import React from 'react';

import {
  Title,
  CustomBorderLink,
  GenericSectionContainer,
  GenericSectionContent,
} from './styles';

export default ({
  title,
  link,
  linkLabel,
  contentSize,
  backgroundUrl,
  backgroundPosition,
}) => (
  <GenericSectionContainer
    backgroundUrl={backgroundUrl}
    backgroundPosition={backgroundPosition}
  >
    <GenericSectionContent contentSize={contentSize}>
      {Array.isArray(title) ? (
        <Title>
          {title.map(line => <div key={line}>{line}</div>)}
        </Title>
      ) : (
        <Title>{title}</Title>
      )}
      <CustomBorderLink to={link}>
        {linkLabel}
      </CustomBorderLink>
    </GenericSectionContent>
  </GenericSectionContainer>
);