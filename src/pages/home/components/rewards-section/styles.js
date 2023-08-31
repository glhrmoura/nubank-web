import styled from 'styled-components';

import {
  BorderLink,
} from '../../../../theme/global-styles';

export const RewardsBorderLink = styled(BorderLink)`
  color: #fff;
  background-image:
    linear-gradient(120deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%),
    linear-gradient(120deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.3) 100%);
`;

export const RewardsContainer = styled.section`
  display: flex;
  justify-content: center;
  background-color: #530082;
`;

export const RewardsContent = styled.article`
  display: flex;
  flex-direction: column;
  max-width: 1328px;
  width: 100%;
  padding: 0.1px;

  @media (min-width: 767px) {
    flex-direction: row;
  }

  @media (min-width: 1024px) {
    min-height: calc(100vh - 80px);
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 56px 32px 56px 32px;
  
  @media (min-width: 767px) {
    width: 60%;
    padding: 56px 0px 56px 56px;
  }
`;

export const Title = styled.h2`
  font-size: 32px;
  margin: 0px;
  color: #fff;
  font-weight: 400;
  line-height: 40px;
  
  @media (min-width: 767px) {
    line-height: 54px;
    max-width: 30rem;
    font-size: 48px;
  }
`;

export const Description = styled.p`
  font-size: 32px;
  margin: 0px;
  color: #CA8EE2;
  font-weight: 400;
  line-height: 40px;
  margin-bottom: 32px;
  
  @media (min-width: 767px) {
    line-height: 54px;
    max-width: 30rem;
    font-size: 48px;
  }
`;

export const RewardsPicture = styled.picture`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 16px;
  box-sizing: border-box;
  flex-shrink: 0;
  
  @media (min-width: 767px) {
    width: 40%;
    padding: 56px;
  }
`;

export const RewardsImage = styled.img`
  max-height: 100vh;
  max-width: 100%;
`;