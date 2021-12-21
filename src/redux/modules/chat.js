import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';

const SET_CHAT = 'SET_CHAT';

const setChatRoom = createAction(SET_CHAT, () => ({}));

const initialState = {
  list: [],
};

const setChatRoomDB = (post_id = null) => {
  return function (dispatch, getState, { history }) {};
};

export default handleActions(
  {
    [SET_CHAT]: (state, action) => produce(state, draft => {}),
  },
  initialState,
);

const actionCreators = {
  setChatRoomDB,
};

export { actionCreators };
