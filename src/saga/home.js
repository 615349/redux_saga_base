import { put, takeLatest } from 'redux-saga/effects'
import { REQUEST_ALGOLIA } from '../constants';
import * as actions from '../actions/homeActionCreators';

function* fetchAlgolia() {
  try {
    const response = yield fetch('https://hn.algolia.com/api/v1/search_by_date?tags=story&hitsPerPage=50');
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
