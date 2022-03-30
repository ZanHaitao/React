import { createStore, bindActionCreators } from 'redux';
import * as actionType from './action/action-type';
import * as action from './action/getAction'

function Reducer(state, action) {
  if (action.type === actionType.INCREASE) {
    return state + 1;
  } else if (action.type === actionType.DECREASE) {
    return state - 1;
  } else if (action.type === actionType.SET) {
    return action.payload;
  }
  return state
}
const store = createStore(Reducer, 0);

const bindAction = bindActionCreators(action, store.dispatch);

console.log(store.getState());

bindAction.getIncreaseAction();
bindAction.getIncreaseAction();
bindAction.getIncreaseAction();
bindAction.getSetAction(999)

console.log(store.getState());
