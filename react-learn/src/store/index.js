import { createStore, applyMiddleware } from 'redux';
import reducer from './action'
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger'
import sagaTask from './saga'

const saga = createSagaMiddleware();


export default createStore(reducer, applyMiddleware(saga, logger));
saga.run(sagaTask)
