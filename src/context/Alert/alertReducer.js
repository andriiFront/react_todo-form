import { HIDE_ALERT, SHOW_ALERT } from "../type";

const handlers = {
  [SHOW_ALERT]: (state, { payload }) => ({ 
    ...payload,
    visible: true
  }),
  [HIDE_ALERT]: state => ({
    ...state,
    visible: false
  }),
};

export const alertReducer = (state, action) => {
  const handle = handlers[action.type] || handlers.DEFAULT;

  return handle(state, action);
}
