import { SET_CATEGORY } from '../actions/settingActions';

const INITIAL_STATE = {
  category: 'Any Category',
};

const settingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_CATEGORY:
    return { ...state, category: action.category };
  default:
    return state;
  }
};

export default settingReducer;
