import store from './index';
import { fetchDatas } from './action/student/searchResult'
import { add, asyncDecrease, asyncIncrease } from './action/counter'

window.fetchDatas = function () {
  store.dispatch(fetchDatas())
}

window.add = function (num) {
  store.dispatch(add(num))
}
window.asyncDecrease = function () {
  store.dispatch(asyncDecrease())
}
window.asyncIncrease = function () {
  store.dispatch(asyncIncrease())
}