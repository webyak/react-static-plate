/* eslint-disable no-var */
var webpack = require('webpack');
var path = require('path');
var WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin');

// Plugin that extracts and keeps track of the real paths to the assets,
// saved within webpack-assets.json
// Reason is to have Wepback's require() like behaviour when requiring
// images etc. within Node when the static site is being rendered.
var webpackIsomorphicToolsPlugin = new WebpackIsomorphicToolsPlugin(
  require('./isomorphic.prod.config.js')
);

module.exports = {
  devtool: 'source-map',
  entry: {
    app: ['./client/index.js'],
  },
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: '[name]-[hash].js',
    libraryTarget: 'umd',
    publicPath: '/',
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      screw_ie8: true,
      compressor: { warnings: false },
    }),
    webpackIsomorphicToolsPlugin,
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: /node_modules/,
      },
      {
        test: /\.json$/,
        loaders: ['json-loader'],
      },
      {
        test: webpackIsomorphicToolsPlugin.regular_expression('woffFonts'),
        loaders: ['url?limit=10000&mimetype=application/font-woff&name=assets/[name]-[hash].[ext]'],
      },
      {
        test: webpackIsomorphicToolsPlugin.regular_expression('fonts'),
        loaders: ['file?name=assets/[name]-[hash].[ext]'],
      },
      {
        test: webpackIsomorphicToolsPlugin.regular_expression('images'),
        loaders: ['file?name=assets/[name]-[hash].[ext]'],
      },
    ],
  },
};
