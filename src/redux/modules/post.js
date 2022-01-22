import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import {
  getPost,
  getDetailPost,
  deletePost,
  addLike,
  addPost,
  editPost,
  getCategoryPost,
} from '../../api/modules/post';
import { addComment, deleteComment } from '../../api/modules/comment';

const GET_POST = 'GET_POST';
const GET_CATEGORY = 'GET_CATEGORY';
const GET_CATEGORY_SCROLL = 'GET_CATEGORY_SCROLL';
const GET_POST_SCROLL = 'GET_POST_SCROLL';
const LOADING = 'LOADING';
const GET_DETAIL = 'GET_DETAIL';
const ADD_COMMENT = 'ADD_COMMENT';
const ADD_LIKE = 'ADD_LIKE';
const RESET = 'RESET';

const getPostList = createAction(GET_POST, (data, page) => ({ data, page }));
const getPostList_Scroll = createAction(GET_POST_SCROLL, (data, page) => ({ data, page }));
const getCategoryList = createAction(GET_CATEGORY, (data, page) => ({ data, page }));
const getCategoryList_Scroll = createAction(GET_CATEGORY_SCROLL, (data, page) => ({ data, page }));
const loading = createAction(LOADING, data => ({ data }));
const getPostDetail = createAction(GET_DETAIL, data => ({ data }));
const addComments = createAction(ADD_COMMENT, data => ({ data }));
const addLikes = createAction(ADD_LIKE, data => ({ data }));
const reset = createAction(RESET, () => ({}));

const initialState = {
  postList: [],
  detail: [],
  loading: false,
  page: 0,
  spiner: false,
};

const getPostDB = (page = null) => {
  return async function (dispatch, getState, { history }) {
    try {
      dispatch(loading(true));
      dispatch(reset());
      const data = await getPost(page);
      dispatch(getPostList(data.data, page));
      console.log(page);
      dispatch(loading(false));
    } catch (err) {
      console.log(err);
    }
  };
};

const getPostScrollDB = (page = null) => {
  return async function (dispatch, getState, { history }) {
    try {
      const data = await getPost(page);
      dispatch(getPostList_Scroll(data.data, page));
    } catch (err) {
      console.log(err);
    }
  };
};

const getCategoryDB = (interestId, page) => {
  return async function (dispatch, getState, { history }) {
    try {
      dispatch(loading(true));
      dispatch(reset());
      const data = await getCategoryPost(interestId, page);
      dispatch(getCategoryList(data.data, page));
      dispatch(loading(false));
    } catch (err) {
      console.log(err);
    }
  };
};

const getCategoryScrollDB = (interestId, page) => {
  return async function (dispatch, getState, { history }) {
    try {
      const data = await getCategoryPost(interestId, page);
      dispatch(getCategoryList_Scroll(data.data, page));
    } catch (err) {
      console.log(err);
    }
  };
};

const addPostDB = multipartFile => {
  return async function (dispatch, getState, { history }) {
    dispatch(loading(true));
    try {
      await addPost(multipartFile);
      dispatch(loading(false));
      dispatch(reset());
      history.replace('/PostMain');
    } catch (err) {
      console.log(err);
      alert('이미지 용량 문제');
      history.push('/');
    }
  };
};

const editPostDB = (postId, data) => {
  return async function (dispatch, getState, { history }) {
    dispatch(loading(true));
    try {
      await editPost(postId, data);
      dispatch(loading(false));
      dispatch(reset());
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
      dispatch(reset());
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
        draft.page = 0;
        draft.page = action.payload.page + 1;
      }),
    [GET_POST_SCROLL]: (state, action) =>
      produce(state, draft => {
        draft.postList.push(...action.payload.data);
        draft.page = action.payload.page + 1;
      }),
    [GET_CATEGORY]: (state, action) =>
      produce(state, draft => {
        draft.postList = action.payload.data;
        draft.page = 0;
        draft.page = action.payload.page + 1;
      }),
    [GET_CATEGORY_SCROLL]: (state, action) =>
      produce(state, draft => {
        draft.postList.push(...action.payload.data);
        draft.page = action.payload.page + 1;
      }),
    [LOADING]: (state, action) =>
      produce(state, draft => {
        draft.loading = action.payload.data;
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
    [RESET]: (state, action) =>
      produce(state, draft => {
        draft.postList = [];
        draft.page = 0;
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
  editPostDB,
  reset,
  getCategoryDB,
  getPostScrollDB,
  getCategoryScrollDB,
};

export { actionCreators };
