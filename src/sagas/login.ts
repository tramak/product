import { takeLatest, put, call } from "redux-saga/effects";

import { LOGIN } from "src/constants/settings";
import { fetchFail, fetchRequest, fetchSuccess } from "src/actions/settings";
import * as Api from "src/api";

function* loginSaga(action) {
  yield put(fetchRequest());
  try {
    const data = yield call(Api.login, action.payload);
    yield put(fetchSuccess(data));
  } catch (error) {
    yield put(fetchFail({ error: error.message }))
  }
}

export default function* () {
  yield takeLatest(LOGIN, loginSaga);
};
