/* eslint-disable no-var, prefer-template, object-shorthand, func-names,
  import/no-extraneous-dependencies */
var webpack = require('webpack');
var path = require('path');
var WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');
var functions = require('postcss-functions');
var atImport = require('postcss-import');
var precss = require('precss');
// var stylelint = require("stylelint");
var rem = require('to-rem');
var rucksack = require('rucksack-css');

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
    bundle: ['./client/index.js'],
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
    new ExtractTextPlugin('bundle-[contenthash].css', { allChunks: true }),
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
        test: webpackIsomorphicToolsPlugin.regular_expression('css'),
        loader: ExtractTextPlugin.extract(
          'style',
          [
            'css?minimize&modules&importLoaders=1&localIdentName=_[hash:base64:5]',
            'postcss',
          ]
        ),
      },
      {
        test: webpackIsomorphicToolsPlugin.regular_expression('images'),
        loaders: [
          'file?name=img/[sha512:hash:base64:7].[ext]',
          'image-webpack?optimizationLevel=7&progressive=true',
        ],
      },
    ],
  },
  postcss: function () {
    return [
      atImport,
      precss,
      rucksack,
      functions({ functions: { rem: rem } }),
      autoprefixer,
    ];
  },
};
