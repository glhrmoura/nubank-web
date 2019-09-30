import styled from 'styled-components';

import {
  BorderLink,
} from '../../styles';

export const CustomBorderLink = styled(BorderLink)`
  color: #fff;
  background-image:
    linear-gradient(120deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%),
    linear-gradient(120deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.3) 100%);
`;

export const GenericSectionContainer = styled.section`
  height: calc(100vh - 80px);
  background-image: ${props => `url(${props.backgroundUrl})`};
  background-size: cover;
  background-position: center center;
  height: calc(100vh - (64px + 60px));

  @media (min-width: 767px) {
    height: 520px;
  }

  @media (min-width: 1024px) {
    height: calc(100vh - 80px);
  }
`;

export const GenericSectionContent = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  padding: 64px 32px;
  box-sizing: border-box;
  
  @media (min-width: 768px) {
    padding: 64px;
  }
`;

export const Title = styled.h2`
  color: #fff;
  font-weight: 400;
  margin: 0px;
  font-size: 32px;
  margin-bottom: 32px;
  
  @media (min-width: 768px) {
    max-width: 480px;
    font-size: 48px;
  }
`;