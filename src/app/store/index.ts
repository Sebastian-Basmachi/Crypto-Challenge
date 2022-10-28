import {applyMiddleware} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import rootReducer from '../reducer';
import thunk from 'redux-thunk';

const store = configureStore({reducer: rootReducer}, applyMiddleware(thunk));

export default store;
