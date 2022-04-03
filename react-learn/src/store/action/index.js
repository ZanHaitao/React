import counter from './counter';
import student from './student'
import { combineReducers } from 'redux'

export default combineReducers({
  counter,
  student
})