import { takeLatest, put, call, fork, take, cancel, cancelled, delay } from "redux-saga/effects";

import { LOGIN } from "src/constants/settings";
import { fetchFail, fetchRequest, fetchSuccess } from "src/actions/settings";
import * as Api from "src/api";

function* loginSaga(action) {
  try {
    yield put(fetchRequest());
    const data = yield call(Api.login, action.payload);

    yield put(fetchSuccess(data));
  } catch (error) {
    yield put(fetchFail({ error: error.message }))
  } finally {
    if (yield cancelled())
      console.log('Sync cancelled!');
  }
}

export default function* () {
  yield takeLatest(LOGIN, loginSaga);
};

const takeEvery1 = (pattern, saga, ...args) => {
  return fork(function*() {
    while(true) {
      const action = yield take(pattern);
      yield call(saga, ...args.concat(action));
    }
  })
};

const takeLatest1 = (pattern, saga, ...args) => {
  return fork( function*() {
    let lastTask;

    while(true) {
      const action = yield take(pattern);

      if (lastTask) {
        cancel(lastTask);
      }

      lastTask = yield fork(saga, ...args.concat(action));
    }
  });
};