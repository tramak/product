import { takeEvery, call, put, select } from 'redux-saga/effects';
import * as REALTY from '../constants/realty';

function* loadRequest() {
  console.log('loadRequest');
}

function* saveData() {
  console.log('saveData');
}

export default function* () {
  yield takeEvery(REALTY.LOAD_REQUEST, loadRequest);
  yield takeEvery(REALTY.SAVE, saveData);
}
