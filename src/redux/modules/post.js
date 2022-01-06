import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';

import { getPost, getDetailPost, deletePost, addLike, addPost } from '../../api/modules/post';
import { addComment, deleteComment } from '../../api/modules/comment';

const GET_POST = 'GET_POST';
const GET_DETAIL = 'GET_DETAIL';
const ADD_COMMENT = 'ADD_COMMENT';
const ADD_LIKE = 'ADD_LIKE';

const getPostList = createAction(GET_POST, data => ({ data }));
const getPostDetail = createAction(GET_DETAIL, data => ({ data }));
const addComments = createAction(ADD_COMMENT, data => ({ data }));
const addLikes = createAction(ADD_LIKE, data => ({ data }));

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

const addPostDB = multipartFile => {
  return async function (dispatch, getState, { history }) {
    try {
      await addPost(multipartFile);
      history.replace('/PostMain');
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

const addCommentsDB = (postId = null, comments) => {
  return async function (dispatch, getState, { history }) {
    const comment = {
      comment: comments,
    };
    try {
      await addComment(postId, comment);
      const data = await getDetailPost(postId);
      dispatch(addComments(data.data));
    } catch (err) {
      console.log(err);
    }
  };
};

const deleteCommentsDB = (postId, commentsId) => {
  return async function (dispatch, getState, { history }) {
    try {
      await deleteComment(postId, commentsId);
      const data = await getDetailPost(postId);
      dispatch(addComments(data.data));
    } catch (err) {
      console.log(err);
    }
  };
};

const addLikeDB = (postId = null) => {
  return async function (dispatch, getState, { history }) {
    try {
      const res = await addLike(postId);
      const data = await getDetailPost(postId);
      dispatch(addLikes(data.data));
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
};

export default handleActions(
  {
    [GET_POST]: (state, action) =>
      produce(state, draft => {
        draft.postList = action.payload.data;
      }),
    [GET_DETAIL]: (state, action) =>
      produce(state, draft => {
        draft.detail = action.payload.data;
      }),
    [ADD_COMMENT]: (state, action) =>
      produce(state, draft => {
        draft.detail = action.payload.data;
      }),
    [ADD_LIKE]: (state, action) =>
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
  addCommentsDB,
  addLikeDB,
  deleteCommentsDB,
  addPostDB,
};

export { actionCreators };
