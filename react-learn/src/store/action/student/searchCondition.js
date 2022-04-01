export const actionTypes = {
  setCondition: Symbol("setCondition")
}

/**
 * 设置搜索条件
 * @param {*} payload 
 * @returns 
 */
export function setCondition(payload) {
  return {
    type: actionTypes.setCondition,
    payload,
  }
}