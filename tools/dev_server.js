/* eslint-disable no-console */
import url from 'url';
import express from 'express';
import webpack from 'webpack';

import renderDocument from './lib/render_document.js';
import webpackConfig from './webpack.dev.config.js';

const app = express();
const compiler = webpack(webpackConfig);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath,
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', (req, res) => {
  const html = renderDocument({
    bundle: `${webpackConfig.output.publicPath}app.js`,
  });

  res.send(html);
});

const { port } = url.parse(`http:${webpackConfig.output.publicPath}`);

app.listen(port, 'localhost', (error) => {
  if (error) return console.error(error);
  return console.log(`Dev server listening at http://localhost:${port}`);
});
