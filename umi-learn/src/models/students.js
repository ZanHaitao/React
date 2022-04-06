import { getStudentDataFindByPage } from "../services/student"
import { routerRedux } from "dva"

export default {
  state: {
    condition: {
      key: "",
      sex: -1,
      page: 1,
      limit: 10
    },
    result: {
      datas: [],
      total: 0
    }
  },
  reducers: {
    changeCondition(state, { payload }) {
      return {
        ...state,
        condition: {
          ...state.condition,
          ...payload
        }
      }
    },
    setResult(state, { payload }) {
      return {
        ...state,
        result: {
          ...state.result,
          ...payload
        }
      }
    }
  },
  effects: {
    /**
     * 设置搜索条件
     * @param {*} param0 
     * @param {*} param1 
     */
    *setCondition({ payload }, { put, select }) {
      let condition = yield select(state => state.students.condition);
      condition = {
        ...condition,
        ...payload
      }
      yield put(routerRedux.push(`?limit=${condition.limit}&page=${condition.page}&sex=${condition.sex}&key=${condition.key}`))
    },
    /**
     * 获取数据
     * @param {*} action 
     * @param {*} param1 
     */
    *fetchStudentData(action, { put, call, select }) {
      const condition = yield select(state => state.students.condition);
      const resp = yield call(getStudentDataFindByPage, condition);
      yield put({
        type: "setResult",
        payload: {
          total: resp.count,
          datas: resp.datas
        }
      })
    }
  },
  subscriptions: {
    listenRouter({ history, dispatch }) {
      history.listen(() => {
        const query = history.location.query;
        query.limit && (query.limit = +query.limit)
        query.page && (query.page = +query.page)
        query.sex && (query.sex = +query.sex)
        dispatch({ type: "changeCondition", payload: query });
        dispatch({
          type: "fetchStudentData"
        })
      })
    }
  }
}