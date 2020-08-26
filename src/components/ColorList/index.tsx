import React, { useState, useCallback } from 'react';
import { FlatList } from 'react-native';

import {
  Container,
  ColorContainer,
  Color,
  ColorText,
  SelectedContainer,
} from './styles';

const ColorList: React.FC = () => {
  // eslint-disable-next-line
  const [colors, setColor] = useState([
    {
      name: '#c-24 Matte premium',
      hexColor: '#c99210',
      key: '1',
    },
    {
      name: '#c-24 Candy yum yum',
      hexColor: '#fcc135',
      key: '2',
    },
    {
      name: '#c-24 Velvet Teddy',
      hexColor: '#b3714b',
      key: '3',
    },
    {
      name: '#c-24 Studded Kiss',
      hexColor: '#915013',
      key: '4',
    },
    {
      name: '#c-24 Purple like codein',
      hexColor: '#8d0091',
      key: '5',
    },
  ]);

  const [selectedColor, setSelectedColor] = useState(colors[0]);

  const handleSelectColor = useCallback(item => {
    setSelectedColor(item);
  }, []);

  return (
    <Container>
      <SelectedContainer>
        <Color hexColor={selectedColor.hexColor} />
        <ColorText>{selectedColor.name}</ColorText>
      </SelectedContainer>
      <FlatList
        horizontal
        data={colors}
        renderItem={({ item }) => (
          <ColorContainer onPress={() => handleSelectColor(item)}>
            <Color hexColor={item.hexColor} />
            <ColorText>{item.name}</ColorText>
          </ColorContainer>
        )}
      />
    </Container>
  );
};

export default ColorList;
