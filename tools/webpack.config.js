var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/react.main.js'
  },
  output: {
    path: './output/build',
    filename: '[name]-[hash].js'
  },
  devtool: 'source-map',
  plugins: [
    new webpack.IgnorePlugin(/ReactContext|react\/addons/),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
};
