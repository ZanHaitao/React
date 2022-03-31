import { LOGINUSER } from '../action/loginUserAction';

const initialState = null;

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, { type, payload }) => {
  console.log(type);
  switch (type) {
    case LOGINUSER:
      return payload
    default:
      return state
  }
}
