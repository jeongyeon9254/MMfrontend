import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';

const SET_ALERT = 'SET_ALERT';
const AFTER_ALERT = 'AFTER_ALERT';
const EXIT_ALERT = 'EXIT_ALERT';

const setAlert = createAction(SET_ALERT, () => ({}));
const AfterAlert = createAction(AFTER_ALERT, () => ({}));
const ExitAlert = createAction(EXIT_ALERT, () => ({}));

const initialState = {
  Alert: false,
  AfterAlert: false,
};

export default handleActions(
  {
    [SET_ALERT]: (state, action) =>
      produce(state, draft => {
        draft.Alert = true;
        draft.AfterAlert = false;
      }),
    [AFTER_ALERT]: (state, action) =>
      produce(state, draft => {
        draft.Alert = false;
        draft.AfterAlert = true;
      }),
    [EXIT_ALERT]: (state, action) =>
      produce(state, draft => {
        draft.Alert = false;
        draft.AfterAlert = false;
      }),
  },
  initialState,
);

const actionCreators = {
  setAlert,
  AfterAlert,
  ExitAlert,
};

export { actionCreators };
