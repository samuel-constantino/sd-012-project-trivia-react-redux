import { SUBMIT_SCORE } from '../actions/submitScoreAction';

const INITIAL_STATE = {
  totalScore: 0,
  totalAssertions: 0,
};

function scoreReducer(state = INITIAL_STATE, action) {
  const { type, totalScore, totalAssertions } = action;
  switch (type) {
  case SUBMIT_SCORE:
    return { ...state, totalScore, totalAssertions };
  default:
    return state;
  }
}

export default scoreReducer;
