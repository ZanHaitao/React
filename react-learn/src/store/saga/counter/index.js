import { takeEvery } from 'redux-saga/effects'
import { actionTypes } from '../../action/counter'

// eslint-disable-next-line import/no-anonymous-default-export
export default function* () {
  yield takeEvery(actionTypes.asyncIncrease, asyncIncrease);
  yield takeEvery(actionTypes.asyncDecrease, asyncDecrease);
  console.log("开始监听asyncIncrease和asyncDecrease");
}

function* asyncIncrease() {
  console.log("监听到asyncIncrease");
}

function* asyncDecrease() {
  console.log("监听到asyncDecrease");
}