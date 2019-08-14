import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Components
import Navbar from './navbar';
import Home from './home';

import {
  LandingContainer,
} from './styles';

export default () => (
  <BrowserRouter>
    <Navbar />
    <LandingContainer>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </LandingContainer>
  </BrowserRouter>
);