import { REGISTER_SUCCESS, REGISTER_USER_SUCCESS } from "./actionType";

export const RegisterPageUser = (data, history) => {
    return {
        type:REGISTER_SUCCESS,
        payload:{data, history},
    }
}

export const RegisterUserSuccess = user => {
    console.log(user,"fffffffff")
    return {
        type:REGISTER_USER_SUCCESS,
        payload:user,
    }
}