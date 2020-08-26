import React from 'react';
import { StatusBar } from 'react-native';
// import { Container } from './styles';

import ProductPage from './pages/ProductPage';

const App: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#F4F4F4" />
      <ProductPage />
    </>
  );
};

export default App;
