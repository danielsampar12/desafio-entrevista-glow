import React, { useState, useCallback } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import ColorList from '../ColorList';

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
  AddButtonContainer,
  AddButton,
  AddButtonText,
  AddedCount,
  AddedCountText,
  PriceText,
  PurchaseButton,
  PurchaseButtonText,
  PurchaseButtonAndIconContainer,
  WrapContainer,
} from './styles';

const Detail: React.FC = () => {
  const [added, setAdded] = useState(1);
  const [price, setPrice] = useState(149.99);

  const handleAddProduct = useCallback(() => {
    setAdded(added + 1);
  }, [added]);

  const handleRemoveProduct = useCallback(() => {
    if (added > 1) {
      setAdded(added - 1);
    }
  }, [added]);

  return (
    <Container>
      <WrapContainer>
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
        <ColorList />

        <AddButtonContainer>
          <AddButton onPress={handleRemoveProduct}>
            <AddButtonText> - </AddButtonText>
          </AddButton>
          <AddedCount>
            <AddedCountText>{added}</AddedCountText>
          </AddedCount>
          <AddButton onPress={handleAddProduct}>
            <AddButtonText> + </AddButtonText>
          </AddButton>
        </AddButtonContainer>

        <PriceText>
          R$
          {price * added}
        </PriceText>
      </WrapContainer>

      <PurchaseButton>
        <PurchaseButtonAndIconContainer>
          <PurchaseButtonText>Bolsa</PurchaseButtonText>
          <Icon name="redo" size={20} color="#FFF" />
        </PurchaseButtonAndIconContainer>
      </PurchaseButton>
    </Container>
  );
};

export default Detail;
