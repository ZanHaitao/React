import { createActions, handleActions } from "redux-actions";

/**
 * 搜索条件action
 */
export const { change } = createActions({
  CHANGE: payload => payload
})

/**
 * 搜素条件reducer
 */
export default handleActions({
  [change]: (state, { payload }) => ({
    ...state,
    ...payload
  })
}, {
  key: "",
  sex: -1,
  limit: 10,
  page: 1
})