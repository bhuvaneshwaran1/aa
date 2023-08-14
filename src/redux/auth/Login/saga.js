import { loginApi } from "../../../API/AuthApi";
import { call, put, takeEvery, takeLatest } from "redux-saga/effects"
import { loginSuccess } from "./action";
import { LoginUser } from "./action";
import { LOGIN_USER } from "./actionType";

function* LoginUser({payload:{data}}) {
    try {
        const response = yield call(loginApi, data)
        if (response.status === "Success") {
            yield put(loginSuccess(response))
    }
}
catch(err) {
    console.log("error", err)
}
}

function* LoginSaga() {
    yield takeEvery(LOGIN_USER,LoginUser)
}
export default LoginSaga;