import { createActions, handleActions } from 'redux-actions'

export const { increase, decrease, asyncIncrease, asyncDecrease, add } = createActions({
  INCREASE: null,
  DECREASE: null,
  ASYNC_INCREASE: null,
  ASYNC_DECREASE: null,
  ADD: number => number
})

export default handleActions({
  [increase]: state => state + 1,
  [decrease]: state => state - 1,
  [add]: (state, { payload }) => state + payload
},0)