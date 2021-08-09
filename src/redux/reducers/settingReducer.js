import { SET_CATEGORY, SET_DIFFICULTY, SET_TYPE } from '../actions/settingActions';

const INITIAL_STATE = {
  category: '',
  difficulty: '',
  type: '',
};
const settingReducer = (state = INITIAL_STATE, action) => {
  console.log(action.category);
  switch (action.type) {
  case SET_CATEGORY:
    return { ...state, category: action.category };
  case SET_DIFFICULTY:
    return {
      ...state,
      difficulty:
        action.difficulty === 'Random' ? '' : `&difficulty=${action.difficulty}`,
    };
  case SET_TYPE:
    return {
      ...state,
      type: action.value,
    };
  default:
    return state;
  }
};

export default settingReducer;
