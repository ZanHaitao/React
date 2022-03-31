import * as usersAction from '../action/usersAction'

const initialState = [
  { id: 1, name: "张三", age: 18 },
  { id: 2, name: "李四", age: 28 },
]

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case usersAction.ADDUSER:
      return [...state, payload];
    case usersAction.DELETEUSER:
      return state.filter(it => it.id !== payload);
    case usersAction.UPDATEUSER:
      return state.map(it => it.id === payload.id ? { ...it, ...payload } : it);
    default:
      return state
  }
}
