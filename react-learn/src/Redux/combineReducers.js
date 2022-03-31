import isPlainObject from './util/isPlainObject'
import actionTypes from './util/actionTypes'
function validateReducers(reducers) {
  if (typeof reducers !== "object") {
    throw new TypeError("必须是一个对象")
  } else if (!isPlainObject(reducers)) {
    throw new TypeError("必须是一个平面对象")
  }
  for (const key in reducers) {
    if (Object.hasOwnProperty.call(reducers, key)) {
      let state = reducers[key](undefined, {
        type: actionTypes.INIT()
      })
      if (state === undefined) {
        throw new TypeError("state的返回值不可以是undefined");
      }
      state = reducers[key](undefined, {
        type: actionTypes.UNKNOWN()
      })
      if (state === undefined) {
        throw new TypeError("state的返回值不可以是undefined");
      }
    }
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function (reducers) {
  validateReducers(reducers);
  return function (state = {}, action) {
    const newState = {};
    for (const key in reducers) {
      if (Object.hasOwnProperty.call(reducers, key)) {
        newState[key] = reducers[key](state[key], action);
      }
    }
    return newState
  }
}