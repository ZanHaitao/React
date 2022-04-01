import { getStudentDataFindByPage } from '../../../services/student'

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

export function fetchDatas() {
  return async (dispatch, getState) => {
    dispatch(setLoading(true));
    const condition = getState().student.searchCondition
    const resp = await getStudentDataFindByPage(condition);
    dispatch(setDatas(resp.count,resp.datas));
    dispatch(setLoading(false));
  }
}