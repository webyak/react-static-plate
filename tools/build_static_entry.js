/* eslint-disable import/no-extraneous-dependencies */
import path from 'path';
import WebpackIsomorphicTools from 'webpack-isomorphic-tools';
import isomorphicConfig from './isomorphic.prod.config.js';

const projectBasePath = path.resolve(__dirname, '..');

// run the build_static script with Wepback's require() like behaviour
// when requiring images etc.
const webpackIsomorphicTools = new WebpackIsomorphicTools(isomorphicConfig)
  .development(false)
  .server(projectBasePath, () => {
    const { javascript, styles } = webpackIsomorphicTools.assets();

    const buildStatic = require('./build_static.js').default;

    buildStatic({
      jsBundle: javascript.bundle,
      cssBundle: styles.bundle,
    });
  });
