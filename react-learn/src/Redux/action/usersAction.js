export const ADDUSER = Symbol("add-user");
export const DELETEUSER = Symbol("delete-user");
export const UPDATEUSER = Symbol("update-user");

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

