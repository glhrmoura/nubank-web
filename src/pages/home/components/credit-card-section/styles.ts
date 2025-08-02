import styled from 'styled-components';

export const CreditCardContainer = styled.section`
  display: flex;
  justify-content: center;
`;

export const CreditCardContent = styled.article`
  display: flex;
  width: 100%;
  max-width: 1328px;

  @media (max-width: 767px) {
    flex-direction: column;
  }

  @media (min-width: 1024px) {
    min-height: calc(100vh - 80px);
    height: 100%;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  padding: 56px 32px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media (min-width: 768px) {
    width: 60%;
    padding: 56px 0px 56px 56px;
  }
`;

export const Title = styled.h1`
  font-size: 32px;
  color: #8A05BE;
  margin: 0px;
  font-weight: 400;
  line-height: 40px;
  
  @media (min-width: 768px) {
    max-width: 30rem;
    line-height: 54px;
    font-size: 48px;
  }
`;

export const Description = styled.p`
  font-size: 32px;
  color: #767676;
  margin: 0px;
  font-weight: 400;
  line-height: 40px;
  margin-bottom: 32px;
  
  @media (min-width: 768px) {
    max-width: 30rem;
    line-height: 54px;
    font-size: 48px;
  }
`;

export const CreditCardPicture = styled.picture`
  display: flex;
  justify-content: center;
  
  @media (min-width: 768px) {
    align-items: flex-end;
    width: 40%;
  }
`;

export const CreditCardImage = styled.img`
  object-fit: contain;

  @media (min-width: 1024px) {
    max-height: 80vh;
    width: 100%;
  }

  @media (max-width: 1024px) {
    height: 450px;
  }
`;
