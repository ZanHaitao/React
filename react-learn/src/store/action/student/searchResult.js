import { createActions, handleActions } from 'redux-actions';

/**
 * 搜索结果action
 */
export const { setLoading, setDatas, fetchDatas } = createActions({
  SET_LOADING: payload => payload,
  SET_DATAS: (datas, total) => ({
    total,
    datas
  }),
  FETCH_DATAS: null
})

/**
 * 搜索结果reducer
 */
export default handleActions({
  [setDatas]: (state, { payload }) => ({
    ...state,
    ...payload
  }),
  [setLoading]: (state, { payload }) => ({
    ...state,
    isLoading: payload
  })
}, {
  total: 0,
  datas: [],
  isLoading: false
})