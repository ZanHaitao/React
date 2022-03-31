import { createStore, bindActionCreators, combineReducers } from '../redux'
import reducer from './reducer';
import { createAddUserAction } from './action/usersAction'
const store = createStore(reducer);

console.log(store.getState());
store.dispatch(createAddUserAction({
  id: 3,
  name: "wang",
  age: 28
}))
console.log(store.getState());
