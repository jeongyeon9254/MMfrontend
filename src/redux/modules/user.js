import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import { kakaoLogin } from '../../api/modules/user';
import { setCookie } from '../../shared/Cookie';

const LOG_IN = 'LOG_IN';

const logIn = createAction(LOG_IN, user => ({ user }));

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

const logInDB = code => {
  return async function (dispatch, getState, { history }) {
    const res = await kakaoLogin(code);

    const token = res.headers.authorization;

    setCookie('authorization', token);

    localStorage.setItem('userInfo', JSON.stringify(res.data));
    // localStorage.setItem('token', token);

    if (res.data.signStatus === false) {
      history.push('/AddMyinfo');
      window.alert('처음이신구요! 추가정보 입력 부탁드립니다!!');
    } else {
      history.push('/');
      window.alert('로그인 완료');
    }
  };
};

const AddMyinfoDB = () => {
  return async function (dispatch, getState, { history }) {};
};

export default handleActions(
  {
    [LOG_IN]: (state, action) => produce(state, draft => {}),
  },
  initialState,
);

const actionCreators = {
  logInDB,
  logIn,
};

export { actionCreators };
