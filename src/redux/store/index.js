import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import scoreReducer from '../reducers/scoreReducer';
import userReducer from '../reducers/userReducer';
import settingReducer from '../reducers/settingReducer';

const rootReducer = combineReducers({ userReducer, scoreReducer, settingReducer });

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;

if (window.Cypress) {
  window.store = store;
}
