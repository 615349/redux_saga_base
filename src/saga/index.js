import watchRequestAlgolia from './home';

export default function* rootSaga() {
  yield [
    watchRequestAlgolia(),
  ]
}
