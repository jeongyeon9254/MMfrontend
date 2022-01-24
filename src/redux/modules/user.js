import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import { kakaoLogin } from '../../api/modules/user';
import { setCookie } from '../../shared/Cookie';
import { editMyinfoDB, getMyMbitInfo, getMyPost } from '../../api/modules/user';

const GET_MBTIINFO = 'GET_MBTIINFO';
const GET_MYPOST = 'GET_MYPOST';
const GET_MYPOST_BOX = 'GET_MYPOST_BOX';
const GET_MYPOST_SCROLL = 'GET_MYPOST_SCROLL';
const RESET_USER = 'RESET_USER';
const LOADING = 'LOADING';

const UpMbtiInfo = createAction(GET_MBTIINFO, info => ({ info }));
const GetMypost = createAction(GET_MYPOST, (data, page) => ({ data, page }));
const GetMypostBox = createAction(GET_MYPOST_BOX, data => ({ data }));
const getMyPost_Scroll = createAction(GET_MYPOST_SCROLL, (data, page) => ({ data, page }));
const resetUser = createAction(RESET_USER, () => ({}));
const loading = createAction(LOADING, data => ({ data }));

const initialState = {
  mbti: {},
  loading: false,
  MypostList: [],
  page: 0,
};

const logInDB = code => {
  return async function (dispatch, getState, { history }) {
    const res = await kakaoLogin(code);
    const token = res.headers.authorization;

    setCookie('authorization ', token);

    localStorage.setItem('userInfo', JSON.stringify(res.data));

    if (res.data.signStatus === false) {
      document.location.href = '/AddMyinfo';
    } else {
      document.location.href = '/';
    }
  };
};
const userInfoPut = multipartFile => {
  return async function (dispatch, getState, { history }) {
    const res = await editMyinfoDB(multipartFile);
    localStorage.removeItem('userInfo');
    localStorage.setItem('userInfo', JSON.stringify(res.data));
    history.push('/Guide');
  };
};

const AddMyinfoDB = () => {
  return async function (dispatch, getState, { history }) {
    const res = await getMyMbitInfo();
    dispatch(UpMbtiInfo(res.data));
  };
};

const getMyPostDB = (page = null) => {
  return async function (dispatch, getState, { history }) {
    dispatch(loading(true));
    dispatch(resetUser());
    const data = await getMyPost(page);
    dispatch(GetMypost(data.data, page));
    dispatch(loading(false));
  };
};

const getMyPostBoxDB = (page = 0) => {
  return async function (dispatch, getState, { history }) {
    dispatch(resetUser());
    const data = await getMyPost(page);
    dispatch(GetMypostBox(data.data));
  };
};

const getMypostScrollDB = (page = null) => {
  return async function (dispatch, getState, { history }) {
    const data = await getMyPost(page);
    dispatch(getMyPost_Scroll(data.data, page));
  };
};

export default handleActions(
  {
    [GET_MBTIINFO]: (state, action) =>
      produce(state, draft => {
        draft.mbti = action.payload.info;
      }),
    [GET_MYPOST]: (state, action) =>
      produce(state, draft => {
        draft.MypostList = action.payload.data;
        draft.page = 0;
        draft.page = action.payload.page + 1;
      }),
    [GET_MYPOST_BOX]: (state, action) =>
      produce(state, draft => {
        draft.MypostList = action.payload.data;
      }),
    [GET_MYPOST_SCROLL]: (state, action) =>
      produce(state, draft => {
        draft.MypostList.push(...action.payload.data);
        draft.page = action.payload.page + 1;
      }),
    [LOADING]: (state, action) =>
      produce(state, draft => {
        draft.loading = action.payload.data;
      }),
    [RESET_USER]: (state, action) =>
      produce(state, draft => {
        draft.MypostList = [];
        draft.page = 0;
      }),
  },
  initialState,
);

const actionCreators = {
  logInDB,
  AddMyinfoDB,
  userInfoPut,
  getMyPostDB,
  getMypostScrollDB,
  resetUser,
  getMyPostBoxDB,
};

export { actionCreators };
