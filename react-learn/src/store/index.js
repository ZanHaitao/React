import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer'
import promise from 'redux-promise'
import logger from 'redux-logger'
export default createStore(reducer, applyMiddleware(promise, logger));