import { TEST } from '../action/testAction'
import test2Reducer from './test2Reducer'
const initialState = {
  test1: null,
  test2: null
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case TEST:
      return { ...state, test1: action.payload }
    default:
      return {
        ...state,
        test2: test2Reducer(state.test2, action)
      }
  }
}
