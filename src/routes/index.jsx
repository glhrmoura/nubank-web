import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from '../components/navbar';

import Home from '../pages/home';

import {
  NubankInnerLayout,
} from '../theme/global-styles';

export default () => (
  <BrowserRouter>
    <Navbar />
    <NubankInnerLayout>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </NubankInnerLayout>
  </BrowserRouter>
);