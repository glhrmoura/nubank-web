import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from '../components/navbar';
import { GithubIcon } from '../components/icons/Github';

import Home from '../pages/home';

import {
  FloatButton,
  NubankInnerLayout,
} from '../theme/global-styles';

const Router = () => {
  const redirect = () => {
    window.open('https://github.com/glhrmoura/nubank-web', '_blank')
  }

  return (
    <BrowserRouter>
      <Navbar />
      <NubankInnerLayout>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </NubankInnerLayout>
      <FloatButton onClick={redirect}>
        <GithubIcon />
      </FloatButton>
    </BrowserRouter>
  );
}

export default Router;