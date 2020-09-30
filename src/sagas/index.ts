import { all } from "redux-saga/effects";

import login from "./login";
import product from "./product";

export default function* sagas() {
  yield all([
    login(),
    product(),
  ]);
}
