import React from 'react';
import {CryptocurrenciesList} from './src/components/CryptocurrenciesList';
import {SafeAreaView} from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <CryptocurrenciesList />
    </SafeAreaView>
  );
};

export default App;
