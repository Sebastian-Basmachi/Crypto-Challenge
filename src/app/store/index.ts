import {applyMiddleware} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import rootReducer from '../reducer';
import thunk from 'redux-thunk';

const store = configureStore(
  {
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        immutableCheck: {warnAfter: 500},
        serializableCheck: {warnAfter: 500},
      }),
  },
  applyMiddleware(thunk),
);

export default store;
