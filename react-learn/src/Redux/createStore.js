import actionTypes from './util/actionTypes'
import isPlainObject from './util/isPlainObject'

export default function createStore(reducer, defaultState) {

  let currentReducer = reducer, // 当前使用的reducer
    currentState = defaultState; // 当前保存的状态
  const listnenrs = [];

  /**
   * 分发action
   */
  function dispatch(action) {
    // 判断是否是一个平面对象
    if (!isPlainObject(action)) {
      throw new TypeError("action must be a plain object");
    }
    // 判断是否存在type属性
    if (action.type === undefined) {
      throw new TypeError("action must has a property of type");
    }

    currentState = currentReducer(currentState, action);

    for (const listnenr of listnenrs) {
      listnenr();
    }
  }

  /**
   * 获取当前的state
   */
  function getState() {
    return currentState;
  }

  /**
   * 添加一个监听者
   */
  function subscribe(listener) {
    listnenrs.push(listener);
    let isUnListnenr = false;
    return function () {
      if (isUnListnenr) return;
      const index = listnenrs.indexOf(listener);
      listnenrs.splice(index, 1);
      isUnListnenr = true;
    }
  }


  // 首次调用执行一次分发
  dispatch({
    type: actionTypes.INIT()
  })

  return {
    dispatch,
    getState,
    subscribe
  }
}