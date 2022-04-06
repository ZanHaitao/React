import { routerRedux } from 'dva'

export default {
  state: null,
  reducers: {
    login: (state, { payload }) => {
      return payload
    },
    loginOut: (state) => {
      return null
    }
  },
  effects: {
    /**
     * 异步登录
     * @param {*} param0 
     * @param {*} param1 
     * @returns 
     */
    *fetchLogin({ payload }, { put }) {
      if (payload.loginId === "admin" && payload.loginPwd === "123123") {
        yield put({
          type: "login",
          payload: payload.loginId
        })
        localStorage.setItem("loginId", payload.loginId);
        return true
      }
      return false
    },
    /**
     * 异步注销
     * @param {*} action 
     * @param {*} param1 
     */
    *fetchLoginOut(action, { put }) {
      yield put({
        type: "loginOut"
      })
      localStorage.removeItem("loginId");
    }
  },
  subscriptions: {
    init({ dispatch }) {
      const loginId = localStorage.getItem("loginId");
      if (loginId) {
        dispatch({
          type: "login",
          payload: loginId
        })
      } else {
        dispatch(routerRedux.push('/login'))
      }
    }
  }
}