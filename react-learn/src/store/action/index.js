import { combineReducers } from 'redux';
import student from './student';
import history from '../history';
import { connectRouter } from "connected-react-router"

export default combineReducers({
  student,
  router: connectRouter(history)
})