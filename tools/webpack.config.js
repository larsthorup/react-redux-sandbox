module.exports = {
  entry: [
    './src/react.main.js'
  ],
  output: {
    path: './output/build',
    publicPath: '/',
    filename: 'app.js'
    // ToDo: source maps
  },
  devServer: {
    contentBase: './output/build'
  }
};
