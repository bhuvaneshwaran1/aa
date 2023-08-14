import { LOGIN_SUCCESS } from "./actionType";

const initialState = {
    error: "",
    loading: false,
  }

  const Login = (state= initialState,action) => {
    switch(action?.type) {
      case LOGIN_USER:
        state = {
          ...state,
          loading: true,
        }
        break
        case LOGIN_SUCCESS:
            state = {
              ...state,
              userDetail: action.payload.data,
              loading: false,
            }
            break

            default: state = {...state}
    } return state
  }

  export default Login;