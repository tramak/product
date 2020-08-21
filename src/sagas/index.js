import { all } from "redux-saga/effects";

import product from "./product";

export default function* sagas() {
  yield all([
    product(),
  ]);
}
