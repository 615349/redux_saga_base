import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';

import reducer from './reducers';
import saga from './saga';
import Home from './containers/home';
import AboutUs from './containers/aboutUs';
import i18n from './i18n/en.json';
import './index.scss';

const middleware = createSagaMiddleware();
const store = createStore(
  reducer,
  applyMiddleware(middleware)
);

middleware.run(saga);

const App = (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <NavLink exact to='/' className="link" activeClassName='selected-nav'>{i18n.homeNav}</NavLink>
        <NavLink to='/about' className="link" activeClassName='selected-nav'>{i18n.aboutUsNav}</NavLink>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={AboutUs} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
);

render(App, document.getElementById('root'));
