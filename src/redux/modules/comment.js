import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';

const SET_COMMENT = 'SET_COMMENT';

const setComment = createAction(SET_COMMENT, (post_id, comment_list) => ({
  post_id,
  comment_list,
}));

const initialState = {
  list: [],
};

const getCommentFB = (post_id = null) => {
  return function (dispatch, getState, { history }) {};
};

const sd = (post_id = null) => {
  return function (dispatch, getState, { history }) {};
};

export default handleActions(
  {
    [SET_COMMENT]: (state, action) => produce(state, draft => {}),
  },
  initialState,
);

const actionCreators = {
  getCommentFB,
};

export { actionCreators };
