import { put, takeLatest } from 'redux-saga/effects'
import { REQUEST_ALGOLIA } from '../constants';
import * as actions from '../actions/';

function* fetchAlgolia() {
  try {
    const response = yield fetch('api.json');
    if (!response.ok) throw new Error('fetch algolia failed');
    const json = yield response.json();
    yield put(actions.receiveAlgolia(json));
  } catch (error) {
    yield put(actions.requestAlgoliaFailed());
  }
}

export default function* watchRequestAlgolia() {
  yield takeLatest(REQUEST_ALGOLIA, fetchAlgolia);
}
