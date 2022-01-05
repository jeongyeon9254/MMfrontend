import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';

const SET_ALERT = 'SET_ALERT';
const EXIT_ALERT = 'EXIT_ALERT';

const setAlert = createAction(SET_ALERT, () => ({}));
const ExitAlert = createAction(EXIT_ALERT, () => ({}));

const initialState = {
  Alert: false,
};

export default handleActions(
  {
    [SET_ALERT]: (state, action) =>
      produce(state, draft => {
        draft.Alert = true;
      }),
    [EXIT_ALERT]: (state, action) =>
      produce(state, draft => {
        draft.Alert = false;
      }),
  },
  initialState,
);

const actionCreators = {
  setAlert,
  ExitAlert,
};

export { actionCreators };
