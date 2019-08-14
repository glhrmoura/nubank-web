import './assets/styles/index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

import Nubank from './views/index';

ReactDOM.render(
  <Provider store={store}>
    <Nubank />
  </Provider>,
  document.getElementById('root'),
);