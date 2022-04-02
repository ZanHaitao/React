export const actionTypes = {
  setLoading: Symbol("setLoading"),
  setDatas: Symbol("setDatas"),
  fetchDatas: Symbol("fetchDatas")
}

export function fetchDatas() {
  return {
    type: actionTypes.fetchDatas
  }
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
