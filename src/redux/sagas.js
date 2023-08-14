import { all, fork } from "redux-saga/effects"

import registerSaga from '../redux/auth/Register/saga'

export default function* rootSaga() {
    yield all([
        fork(registerSaga)
    ])
}