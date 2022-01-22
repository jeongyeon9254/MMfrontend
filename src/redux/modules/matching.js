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
const PUT_MATCH = 'PUT_MATCH';
const THATLOADING = 'THATLOADING';
const THATRESET = 'THATRESET';

// 매칭 신청
const postMatching = createAction(POST_MATCHING, status => ({ status }));
const ListMatchingSend = createAction(GET_MATCHINGLISTSEND, Matching => ({ Matching }));
// 신청 내역 조회
const ListMatchingReceive = createAction(GET_MATCHINGLIST, Matching => ({ Matching }));
const DeletMatchingList = createAction(Delet_MATCHING, guestId => ({ guestId }));
const PutMatchingList = createAction(PUT_MATCH, hostId => ({ hostId }));

const LoadingAction = createAction(THATLOADING, () => ({}));
const resetAction = createAction(THATRESET, () => ({}));

const initialState = {
  ListSend: [{}],
  ListReceive: [{}],
  status: '',
  loading: false,
};

// 매칭 신청
const postMatchingDB = guestId => {
  return async function (dispatch, getState, { history }) {
    try {
      const res = await postMatchingChat(guestId);
      dispatch(postMatching(res.data));
    } catch (e) {
      console.log(e);
    }
  };
};

// 신청 내역 조회
const getMatchingSendCheckDB = () => {
  return async function (dispatch, getState, { history }) {
    try {
      const res = await getMatchingSendCheck();
      dispatch(LoadingAction());
      dispatch(ListMatchingSend(res.data));
    } catch (e) {
      console.log(e);
    }
  };
};

// 신청 받은 내역 조회
const getMatchingReceiveCheckDB = () => {
  return async function (dispatch, getState, { history }) {
    const res = await getMatchingReceiveCheck();
    dispatch(ListMatchingReceive(res.data));
  };
};

// 신청 삭제
const deleteMatchingChatDB = hostId => {
  return async function (dispatch, getState, { history }) {
    try {
      await deleteMatchingChat(hostId);
      dispatch(PutMatchingList(hostId));
      history.push('/');
    } catch (e) {
      console.log(e);
    }
  };
};

export default handleActions(
  {
    [POST_MATCHING]: (state, action) =>
      produce(state, draft => {
        const { status } = action.payload;
        draft.status = status;
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
    [PUT_MATCH]: (state, action) =>
      produce(state, draft => {
        const { hostId } = action.payload;
        const rest = state.ListReceive.filter(x => {
          return x.hostId !== hostId;
        });
        draft.ListReceive = rest;
      }),
    [THATLOADING]: (state, action) =>
      produce(state, draft => {
        draft.loading = true;
      }),
    [THATRESET]: (state, action) =>
      produce(state, draft => {
        draft.loading = false;
        draft.ListSend = [{}];
        draft.ListReceive = [{}];
      }),
  },
  initialState,
);

const actionCreators = {
  getMatchingSendCheckDB,
  deleteMatchingChatDB,
  postMatchingDB,
  getMatchingReceiveCheckDB,
  PutMatchingList,
  resetAction,
};

export { actionCreators };
