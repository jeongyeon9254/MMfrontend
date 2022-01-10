import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';

const SET_ALERT = 'SET_ALERT';
const AFTER_ALERT = 'AFTER_ALERT';
const LOGOUT_ALERT = 'LOGOUT_ALERT';
const EXIT_ALERT = 'EXIT_ALERT';

const setAlert = createAction(SET_ALERT, () => ({}));
const AfterAlert = createAction(AFTER_ALERT, () => ({}));
const LogoutAlert = createAction(LOGOUT_ALERT, () => ({}));
const ExitAlert = createAction(EXIT_ALERT, () => ({}));

const initialState = {
  Alert: false,
  AfterAlert: false,
  LogoutAlert: false,
};

export default handleActions(
  {
    [SET_ALERT]: (state, action) =>
      produce(state, draft => {
        draft.Alert = true;
        draft.AfterAlert = false;
        draft.LogoutAlert = false;
      }),
    [AFTER_ALERT]: (state, action) =>
      produce(state, draft => {
        draft.Alert = false;
        draft.AfterAlert = true;
        draft.LogoutAlert = false;
      }),
    [LOGOUT_ALERT]: (state, action) =>
      produce(state, draft => {
        draft.Alert = false;
        draft.AfterAlert = false;
        draft.LogoutAlert = true;
      }),
    [EXIT_ALERT]: (state, action) =>
      produce(state, draft => {
        draft.Alert = false;
        draft.AfterAlert = false;
        draft.LogoutAlert = false;
      }),
  },
  initialState,
);

const actionCreators = {
  setAlert,
  AfterAlert,
  LogoutAlert,
  ExitAlert,
};

export { actionCreators };
