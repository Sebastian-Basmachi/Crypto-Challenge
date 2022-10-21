import React from 'react';
import CryptocurrenciesList from './src/components/cryptocurrenciesList';
import {SafeAreaView} from 'react-native';
import {ThemeProvider} from 'styled-components';
import theme from './src/utils/theme/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <CryptocurrenciesList />
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;
