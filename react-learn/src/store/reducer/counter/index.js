import { actionTypes } from '../../action/counter'

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = 10, { type }) {
  switch (type) {
    case actionTypes.increase:
      return state + 1;
    case actionTypes.decrease:
      return state - 1;
    default:
      return state;
  }
}