import { createActions, handleActions } from 'redux-actions'

export const { setCondition } = createActions({
  SET_CONDITION: payload => payload
})

export default handleActions({
  [setCondition]: (state, { payload }) => ({
    ...state,
    ...payload
  })
}, {
  key: "",
  page: 1,
  limit: 10,
  total: 0
})