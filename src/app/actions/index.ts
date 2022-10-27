import axios from 'axios';
import {INFO} from './constants';

const urlApi: string = 'https://data.messari.io/api/v1/assets';

export const getInfo = () => {
  return async function (dispatch) {
    try {
      const infoApi = await axios.get(urlApi);

      return dispatch({
        type: INFO,
        payload: infoApi.data.data,
      });
    } catch (e) {
      console.log(e);
    }
  };
};
