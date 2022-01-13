import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';

import { getchemyDB } from '../../api/modules/chemy';

const GET_PROFILE = 'GET_PROFILE';
const LOADING = 'LOADING';
const RESET = 'RESET';

const getProfile = createAction(GET_PROFILE, data => ({ data }));
const LoadingAction = createAction(LOADING, () => ({}));
const resetAction = createAction(RESET, () => ({}));

const initialState = {
  list: {},
  loading: false,
};

const getProfileDB = (userId = null) => {
  return async function (dispatch, getState, { history }) {
    try {
      const res = await getchemyDB(userId);
      dispatch(getProfile(res.data));
      dispatch(LoadingAction());
    } catch (err) {
      console.log(err);
    }
  };
};

export default handleActions(
  {
    [GET_PROFILE]: (state, action) =>
      produce(state, draft => {
        draft.list = { ...action.payload.data };
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
  getProfileDB,
  resetAction,
};

export { actionCreators };
