export const SET_CATEGORY = 'SET_CATEGORY';
export const SET_DIFFICULTY = 'SET_DIFFICULTY';
export const SET_TYPE = 'SET_TYPE';
export const setCategory = (category) => ({
  type: SET_CATEGORY,
  category,
});

export const setDifficulty = (difficulty) => ({
  type: SET_DIFFICULTY,
  difficulty,
});

export const setType = (value) => ({
  type: SET_TYPE,
  value,
});
