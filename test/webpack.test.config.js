var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    './test/karma-webpack.main.js'
  ],
  output: {
    path: path.join(__dirname, '../output/test'),
    publicPath: '/',
    filename: 'karma-webpack.js'
  },
  devtool: 'eval-source-map',
  plugins: [
    new webpack.IgnorePlugin(/ReactContext|react-addons-test-utils/), // Note: see https://github.com/glenjamin/skin-deep/issues/88
    new webpack.IgnorePlugin(/app\.css/)
  ]
};
