import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Layout from './components/layout/';
import Hello from './components/hello/';
import NotFound from './components/not_found.js';

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={Hello} />
    <Route path="*" component={NotFound} />
  </Route>
);

export default routes;
