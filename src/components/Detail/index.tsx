import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  DescriptionContainer,
  DescriptionText,
  StarsContainer,
  StartsText,
  StarsVotesText,
  InfoContainer,
  InfoText,
  IconsContainer,
} from './styles';

const Detail: React.FC = () => {
  return (
    <Container>
      <DescriptionContainer>
        <DescriptionText>
          BATOM LÍQUIDO DIOR ROUGE ULTRA CARE LIQUID
        </DescriptionText>
        <IconsContainer>
          <StarsContainer>
            <Icon name="star" size={20} color="#FFE34F" />
            <StartsText>4,5</StartsText>
            <StarsVotesText>(55)</StarsVotesText>
          </StarsContainer>
          <InfoContainer>
            <Icon name="info" size={30} color="#545454" />
            <InfoText>info</InfoText>
          </InfoContainer>
        </IconsContainer>
      </DescriptionContainer>
    </Container>
  );
};

export default Detail;
