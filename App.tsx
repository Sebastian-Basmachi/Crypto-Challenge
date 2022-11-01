import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {ThemeProvider} from 'styled-components';
import theme from './src/utils/theme/theme';
import {Provider} from 'react-redux';
import store from './src/app/store';
import {AddCryptocurrenciesScreen, InitialScreen} from './src/screens';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="InitialScreen"
            screenOptions={{headerShown: false}}>
            <Stack.Screen name="InitialScreen" component={InitialScreen} />
            <Stack.Screen
              name="AddCryptocurrenciesScreen"
              component={AddCryptocurrenciesScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
