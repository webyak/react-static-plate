// ==================================================
// Root
// ----
// Entry component for hot reloading.
// ==================================================

import React from 'react';
import { Router, browserHistory, applyRouterMiddleware } from 'react-router';
import { useScroll } from 'react-router-scroll';

import routes from '../routes.js';

const Root = () => (
  <Router
    routes={routes}
    history={browserHistory}
    render={applyRouterMiddleware(useScroll())}
  />
);

export default Root;
