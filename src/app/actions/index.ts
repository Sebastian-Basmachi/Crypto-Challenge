import axios from 'axios';
import {INFO_API} from './constants';

const urlApi: string = 'https://data.messari.io/api/v1/assets';

export const getInfoApi = () => {
  return async function (dispatch) {
    try {
      const infoApi = await axios.get(urlApi);

      return dispatch({
        type: INFO_API,
        payload: infoApi.data.data,
      });
    } catch (e) {
      console.log(e);
    }
  };
};
