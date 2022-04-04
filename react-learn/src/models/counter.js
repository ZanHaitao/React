// eslint-disable-next-line import/no-anonymous-default-export
export default {
  namespace: "counter",
  state: 0,
  reducers: {
    increase: state => state + 1,
    decrease: state => state - 1,
    add: (state, { payload }) => state + payload
  },
  effects: {
    *asyncIncrease(action, { call, put }) {
      yield put({ type: "increase" })
    },
    *asyncDecrease(action, { call, put }) {
      yield put({ type: "decrease" })
    }
  },
  subscriptions: {
    windowSizeChange({ dispatch }) {
      window.onresize = () => {
        dispatch({ type: "increase" })
      }
    },
    locationChange({ history, dispatch }) {
      history.listen(() => {
        dispatch({ type: "decrease" })
      })
    }
  }
}
