import { takeEvery, put, delay } from 'redux-saga/effects'
import { asyncIncrease, asyncDecrease, increase, decrease } from '../../action/counter'

// eslint-disable-next-line import/no-anonymous-default-export
export default function* () {
  yield takeEvery(asyncIncrease.toString(), function* () {
    yield delay(2000);
    yield put(increase());
  })
  yield takeEvery(asyncDecrease.toString(), function* () {
    yield delay(2000);
    yield put(decrease());
  })
  console.log("监听asyncIncrease、asyncDecrease中");
}