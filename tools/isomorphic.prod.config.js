module.exports = {
  assets: {
    woffFonts: {
      extensions: ['woff', 'woff2'],
      regular_expression: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    },
    fonts: {
      extensions: ['ttf', 'eot', 'svg'],
      regular_expression: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    },
    images: {
      extensions: ['png', 'jpg', 'gif', 'ico'],
    },
  },
};
