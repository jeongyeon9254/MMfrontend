import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';

const LOG_IN = 'LOG_IN';

const logIn = createAction(LOG_IN, (post_id, comment_list) => ({ post_id, comment_list }));

const initialState = {
  list: [],
};

const getCommentFB = (post_id = null) => {
  return function (dispatch, getState, { history }) {};
};

export default handleActions(
  {
    [LOG_IN]: (state, action) => produce(state, draft => {}),
  },
  initialState,
);

const actionCreators = {
  getCommentFB,
};

export { actionCreators };
