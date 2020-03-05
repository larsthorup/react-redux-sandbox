var path = require('path');
var webpack = require('webpack');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var pureCss = require('purecss/package.json');

module.exports = {
  entry: [
    './src/react.main.js'
  ],
  output: {
    path: path.join(__dirname, '../output/build'),
    chunkFilename: '[name]-[chunkhash].js',
    filename: '[name]-[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'css-loader'
        ]
      }
    ]
  },
  mode: process.env.NODE_ENV ? 'production' : 'development',
  devtool: 'source-map',
  plugins: [
    new webpack.IgnorePlugin(/ReactContext|react\/addons/),
    new MiniCssExtractPlugin({
      filename: 'app-[contenthash].css',
      chunkFilename: '[id].css'
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      deps: {
        pureCss
      }
    })
  ]
};
