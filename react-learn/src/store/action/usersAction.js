import { getStudentDataFindByPage } from '../../services/student';

export const ADDUSER = Symbol("add-user");
export const DELETEUSER = Symbol("delete-user");
export const UPDATEUSER = Symbol("update-user");
export const SETUSERS = Symbol("set-users");
export const SETLODING = Symbol("set-loding");

export const createAddUserAction = (payload) => {
  return {
    type: ADDUSER,
    payload
  }
}

export const createDeleteUserAction = (id) => ({
  type: DELETEUSER,
  payload: id
})

export const createUpdateUserAction = (id, newUser) => ({
  type: UPDATEUSER,
  payload: {
    ...newUser,
    id
  }
})

export const createSetUsersAction = (users) => ({
  type: SETUSERS,
  payload: users
})

export const createSetLodingAction = (payload) => ({
  type: SETLODING,
  payload,
})

export const setDatas = () => async (dispatch) => {
  dispatch(createSetLodingAction(true));
  const resp = await getStudentDataFindByPage();
  dispatch(createSetUsersAction(resp.datas))
  dispatch(createSetLodingAction(false));
}