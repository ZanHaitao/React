import { TEST2 } from '../action/testAction'

const initialState = null

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case TEST2:
      return payload

    default:
      return state
  }
}
