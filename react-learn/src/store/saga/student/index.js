import { takeEvery, put, call, select } from 'redux-saga/effects'
import { fetchDatas, setDatas, setLoading } from '../../action/student/searchResult'
import { getStudentDataFindByPage } from "../../../services/student"

// eslint-disable-next-line import/no-anonymous-default-export
export default function* () {
  yield takeEvery(fetchDatas.toString(), fetchDatasSaga);
}

function* fetchDatasSaga() {
  yield put(setLoading(true));
  const condition = yield select(state => state.student.searchCondition);
  const resp = yield call(getStudentDataFindByPage, condition);
  yield put(setDatas(resp.count, resp.datas));
  yield put(setLoading(false));
}