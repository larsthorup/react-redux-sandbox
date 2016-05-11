var webpack = require('webpack');

module.exports = {
  entry: [
    './test/karma-webpack.main.js'
  ],
  output: {
    path: './output/test',
    publicPath: '/',
    filename: 'karma-webpack.js'
  },
  devtool: 'eval-source-map',
  plugins: [
    new webpack.IgnorePlugin(/ReactContext|react\/addons/), // Note: see https://github.com/glenjamin/skin-deep
    new webpack.IgnorePlugin(/app\.css/)
  ]
};
