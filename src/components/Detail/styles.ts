import styled from 'styled-components/native';

export const Container = styled.View`
  background: #fff9fe;
  width: 100%;
  height: 347px;
  border-radius: 30px;
  box-shadow: 0px -2px 4px rgba(0, 0, 0, 0.15);
  elevation: 5;
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
  align-items: flex-end;
`;

export const StarsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: 80px;
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
  flex-direction: row;
  justify-content: flex-end;
  align-self: flex-end;
`;

export const InfoText = styled.Text`
  font-size: 18px;
  color: #545454;
  font-family: 'Roboto-Regular';
`;
