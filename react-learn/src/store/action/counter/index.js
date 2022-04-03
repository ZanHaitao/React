import { createActions, handleActions, combineActions } from 'redux-actions'

export const { increase, decrease, asyncIncrease, asyncDecrease, add } = createActions({
  INCREASE: () => 1,
  DECREASE: () => -1,
  ASYNC_INCREASE: null,
  ASYNC_DECREASE: null,
  ADD: number => number
})

export default handleActions({
  [combineActions(increase, decrease, add)]: (state, { payload }) => state + payload
}, 0)