import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import scoreReducer from '../reducers/scoreReducer';

import userReducer from '../reducers/userReducer';

const rootReducer = combineReducers({ userReducer, scoreReducer });

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

if (window.Cypress) {
  window.store = store;
}
