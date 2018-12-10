import { put, takeLatest } from 'redux-saga/effects'
import { REQUEST_PUBLIC } from '../constants';
import * as actions from '../actions/aboutUsActionCreators';

function* fetchPublic() {
  try {
    const response = yield fetch('https://api.github.com/gists/public');
    if (!response.ok) throw new Error('fetch public failed');
    const json = yield response.json();
    yield put(actions.receivePublic(json));
  } catch (error) {
    yield put(actions.requestPublicFailed());
  }
}

export default function* watchRequestAlgolia() {
  yield takeLatest(REQUEST_PUBLIC, fetchPublic);
}
