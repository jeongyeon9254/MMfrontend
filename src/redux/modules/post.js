import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import {
  getPost,
  getDetailPost,
  deletePost,
  addLike,
  addPost,
  editPost,
  getKategoriPost,
} from '../../api/modules/post';
import { addComment, deleteComment } from '../../api/modules/comment';

const GET_POST = 'GET_POST';
const GET_KATEGORI = 'GET_KATEGORI';
const GET_KATEGORI_SCROLL = 'GET_KATEGORI_SCROLL';
const GET_POST_SCROLL = 'GET_POST_SCROLL';
const LOADING = 'LOADING';
const GET_DETAIL = 'GET_DETAIL';
const ADD_COMMENT = 'ADD_COMMENT';
const ADD_LIKE = 'ADD_LIKE';
const RESET = 'RESET';

const getPostList = createAction(GET_POST, (data, page) => ({ data, page }));
const getPostList_Scroll = createAction(GET_POST_SCROLL, (data, page) => ({ data, page }));
const getKategoriList = createAction(GET_KATEGORI, (data, page) => ({ data, page }));
const getKategoriList_Scroll = createAction(GET_KATEGORI_SCROLL, (data, page) => ({ data, page }));
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
};

const getPostDB = (page = null) => {
  return async function (dispatch, getState, { history }) {
    try {
      dispatch(reset());
      const data = await getPost(page);
      dispatch(getPostList(data.data, page));
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

const getKategoriDB = (interestId, page) => {
  return async function (dispatch, getState, { history }) {
    try {
      dispatch(reset());
      const data = await getKategoriPost(interestId, page);
      dispatch(getKategoriList(data.data, page));
    } catch (err) {
      console.log(err);
    }
  };
};

const getKategorScrolliDB = (interestId, page) => {
  return async function (dispatch, getState, { history }) {
    try {
      console.log(page);
      const data = await getKategoriPost(interestId, page);
      dispatch(getKategoriList_Scroll(data.data, page));
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
    [GET_KATEGORI]: (state, action) =>
      produce(state, draft => {
        draft.postList = action.payload.data;
        draft.page = 0;
        draft.page = action.payload.page + 1;
      }),
    [GET_KATEGORI_SCROLL]: (state, action) =>
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
  getKategoriDB,
  getPostScrollDB,
  getKategorScrolliDB,
};

export { actionCreators };
