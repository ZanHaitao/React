import { take } from 'redux-saga/effects'
import { actionTypes } from '../../action/counter'

// eslint-disable-next-line import/no-anonymous-default-export
export default function* () {
  while (true) {
    const result = yield take(actionTypes.asyncIncrease);
    console.log("监听到asyncIncrease", result);
  }
}