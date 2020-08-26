import { ViewProps } from 'react-native';

import styled from 'styled-components/native';

interface ColorProps extends ViewProps {
  hexColor: string;
}

export const Container = styled.View`
  flex-direction: row;
  margin-top: 10px;
`;

export const ColorContainer = styled.TouchableOpacity`
  width: 63px;
  border-radius: 5px;
  justify-content: center;
`;

export const SelectedContainer = styled.View`
  width: 63px;
  border-radius: 5px;
  justify-content: center;
  background: #fff;
`;

export const Color = styled.View<ColorProps>`
  flex-direction: column;
  width: 44px;
  height: 44px;
  border-radius: 5px;
  background: ${props => props.hexColor};
`;

export const ColorText = styled.Text`
  font-size: 12px;
  color: #3d3d3d;
  font-family: 'Roboto-Regular';
`;
