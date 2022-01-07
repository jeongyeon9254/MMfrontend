import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import { kakaoLogin } from '../../api/modules/user';
import { setCookie } from '../../shared/Cookie';
import { editMyinfoDB, getMyMbitInfo } from '../../api/modules/user';
// 모달
// import { Alert } from '../../components/element/index';
// import { actionCreators as modalActions } from '../../../redux/modules/modal';

// 모달
// const YesAlert = useSelector(state => state.modal.Alert);

const GET_MBTIINFO = 'GET_MBTIINFO';

const UpMbtiInfo = createAction(GET_MBTIINFO, info => ({ info }));

const initialState = {
  mbti: {},
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
const userInfoPut = multipartFile => {
  return async function (dispatch, getState, { history }) {
    const res = await editMyinfoDB(multipartFile);
    localStorage.removeItem('userInfo');
    localStorage.setItem('userInfo', JSON.stringify(res.data));
    history.push('/');
  };
};

const AddMyinfoDB = () => {
  return async function (dispatch, getState, { history }) {
    const res = await getMyMbitInfo();
    dispatch(UpMbtiInfo(res.data));
  };
};

export default handleActions(
  {
    [GET_MBTIINFO]: (state, action) =>
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
