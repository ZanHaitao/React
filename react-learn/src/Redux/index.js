import { createStore } from 'redux';

function Reducer(state, action) {
  if (action.type === "increase") {
    return state + 1;
  } else if (action.type === "decrease") {
    return state - 1;
  }
  return state
}

const action = {
  type: "increase"
}

const store = createStore(Reducer, 0);

console.log(store.getState());

store.dispatch(action);
store.dispatch(action);
store.dispatch(action);

console.log(store.getState());
