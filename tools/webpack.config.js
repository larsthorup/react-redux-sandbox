var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var pureCss = require('purecss/package.json');

module.exports = {
  entry: {
    app: './src/react.main.js'
  },
  output: {
    path: './output/build',
    filename: '[name]-[hash].js'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
      }
    ]
  },
  devtool: 'source-map',
  plugins: [
    new webpack.IgnorePlugin(/ReactContext|react\/addons/),
    new ExtractTextPlugin('app-[hash].css'),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      deps: {
        pureCss
      }
    })
  ]
};
