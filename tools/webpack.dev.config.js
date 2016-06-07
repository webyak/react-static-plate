/* eslint-disable no-var, prefer-template */
var webpack = require('webpack');
var path = require('path');

var DEV_PORT = process.env.DEV_PORT || 3000;
var DEV_HOST = '//localhost:' + DEV_PORT + '/';
var HMR_HOST = DEV_HOST + '__webpack_hmr';

module.exports = {
  devtool: 'inline-source-map',
  entry: {
    app: [
      'webpack-hot-middleware/client?path=' + HMR_HOST,
      './client/index.js',
    ],
  },
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: '[name].js',
    publicPath: DEV_HOST,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
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
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loaders: ['url?limit=10000&mimetype=application/font-woff'],
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loaders: ['file'],
      },
      {
        test: /\.(png|jpg|gif|ico)$/,
        loaders: ['file?name=[name].[ext]'],
      },
    ],
  },
};
