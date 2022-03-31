export const LOGINUSER = Symbol("login-user");

export const createLoginUserAction = (payload) => ({
  type: LOGINUSER,
  payload
})
