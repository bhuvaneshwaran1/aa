import { RegisterApi } from "../../../API/AuthApi";
import {takeEvery,put,call} from 'redux-saga/effects';
import { RegisterUser,RegisterUserSuccess } from "./action";
import { REGISTER_SUCCESS } from "./actionType";

function* RegisterPageUser({payload:{data}}) {
    try {
        const Response = yield call(RegisterApi, data);
        console.log("Register", Response)
        if(Response?.status === "Success"){
            yield put(RegisterUserSuccess(Response))
        }
    }
    catch(err) {
        console.log("error", err)
    }
}

function* registerSaga() {
    yield takeEvery(REGISTER_SUCCESS,RegisterPageUser)
}

export default registerSaga;