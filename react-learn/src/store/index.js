import { createStore, applyMiddleware } from "redux";
import reducer from './action';
import logger from "redux-logger";
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from "redux-devtools-extension"
import task from './saga'
import history from './history'
import { routerMiddleware } from "connected-react-router"

const sagaMiddleware = createSagaMiddleware();
const routerMid = routerMiddleware(history);

export default createStore(reducer, composeWithDevTools(
  applyMiddleware(routerMid, sagaMiddleware, logger)
))

sagaMiddleware.run(task);