import styled from 'styled-components';

export const NuContaContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: .1px;
  min-height: calc(100vh - 80px);
  background-color: #F5F5F5;
`;

export const NuContaContent = styled.div`
  display: grid;
  grid-template-columns: 64px repeat(10, 1fr) 64px;
  grid-template-rows: 64px 1fr 64px;
  width: 100%;
  max-width: 1328px;
  justify-content: center;
  align-items: center;

  @media (max-width: 767px) {
    grid-template-columns: 32px repeat(10, 1fr) 32px;
    grid-template-rows: 64px auto 64px auto 64px;
  }
`;

export const TitleContainer = styled.div`
  grid-area: 2 / 2 / 3 / 7;

  @media (max-width: 767px) {
    grid-area: 2 / 2 / 3 / 12;
  }
`;

export const Title = styled.h2`
  font-size: 48px;
  font-weight: 400;
  margin: 0px 0px 32px 0px;
  color: #767676;
  line-height: 54px;

  .highlight {
    color: #8A05BE;
  }

  @media (max-width: 767px) {
    font-size: 32px;
    line-height: 40px;
  }
`;

export const NuContaPicture = styled.picture`
  grid-area: 2 / 6 / 3 / 12;
  display: flex;
  justify-content: center;

  @media (max-width: 767px) {
    grid-area: 4 / 1 / 6 / 13;
  }
`;

export const NuContaImage = styled.img`
  width: 100%;
  height: 100%;
  
  @media (min-width: 768px) {
    max-height: 580.25px;
    max-width: 659px;
    object-fit: scale-down;
  }
`;