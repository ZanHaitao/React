// eslint-disable-next-line import/no-anonymous-default-export
export default function (actionCreators, dispatch) {
  if (typeof actionCreators === "function") {
    return getAutoDispatchActionCreator(actionCreators, dispatch)
  } else if (typeof actionCreators === "object") {
    const result = {};
    for (const key in actionCreators) {
      if (Object.hasOwnProperty.call(actionCreators, key)) {
        if (typeof actionCreators[key] === "function") {
          result[key] = getAutoDispatchActionCreator(actionCreators[key], dispatch);
        } else {
          throw new TypeError("action 必须是一个函数")
        }
      }
    }
    return result;
  } else {
    throw new TypeError("action 必须是一个对象或者函数")
  }
}

function getAutoDispatchActionCreator(actionCreator, dispatch) {
  return function (...args) {
    dispatch(actionCreator(...args));
  }
}