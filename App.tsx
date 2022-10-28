import React from 'react';
import CryptocurrenciesList from './src/components/cryptocurrenciesList';
import {SafeAreaView} from 'react-native';
import {ThemeProvider} from 'styled-components';
import theme from './src/utils/theme/theme';
import {Provider} from 'react-redux';
import store from './src/app/store';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <SafeAreaView>
          <CryptocurrenciesList />
        </SafeAreaView>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
