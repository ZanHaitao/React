import { all } from 'redux-saga/effects'
import student from './student'

// eslint-disable-next-line import/no-anonymous-default-export
export default function* () {
  yield all([student()])
}