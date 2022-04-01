import { actionTypes } from '../../action/student/searchCondition'

const initialState = {
  key: "",
  page: 1,
  limit: 10,
  sex: -1
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, { type, payload }) => {
  switch (type) {

    case actionTypes.setCondition:
      return { ...state, ...payload }

    default:
      return state
  }
}
