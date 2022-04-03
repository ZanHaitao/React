import { createActions, handleActions } from 'redux-actions'

export const { setDatas, setLoading, fetchDatas } = createActions({
  SET_LOADING: payload => payload,
  SET_DATAS: (total, datas) => ({
    total,
    datas
  }),
  FETCH_DATAS: null
})

export default handleActions({
  [setLoading]: (state, { payload }) => ({
    ...state,
    isLoading: payload
  }),
  [setDatas]: (state, { payload }) => ({
    ...state,
    ...payload
  })
}, {
  total: 0,
  datas: [],
  isLoading: false
})
