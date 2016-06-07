// ==================================================
// Root
// ----
// Entry component for hot reloading.
// ==================================================

import React from 'react';
import { Router, browserHistory } from 'react-router';

import routes from '../routes.js';

const Root = () => (
  <Router routes={routes} history={browserHistory} />
);

export default Root;
