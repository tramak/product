import { takeEvery, call, put, select } from 'redux-saga/effects';
import * as PRODUCT from '../constants/product';

function* loadRequest() {
  console.log('loadRequest');
}

function* saveData() {
  console.log('saveData');
}

export default function* () {
  yield takeEvery(PRODUCT.LOAD_REQUEST, loadRequest);
  yield takeEvery(PRODUCT.SAVE, saveData);
}
