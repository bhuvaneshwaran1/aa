import { LOGIN_ERROR,LOGIN_SUCCESS,LOGIN_USER } from "./actionType"


export const LoginUser = (data, history) => {
  return {
    type: LOGIN_USER,
    payload: { data, history },
  }
}

export const loginSuccess = user => {
  return {
    type: LOGIN_SUCCESS,
    payload: user,
  }
}
