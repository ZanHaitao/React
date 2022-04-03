import { all } from 'redux-saga/effects'
import counter from './counter'
import student from './student'

// eslint-disable-next-line import/no-anonymous-default-export
export default function* () {
  console.log("saga任务启动");
  yield all([counter(), student()]);
}