import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';

import { getPost, getDetailPost, deletePost } from '../../api/modules/post';

const GET_POST = 'GET_POST';
const GET_DETAIL = 'GET_DETAIL';

const getPostList = createAction(GET_POST, data => ({ data }));
const getPostDetail = createAction(GET_DETAIL, data => ({ data }));

const initialState = {
  postList: [],
  detail: [],
};

const getPostDB = (data = null) => {
  return async function (dispatch, getState, { history }) {
    try {
      const data = await getPost();
      dispatch(getPostList(data.data));
    } catch (err) {
      console.log(err);
    }
  };
};

const deletePostDB = (postId = null) => {
  return async function (dispatch, getState, { history }) {
    try {
      await deletePost(postId);
      history.replace('/PostMain');
    } catch (err) {
      console.log(err);
    }
  };
};

const getDetailDB = (postId = null) => {
  return async function (dispatch, getState, { history }) {
    try {
      const data = await getDetailPost(postId);
      dispatch(getPostDetail(data.data));
    } catch (err) {
      console.log(err);
    }
  };
};

export default handleActions(
  {
    [GET_POST]: (state, action) =>
      produce(state, draft => {
        console.log(action.payload.data);
        draft.postList = action.payload.data;
      }),
    [GET_DETAIL]: (state, action) =>
      produce(state, draft => {
        draft.detail = action.payload.data;
      }),
  },
  initialState,
);

const actionCreators = {
  getPostList,
  getPostDB,
  getDetailDB,
  deletePostDB,
};

export { actionCreators };
