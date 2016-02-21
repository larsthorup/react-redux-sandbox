var webpack = require('webpack');

module.exports = {
  entry: [
    './test/karma-webpack.main.js'
  ],
  output: {
    path: './output/test',
    publicPath: '/',
    filename: 'karma-webpack.js'
    // ToDo: source maps
  },
  plugins: [
    new webpack.IgnorePlugin(/ReactContext/) // Note: see https://github.com/glenjamin/skin-deep
  ]
};
