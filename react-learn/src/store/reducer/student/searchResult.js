import { actionTypes } from '../../action/student/searchResult'

const initialState = {
  total: 0,
  datas: [],
  isLoading: false
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.setLoading:
      return {
        ...state,
        isLoading: payload
      }
    case actionTypes.setDatas:
      return {
        ...state,
        ...payload
      }
    default:
      return state
  }
}
