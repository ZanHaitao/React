import * as actionType from './action-type'

export function getIncreaseAction() {
  return createAction(actionType.INCREASE);
}

export function getDecreaseAction() {
  return createAction(actionType.DECREASE);
}

export function getSetAction(payload) {
  return createAction(actionType.SET, payload)
}

/**
 * 辅助创建action
 * @param {*} type 
 * @param {*} payload 
 * @returns 
 */
function createAction(type, payload = "") {
  return {
    type,
    payload
  }
}