import styled from 'styled-components';

import {
  BorderLink,
} from '@/theme/global-styles';

export const CustomBorderLink = styled(BorderLink)`
  color: #fff;
  background-image:
    linear-gradient(120deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%),
    linear-gradient(120deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.3) 100%);
`;

interface GenericSectionContainerProps {
  backgroundUrl: {
    desktop: string
    mobile: string
  }
  backgroundPosition?: string
}

interface GenericSectionContentProps {
  contentSize?: number
}

export const GenericSectionContainer = styled.section.withConfig({
  shouldForwardProp: (prop) => !['backgroundUrl', 'backgroundPosition'].includes(prop),
})<GenericSectionContainerProps>`
  height: calc(100vh - 80px);
  background-image: ${props => `url(${props.backgroundUrl.mobile})`};
  background-size: cover;
  background-position: ${({ backgroundPosition }) => backgroundPosition || 'center center'};
  height: calc(100vh - (56px + 60px));

  @media (min-width: 767px) {
    height: 520px;
    background-image: ${props => `url(${props.backgroundUrl.desktop})`};
  }

  @media (min-width: 1024px) {
    height: calc(100vh - 80px);
  }
`;

export const GenericSectionContent = styled.article.withConfig({
  shouldForwardProp: (prop) => !['contentSize'].includes(prop),
})<GenericSectionContentProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  padding: 56px 32px;
  box-sizing: border-box;
  
  @media (min-width: 768px) {
    width: ${({ contentSize }) => contentSize ? `${contentSize}px` : '650px'};
    padding: 56px;
  }
`;

export const Title = styled.h2`
  color: #fff;
  font-weight: 400;
  margin: 0px;
  font-size: 32px;
  margin-bottom: 32px;
  
  @media (min-width: 768px) {
    font-size: 48px;
  }
`;