import { all } from 'redux-saga/effects'
import counter from './counter'
import student from './student'

// eslint-disable-next-line import/no-anonymous-default-export
export default function* () {
  yield all([counter(), student()]);
  console.log("saga执行完成！");
}