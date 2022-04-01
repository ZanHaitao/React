import store from './index';
import { fetchDatas } from './action/student/searchResult'

store.dispatch(fetchDatas())