import store from './index';
// import { createSetLodingAction, createSetUsersAction } from './action/usersAction'
// import { getStudentDataFindByPage } from '../services/student'

import { setDatas } from './action/usersAction'

store.dispatch(setDatas());


// store.dispatch(createSetLodingAction(true));
// getStudentDataFindByPage({
//   page: 1,
//   limit: 10,
// }).then(resp => {
//   store.dispatch(createSetUsersAction(resp.datas));
//   store.dispatch(createSetLodingAction(false));
// })