export default {
  state: 0,
  reducers: {
    increase: (state) => {
      return state + 1;
    },
    decrease: (state) => {
      return state - 1;
    }
  },
  effects: {
    *asyncIncrease(action, { put, call }) {
      yield call(delay, 2000);
      yield put({ type: 'increase' })
    },
    *asyncDecrease(action, { put, call }) {
      yield call(delay, 2000);
      yield put({ type: 'decrease' })
    },
  }
}

function delay(duration) {
  return new Promise((resolve => {
    setTimeout(() => {
      resolve();
    }, duration)
  }))
}