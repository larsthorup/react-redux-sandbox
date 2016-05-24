var webpack = require('webpack');
var webpackConfig = require('./webpack.config');

webpackConfig.entry = [
  'webpack-dev-server/client?http://localhost:8080',
  'webpack/hot/only-dev-server'
].concat(webpackConfig.entry);

webpackConfig.output.publicPath = '/';

webpackConfig.devServer = {
  contentBase: './output/build',
  hot: true
};

webpackConfig.resolve = ['', '.webpack.js', '.web.js', '.js', '.json'];

webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin());

module.exports = webpackConfig;
