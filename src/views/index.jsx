import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import {
  NubankInnerLayout,
} from './styles';

import Navbar from './components/navbar';
import Home from './home';

export default () => (
  <BrowserRouter>
    <Navbar />
    <NubankInnerLayout>
      <Switch>
        <Route path="/nubank-web" component={Home} />
      </Switch>
    </NubankInnerLayout>
  </BrowserRouter>
);