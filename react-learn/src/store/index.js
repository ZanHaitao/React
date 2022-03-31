// import { createStore, bindActionCreators, combineReducers } from '../redux'
import { createStore, applyMiddleware } from 'redux'
import reducer from './reducer';
import { createAddUserAction } from './action/usersAction'

const logMiddleWare1 = store => next => action => {
  console.log("中间件1");
  console.log("获取旧数据", store.getState);
  console.log("action", action);
  next(action);
  console.log("获取新数据", store.getState);
}
const logMiddleWare2 = store => next => action => {
  console.log("中间件2");
  console.log("获取旧数据", store.getState);
  console.log("action", action);
  next(action);
  console.log("获取新数据", store.getState);
}

// const store = createStore(reducer, applyMiddleware(logMiddleWare1, logMiddleWare2));

const store = applyMiddleware(logMiddleWare1, logMiddleWare2)(createStore)(reducer);

console.log(store.getState());
store.dispatch(createAddUserAction({
  id: 3,
  name: "wang",
  age: 28
}))
console.log(store.getState());
