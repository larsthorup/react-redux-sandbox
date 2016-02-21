module.exports = {
  entry: [
    './src/react.main.js'
  ],
  output: {
    path: './output/build',
    publicPath: '/',
    filename: 'app.js'
  },
  devtool: 'eval-source-map'
};
