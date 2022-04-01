import * as usersAction from '../action/usersAction'

const initialState = {
  isLoading: false,
  datas: []
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case usersAction.ADDUSER:
      return {
        ...state,
        datas: [...state.datas, payload]
      };
    case usersAction.DELETEUSER:
      return {
        ...state,
        datas: state.datas.filter(it => it.id !== payload)
      };
    case usersAction.UPDATEUSER:
      return {
        ...state,
        datas: state.datas.map(it => it.id === payload.id ? { ...it, ...payload } : it)
      };
    case usersAction.SETUSERS:
      return {
        ...state,
        datas: payload
      };
    case usersAction.SETLODING:
      return {
        ...state,
        isLoading: payload
      };
    default:
      return state
  }
}
