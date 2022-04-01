// import { createStore, bindActionCreators, combineReducers } from '../redux'
import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import reducer from './reducer';

export default createStore(reducer,
  applyMiddleware(
    thunk,
    logger
  )
);

