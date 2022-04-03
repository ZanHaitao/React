import { takeEvery, put } from 'redux-saga/effects'
import { asyncIncrease, asyncDecrease, increase, decrease } from '../../action/counter'

// eslint-disable-next-line import/no-anonymous-default-export
export default function* () {
  yield takeEvery(asyncIncrease.toString(), function* () {
    yield put(increase());
  })
  yield takeEvery(asyncDecrease.toString(), function* () {
    yield put(decrease());
  })
}