import { all } from "redux-saga/effects";

import realty from "./realty";

export default function* sagas() {
  yield all([
    realty(),
  ]);
}
