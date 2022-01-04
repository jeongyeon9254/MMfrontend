import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';

import { getPost } from '../../api/modules/post';

const GET_POST = 'GET_POST';

const getPostList = createAction(GET_POST, data => ({ data }));

const initialState = {
  postList: [],
};

const getPostDB = (data = null) => {
  return async function (dispatch, getState, { history }) {
    const data = await getPost();
    dispatch(getPostList(data.data));
  };
};

export default handleActions(
  {
    [GET_POST]: (state, action) =>
      produce(state, draft => {
        draft.postList = action.payload.data;
      }),
  },
  initialState,
);

const actionCreators = {
  getPostList,
  getPostDB,
};

export { actionCreators };
