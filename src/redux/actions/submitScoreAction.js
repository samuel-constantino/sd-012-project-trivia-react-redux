export const SUBMIT_SCORE = 'SUBMIT_SCORE';

export const submitScore = (score, assertions) => ({
  type: SUBMIT_SCORE,
  totalScore: score,
  totalAssertions: assertions,
});
