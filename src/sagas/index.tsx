import { all } from "redux-saga/effects";

import login from "./login";
import product from "./product";

function* helloSaga() {
  console.log('Hello Sagas!')
}

export default function* sagas() {
  yield all([
    helloSaga(),
    login(),
    product(),
  ]);
}
