import { actionTypes, setLoading, setDatas } from '../../action/student/searchResult'
import { takeEvery, delay, put, call, select, cps } from 'redux-saga/effects'
import { getStudentDataFindByPage } from '../../../services/student'

// eslint-disable-next-line import/no-anonymous-default-export
export default function* () {
  yield takeEvery(actionTypes.fetchDatas, handleFetchDatas);
}

function* handleFetchDatas() {
  yield put(setLoading(true));
  const condition = yield select(state => state.student.searchCondition);
  const resp = yield call(getStudentDataFindByPage, condition);
  yield put(setDatas(resp.count, resp.datas));
  yield put(setLoading(false));
}

// function* handleFetchDatas() {
//   yield delay(2000);
//   console.log("延迟两秒触发");
// }


//测试cps指令
// function* handleFetchDatas() {
//   yield put(setLoading(true));
//   try {
//     const resp = yield cps(testCallback);
//     yield put(setDatas(resp.count, resp.datas));
//   } catch (err) {
//     console.log(err);
//   } finally {
//     yield put(setLoading(false));
//   }
// }


// function testCallback(callback) {
//   setTimeout(() => {
//     if (Math.random() > 0.5) {
//       callback(null, {
//         count: 10,
//         datas: [{
//           id: 1,
//           name: "abc"
//         }, {
//           id: 2,
//           name: "def"
//         }]
//       })
//     } else {
//       callback(new Error("错误啦！！"), null)
//     }
//   }, 1000)
// }