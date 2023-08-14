import { REGISTER_SUCCESS, REGISTER_USER_SUCCESS } from "./actionType";

const initialState = {
  message: null,
  loading: false,
  user: null,
RegisterationSuccess: null,
RegisterationError: null,
}

const registerUser = (state = initialState, action) => {
  switch (action?.type) {
    case REGISTER_SUCCESS:
      state = {
        ...state,
        loading: true
      }
     break
    case REGISTER_USER_SUCCESS:
      state = {
        ...state,
        loading: false,
        RegisterationSuccess: action?.payload,
        RegisterationError: null,
      }
      break
    default:
      state = { ...state }
      break
  }
   return state
}

export default registerUser