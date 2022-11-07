import {CRYPTOS_USER, INFO} from './constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

const urlApi: string = 'https://data.messari.io/api/v1/assets';

export const getInfo = () => {
  return async function (dispatch) {
    try {
      const infoApi = await fetch(urlApi, {
        headers: {'x-messari-api-key': '0c9dd049-5e4c-4201-95fe-06ee4317b9ac'},
      }).then(response => response.json());

      return dispatch({
        type: INFO,
        payload: infoApi.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const postCryptocurrencyOfUser = (crypto: string) => {
  return async function (dispatch) {
    try {
      await AsyncStorage.setItem('cryptocurrenciesOfUser', crypto);

      return dispatch({
        type: CRYPTOS_USER,
        payload: crypto,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getCryptocurrenciesOfUser = () => {
  return async function (dispatch) {
    try {
      const cryptocurrenciesOfUser = await AsyncStorage.getItem(
        'cryptocurrenciesOfUser',
      );

      return dispatch({
        type: CRYPTOS_USER,
        payload: cryptocurrenciesOfUser,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
