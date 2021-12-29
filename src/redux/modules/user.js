import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';

const LOG_IN = 'LOG_IN';

const logIn = createAction(LOG_IN, () => ({}));

const initialState = {
  list: [],
  user: {
    userId: 1,
    nickname: '인텁',
    profileImage: 'https://cdn.pixabay.com/photo/2020/12/01/10/04/dog-5793625_960_720.jpg',
    gender: 'male',
    ageRange: '30대',
    intro: '소개글입니다',
    location: '종로구',
    mbti: 'INTJ',
    interestList: [{ interest: '공부' }, { interest: '운동' }],
  },
};

const logInDB = (post_id = null) => {
  return function (dispatch, getState, { history }) {};
};

export default handleActions(
  {
    [LOG_IN]: (state, action) => produce(state, draft => {}),
  },
  initialState,
);

const actionCreators = {
  logInDB,
};

export { actionCreators };
