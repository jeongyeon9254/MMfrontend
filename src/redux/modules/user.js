import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import { kakaoLogin } from '../../api/modules/user';
import { setCookie } from '../../shared/Cookie';
import { editMyinfoDB, getMyMbitInfo } from '../../api/modules/user';

const GET_INFO = 'GET_INFO';

const UpMbtiInfo = createAction(GET_INFO, info => ({ info }));

const initialState = {
  mbti: {
    name: 'INTJ',
    firstTitle: '‘성취’를 통해 느끼는 행복',
    firstContent:
      '통솔자형 사람은 크든 작든 성취 가능한 도전에 매력을 느낍니다. 이들은 충분한 시간과 자원만 있으면 그 어떤 것도 실현 가능하다고 믿습니다. 이것이 통솔자형 사람을 뛰어난 사업가로 만드는 이들만의 성격적 자질로, 전략적인 사고와 장기적인 안목과 더불어 빠른 판단력과 정확성으로 계획을 단계별로 실행해 나감으로써 진정한 리더의 역할을 합니다. 보통의 사람이라면 포기하고 말 일들도 대단한 의지력으로 꾸준히 밀어붙이는데, 이는 이들에게 있어 자아실현을 위한 자기 암시이기도 합니다. 뛰어난 사회성을 발휘하여 다른 동료들을 채찍질함으로써 함께 더 큰 성공과 성취를 이루고자 합니다.',
    secondTitle: '‘성취’를 통해 느끼는 행복',
    secondContent:
      '통솔자형 사람은 크든 작든 성취 가능한 도전에 매력을 느낍니다. 이들은 충분한 시간과 자원만 있으면 그 어떤 것도 실현 가능하다고 믿습니다. 이것이 통솔자형 사람을 뛰어난 사업가로 만드는 이들만의 성격적 자질로, 전략적인 사고와 장기적인 안목과 더불어 빠른 판단력과 정확성으로 계획을 단계별로 실행해 나감으로써 진정한 리더의 역할을 합니다. 보통의 사람이라면 포기하고 말 일들도 대단한 의지력으로 꾸준히 밀어붙이는데, 이는 이들에게 있어 자아실현을 위한 자기 암시이기도 합니다. 뛰어난 사회성을 발휘하여 다른 동료들을 채찍질함으로써 함께 더 큰 성공과 성취를 이루고자 합니다.',
  },
};

const logInDB = code => {
  return async function (dispatch, getState, { history }) {
    const res = await kakaoLogin(code);

    const token = res.headers.authorization;

    setCookie('authorization ', token);

    localStorage.setItem('userInfo', JSON.stringify(res.data));

    if (res.data.signStatus === false) {
      document.location.href = '/AddMyinfo';
      window.alert('처음이신구요! 추가정보 입력 부탁드립니다!!');
    } else {
      document.location.href = '/';
      window.alert('로그인 완료');
    }
  };
};
const userInfoPut = userInfo => {
  return async function (dispatch, getState, { history }) {
    const res = await editMyinfoDB(userInfo);
    console.log(res);
    localStorage.removeItem('userInfo');
    localStorage.setItem('userInfo', JSON.stringify(res.data));
    history.push('/');
  };
};

const AddMyinfoDB = () => {
  return async function (dispatch, getState, { history }) {
    const res = await getMyMbitInfo();
    dispatch(UpMbtiInfo(res));
  };
};

export default handleActions(
  {
    [GET_INFO]: (state, action) =>
      produce(state, draft => {
        draft.mbti = action.payload.info;
      }),
  },
  initialState,
);

const actionCreators = {
  logInDB,
  AddMyinfoDB,
  userInfoPut,
};

export { actionCreators };
