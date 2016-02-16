module.exports = {
  entry: [
    './src/react.main.js'
  ],
  output: {
    path: './output/build',
    publicPath: '/',
    filename: 'app.js'
  },
  devServer: {
    contentBase: './output/build'
  }
};
