import styled from 'styled-components/native';

export const Container = styled.View`
  background: #fff9fe;
  width: 100%;
  height: 500px;
  border-radius: 30px;
  box-shadow: 0px -2px 4px rgba(0, 0, 0, 0.15);
  elevation: 5;
`;

// my bad viajei mas so consegui resolver assim
export const WrapContainer = styled.View`
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 10px;
`;

export const DescriptionContainer = styled.View`
  margin-top: 32px;
  flex-direction: row;
`;

export const DescriptionText = styled.Text`
  width: 228px;
  font-size: 24px;
  color: #1d1d1d;
  font-family: 'Roboto-Regular';
`;

export const IconsContainer = styled.View`
  justify-content: space-around;
  align-items: flex-end;
`;

export const StarsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: 60px;
`;

export const StartsText = styled.Text`
  font-size: 18px;
  color: #ffe34f;
  font-family: 'Roboto-Regular';
`;

export const StarsVotesText = styled.Text`
  font-size: 11px;
  font-family: 'Roboto-Regular';
  color: #3d3d3d;
  margin-left: 5px;
`;

export const InfoContainer = styled.View`
  margin-top: 10px;
  flex-direction: row;
  justify-content: flex-end;
  align-self: flex-end;
`;

export const InfoText = styled.Text`
  font-size: 18px;
  color: #545454;
  font-family: 'Roboto-Bold';
`;

export const AddButtonContainer = styled.View`
  background: #fff;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 10px;
  width: 98px;
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
  elevation: 5;
`;

export const AddButton = styled.TouchableOpacity`
  background: #fff;
  border-radius: 5px;

  justify-content: center;
  align-items: center;
`;

export const AddButtonText = styled.Text`
  font-size: 24px;
  color: #545454;
  font-family: 'Roboto-Regular';
`;

export const AddedCount = styled.View`
  background: #fff;
`;

export const AddedCountText = styled.Text`
  font-size: 24px;
  color: #545454;
  font-family: 'Roboto-Regular';
`;

export const PriceText = styled.Text`
  margin-top: 10px;
  font-size: 24px;
  color: #1d1d1d;
  font-family: 'Roboto-Regular';
`;

export const PurchaseButton = styled.TouchableOpacity`
  width: 100%;
  max-width: 337px;
  height: 46px;
  margin-top: 20px;
  background: #72303d;
  border-radius: 5px;
  align-self: center;
`;

export const PurchaseButtonText = styled.Text`
  margin-top: 10px;
  margin-left: 20px;
  margin-right: 20px;
  font-size: 18px;
  color: #ffff;
  font-family: 'Roboto-Regular';
`;

export const PurchaseButtonAndIconContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;
