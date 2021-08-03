import { createStore, combineReducers, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
import userReducer from '../reducers/userReducer';

const rootReducer = combineReducers({ userReducer });

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

if (window.Cypress) {
  window.store = store;
}
