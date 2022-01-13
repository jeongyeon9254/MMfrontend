import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import {
  postMatchingChat,
  getMatchingSendCheck,
  getMatchingReceiveCheck,
  deleteMatchingChat,
} from '../../api/modules/matching';

const POST_MATCHING = 'POST_MATCHING';
const GET_MATCHINGLIST = 'GET_MATCHINGLIST';
const GET_MATCHINGLISTSEND = 'GET_MATCHINGLISTSEND';
const Delet_MATCHING = 'Delet_MATCHING';
const LOADING = 'LOADING';
const RESET = 'RESET';

// 매칭 신청
const postMatching = createAction(POST_MATCHING, stute => ({ stute }));
const ListMatchingSend = createAction(GET_MATCHINGLISTSEND, Matching => ({ Matching }));
// 신청 내역 조회
const ListMatchingReceive = createAction(GET_MATCHINGLIST, Matching => ({ Matching }));
const DeletMatchingList = createAction(Delet_MATCHING, guestId => ({ guestId }));

const LoadingAction = createAction(LOADING, () => ({}));
const resetAction = createAction(RESET, () => ({}));

const initialState = {
  ListSend: '',
  ListReceive: '',
  stute: '',
};

// 매칭 신청
const postMatchingDB = guestId => {
  return async function (dispatch, getState, { history }) {
    const res = await postMatchingChat(guestId);
    console.log(res);
    dispatch(postMatching(res.data));
  };
};

// 신청 내역 조회
const getMatchingSendCheckDB = () => {
  return async function (dispatch, getState, { history }) {
    const res = await getMatchingSendCheck();
    console.log(res);
    dispatch(ListMatchingSend(res.data));
  };
};

// 신청 받은 내역 조회
const getMatchingReceiveCheckDB = () => {
  return async function (dispatch, getState, { history }) {
    const res = await getMatchingReceiveCheck();
    console.log(res);
    dispatch(ListMatchingReceive(res.data));
  };
};

// 신청 삭제
const deleteMatchingChatDB = guestId => {
  return async function (dispatch, getState, { history }) {
    const res = await deleteMatchingChat(guestId);
    console.log(res);
    dispatch(DeletMatchingList(guestId));
  };
};

export default handleActions(
  {
    [POST_MATCHING]: (state, action) =>
      produce(state, draft => {
        const { stute } = action.payload;
        draft.stute = stute;
      }),
    [GET_MATCHINGLISTSEND]: (state, action) =>
      produce(state, draft => {
        const { Matching } = action.payload;
        draft.ListSend = Matching;
      }),
    [GET_MATCHINGLIST]: (state, action) =>
      produce(state, draft => {
        const { Matching } = action.payload;
        draft.ListReceive = Matching;
      }),

    [Delet_MATCHING]: (state, action) =>
      produce(state, draft => {
        const { guestId } = action.payload;
        const rest = state.ListSend.filter(x => {
          return x.guestId !== guestId;
        });
        draft.ListSend = rest;
      }),
    [LOADING]: (state, action) =>
      produce(state, draft => {
        draft.loading = true;
      }),
    [RESET]: (state, action) =>
      produce(state, draft => {
        draft.loading = false;
        draft.list = {};
      }),
  },
  initialState,
);

const actionCreators = {
  getMatchingSendCheckDB,
  deleteMatchingChatDB,
  postMatchingDB,
  getMatchingReceiveCheckDB,
};

export { actionCreators };
