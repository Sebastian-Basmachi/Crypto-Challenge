import {Crypto} from '../../components/interfaces';
import {INFO} from '../actions/constants';

const initialState = {
  allCryptos: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case INFO:
      const cryptoModel: Crypto[] = action.payload.map(crypto => ({
        id: crypto.id,
        name: crypto.name,
        symbol: crypto.symbol,
        price: crypto.metrics.market_data.price_usd,
        percent: crypto.metrics.market_data.percent_change_usd_last_24_hours,
      }));
      return {...state, allCryptos: cryptoModel};

    default:
      return state;
  }
}

export default rootReducer;
