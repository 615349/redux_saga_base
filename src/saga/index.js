import watchRequestAlgolia from './home';
import watchRequestPublic from './aboutUs';

export default function* rootSaga() {
  yield [
    watchRequestAlgolia(),
    watchRequestPublic()
  ]
}
