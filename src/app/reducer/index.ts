import {Crypto} from '../../components/interfaces';
import {CRYPTOS_USER, INFO} from '../actions/constants';

const initialState = {
  allCryptos: [],
  cryptocurrenciesOfUser: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case INFO:
      const cryptoModel: Crypto[] = action.payload
        ? action.payload.map(crypto => ({
            id: crypto.id,
            name: crypto.name,
            symbol: crypto.symbol,
            price: crypto.metrics.market_data.price_usd,
            percent:
              crypto.metrics.market_data.percent_change_usd_last_24_hours,
          }))
        : state.allCryptos;
      return {...state, allCryptos: cryptoModel};

    case CRYPTOS_USER:
      return {...state, cryptocurrenciesOfUser: JSON.parse(action.payload)};

    default:
      return state;
  }
}

export default rootReducer;
