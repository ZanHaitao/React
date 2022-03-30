import { createStore } from 'redux';
import reducer from './reducer';
import * as usersAction from './action/usersAction'
import * as testAction from './action/testAction'

const store = createStore(reducer);

console.log(store.getState());
const unListen = store.subscribe(() => {
  console.log("改变了");
})
store.dispatch(testAction.createTest1Action(123));
unListen();
console.log(store.getState());


// store.dispatch(usersAction.createAddUserAction({
//   id: 3,
//   name: "wang",
//   age: 28
// }))
// console.log(store.getState());
// store.dispatch(usersAction.createDeleteUserAction(1));
// console.log(store.getState());
// store.dispatch(usersAction.createUpdateUserAction(3, {
//   name: "周",
//   age: 99
// }));
// console.log(store.getState());
