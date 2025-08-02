import styled from 'styled-components';

export const MainSectionContainer = styled.section`
  display: flex;
  justify-content: center;
`;

export const MainSectionContent = styled.article`
  display: grid;
  grid-template-columns: 56px repeat(14, 1fr) 56px;
  grid-template-rows: 56px 134px auto 56px 56px;
  max-width: 1328px;
  min-height: calc(100vh - 80px);
  
  @media (max-width: 767px) {
    width: 100%;
    grid-template-columns: 32px repeat(10, 1fr) 32px;
    grid-template-rows: 56px repeat(2, 40vh) auto 56px;
  }
`;

export const PictureBackground = styled.picture`
  width: 100%;
  grid-area: 2 / 2 / 4 / 16;
  z-index: -1;

  @media (max-width: 767px) {
    grid-area: 1 / 1 / 4 / 13;
  }
`;

export const ImageBackground = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const PictureCard = styled.picture`
  display: flex;
  align-items: flex-end;
  width: 100%;
  grid-area: 3 / 10 / 5 / 15;

  @media (max-width: 767px) {
    grid-area: 3 / 2 / 5 / 12;
    align-items: flex-start;
  }
`;

export const ImageCard = styled.img`
  width: 100%;
`;

export const TitleContainer = styled.div`
  grid-column: 3 / 9;
  grid-row: 3 / 4;
  color: #fff;
  padding-top: 30px;
  -webkit-box-pack: center;
  z-index: 1;
  
  @media (max-width: 767px) {
    grid-column: 2 / 12;
    grid-row: 2 / 3;
    padding: 0px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
`;

export const Title = styled.h2`
  font-size: 48px;
  color: #fff;
  font-weight: 100;
  margin: 0px 0px 16px 0px;

  @media (max-width: 767px) {
    font-size: 32px;
  }
`;

export const Description = styled.p`
  font-size: 18px;
  font-weight: 400;
  margin: 0px 0px 32px 0px;
  line-height: 27px;
  max-width: 300px;
`;

