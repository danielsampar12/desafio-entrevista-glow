import React from 'react';

import image from '../../assets/image.png';

import { Container, RectHeader, Image } from './styles';

import Detail from '../../components/Detail';

const ProductPage: React.FC = () => {
  return (
    <Container>
      <RectHeader />
      <Image source={image} />
      <Detail />
    </Container>
  );
};

export default ProductPage;
