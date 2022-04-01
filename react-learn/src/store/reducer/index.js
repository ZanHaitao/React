import loginUserReducer from './loginUserReducer'
import usersReducer from './usersReducer'
import { combineReducers } from '../../redux'

// eslint-disable-next-line import/no-anonymous-default-export
// export default (state = {}, action) => {
//   return {
//     test:testReducer(state.test,action),
//     loginUser: loginUserReducer(state.loginUser, action),
//     users: usersReducer(state.users, action)
//   }
// }

export default combineReducers({
  loginUserReducer,
  usersReducer,
})