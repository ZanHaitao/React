export const actionTypes = {
  setLoading: Symbol("setLoading"),
  setDatas: Symbol("setDatas")
}

/**
 * 设置加载状态
 * @param {*} payload 
 * @returns 
 */
export function setLoading(payload) {
  return {
    type: actionTypes.setLoading,
    payload
  }
}

/**
 * 设置学生数据
 * @param {*} payload 
 * @returns 
 */
export function setDatas(total, datas) {
  return {
    type: actionTypes.setDatas,
    payload: {
      total,
      datas
    }
  }
}
