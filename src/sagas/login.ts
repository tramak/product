import { takeEvery, put, call } from "redux-saga/effects";

import { LOGIN } from "src/constants/settings";
import { fetchFail, fetchRequest, fetchSuccess } from 'src/actions/settings';
import loginRequest from "src/api/login";


function* loginSaga(action) {
  yield put(fetchRequest());
  try {
    const data = yield call(loginRequest, action.payload);
    yield put(fetchSuccess(data));
  } catch (error) {
    yield put(fetchFail(error))
  }
}

export default function* () {
  yield takeEvery(LOGIN, loginSaga);
};
