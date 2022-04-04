import { put, takeEvery, call, select } from 'redux-saga/effects'
import { fetchDatas, setDatas, setLoading } from '../../action/student/searchResult'
import { getStudentDataFindByPage } from '../../../services/student'

// eslint-disable-next-line import/no-anonymous-default-export
export default function* () {
  yield takeEvery(fetchDatas.toString(), fetchDatasSaga)
}

function* fetchDatasSaga() {
  console.log(1);
  try {
    yield put(setLoading(true));
    const condition = yield select(state => state.student.condition);
    const resp = yield call(getStudentDataFindByPage, condition);
    yield put(setDatas(resp.datas, resp.count));
    yield put(setLoading(false));
  } catch (err) {
    console.log(err);
  }
}
