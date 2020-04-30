import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import reducer from './reducers';
import saga from './saga';
import App from './components/App';
import './index.scss';

const middleware = createSagaMiddleware();
const store = createStore(
  reducer,
  applyMiddleware(middleware)
);

middleware.run(saga);

render((
  <Provider store={store}>
    <App />
  </Provider>
  ),
  document.getElementById('root')
);
