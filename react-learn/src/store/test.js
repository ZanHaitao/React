import store from './index';
import { autoIncrease, stopIncrease } from './action/counter'

window.autoIncrease = function () {
  store.dispatch(autoIncrease())
}
window.stopIncrease = function () {
  store.dispatch(stopIncrease())
}

// store.dispatch(fetchDatas())